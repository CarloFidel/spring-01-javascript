// this is the object we'll be mucking around with and proxying
const getCharacter = () => {
  return {
    _id: "9RKDLS02580GHCXNZLA0",
    password: "isolemnlysweariamuptonogood",
    name: { first: "Ron", last: "Weasly" },
    classes: [
      { name: "Divination", teacher: "Sybill Trelawney" },
      { name: "Defence Against the Dark Arts", teacher: "Dolores Umbridge" },
    ],
    greet(greeting = "Hi") {
      const { first, last } = this.name;
      return `${greeting}! My name is ${first} ${last} and my ID is ${this._id} and my password is ${this.password}!`;
    },
    getTeachers() {
      return this.classes.map(({ teacher }) => teacher);
    },
  };
};

test("22_proxies-1: can wrap an existing object", () => {
  const character = getCharacter();
  const proxy = new Proxy(character, {});
  // Comprova que el proxy no és igual referencialment però sí igual profundament a l'objecte original
  expect(proxy).not.toBe(character); // referencialment diferent
  expect(proxy).toEqual(character); // profundament igual
});

test("22_proxies-2: handler can intercept gets, sets, and deletes", () => {
  const character = getCharacter();

  const handler = {
    get(target, prop) {
      // Lectura de propiedades profundas con notación 'a.b.c'
      if (prop.includes(".")) {
        return prop.split(".").reduce((obj, key) => obj && obj[key], target);
      }
      return target[prop];
    },

    set(target, prop, value) {
      // Asignación de propiedades profundas
      if (prop.includes(".")) {
        const keys = prop.split(".");
        let current = target;
        for (let i = 0; i < keys.length - 1; i++) {
          // Si no existe, crea objeto o array según el siguiente key
          if (!(keys[i] in current)) {
            current[keys[i]] = /^\d+$/.test(keys[i + 1]) ? [] : {};
          }
          current = current[keys[i]];
        }
        current[keys[keys.length - 1]] = value;
      } else {
        target[prop] = value;
      }
      return true;
    },

    deleteProperty(target, prop) {
      // No eliminar propiedades protegidas (_id)
      if (prop.startsWith("_")) return true;
      delete target[prop];
      return true;
    },
  };

  const proxy = new Proxy(character, handler);

  // Interacciones con el proxy
  proxy["classes.1.teacher"] = "Severus Snape"; // asignación profunda
  proxy.awesome = 10; // asignación superficial
  delete proxy._id; // no se elimina

  // Comprobaciones
  expect(proxy["classes.1.teacher"]).toBe("Severus Snape");
  expect(proxy.awesome).toBe(10);
  expect(proxy._id).toEqual("9RKDLS02580GHCXNZLA0");

  // Neteja
  delete proxy.awesome;
  expect(proxy.awesome).toBe(undefined);
});

//////// EXTRA CREDIT ////////

test.skip("22_proxies-3: can intercept function calls", () => {
  const character = getCharacter();

  const handler = {};
  // Tingues en compte que `apply` només funciona per a proxies en funcions!
  character.greet = new Proxy(character.greet, handler);
  character.getTeachers = new Proxy(character.getTeachers, handler);
  const result = character.greet("Hey there");
  // Comprova que el resultat no conté informació sensible
  expect(result).not.toContain(character.password);
  expect(result).not.toContain(character._id);
  expect(character.getTeachers()).toEqual([
    "Sybill Trelawney",
    "Dolores Umbridge",
  ]);
});

test.skip("22_proxies-4: can be used to do some fancy stuff with arrays", () => {
  const characters = [
    "Harry Potter",
    "Ron Weasly",
    "Hermione Granger",
    "Nevel Longbottom",
    "Lavender Brown",
    "Scabbers",
    "Pigwidgeon",
  ];

  const handler = {};
  const proxy = new Proxy(characters, handler);
  // Comprova que el proxy permet accedir a elements de l'array amb índexs positius i negatius
  expect(proxy[0]).toBe("Harry Potter");
  expect(proxy[-1]).toBe("Pigwidgeon");
  expect(proxy[-4]).toBe("Nevel Longbottom");
});
