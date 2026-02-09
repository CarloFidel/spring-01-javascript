test("02_arrow-1: pot substituir funcions tradicionals", () => {
/*   let fnMultiply, arrowMultiply;
 */
  // Escriu dues funcions que prenguin dos paràmetres i retornin el seu producte
  // Per a 'fnMultiply', assigna-li una funció tradicional
  // Per a 'arrowMultiply', assigna-li una funció fletxa

  function fnMultiply(a, b) {
    return a * b;
  };
  const arrowMultiply = (a, b) => a * b;

  expect(fnMultiply(5, 5)).toBe(arrowMultiply(5, 5));
});

test("02_arrow-2: pot substituir funcions tradicionals #2", () => {
  const nums = [2, 5, 10];

  // Substitueix la 'function' en aquesta crida a 'map' per una funció fletxa.
  // Pista: no hauries de tenir claus ni 'return' quan acabis

  const squareFn = (num) => num * num;
  const squares = nums.map(squareFn);
  squares.map = squareFn;
  const funcSource = squares.map.toString();

  expect(funcSource.includes("=>")).toBe(true);

  expect(squares.shift()).toBe(4);
  expect(squares.shift()).toBe(25);
  expect(squares.shift()).toBe(100);
});

test("02_arrow-3: lliga `this` a l'àmbit d'avaluació, no a l'àmbit d'execució", () => {
  // Modifica l'objecte 'person'. Una de les funcions hauria de convertir-se en una funció fletxa
  // per permetre que 'this' mantingui el context correctament

  const person = {
    name: "Aaron",
    greetFriends: function (friends) {
      return friends.map((friend) => {
        return this.name + " saluda a " + friend;
      });
    },
  };

  const friendsArray = ["Naomi", "Jojo", "Ryan", "Owen"];
  expect(() => person.greetFriends(friendsArray)).not.toThrow();
});

test("02_arrow-4: pot fer que les cadenes de filtres d'arrays siguin més manejables", () => {
  const data = [
    { type: "Widget", name: "Sprocket", price: 10.0, qty: 3 },
    { type: "Widget", name: "Bracket", price: 1.0, qty: 5 },
    { type: "Widget", name: "Brace", price: 2.5, qty: 1 },
    { type: "Widget", name: "Sprocket", price: 4.0, qty: 2 },
    { type: "Food", name: "Gouda", price: 8.75, qty: 4 },
    { type: "Food", name: "Bacon", price: 3.5, qty: 3 },
    { type: "CD", name: "Queen Best Hits", price: 5.5, qty: 5 },
    { type: "CD", name: "Brittney Best Hits", price: 6.25, qty: 3 },
    { type: "CD", name: "JT Best Hits", price: 2.25, qty: 6 },
  ];

  // SUBSTITUEIX TOTES LES FUNCIONS REGULARS PER FUNCIONS FLETXA
  const filterWidget = (d) => d.type != "Widget";
  const filterPrice = (d) => d.price < 5;
  const sortQty = (a, b) => a.qty - b.qty;
  const mapName = (d) => d.name;

  const shoppingList = data
    .filter(filterWidget) // Elimina els Widgets
    .filter(filterPrice) // Troba només els elements restants amb preu < 5
    .sort(sortQty) // Ordena per quantitat, descendent
    .map(mapName); // Extreu només el nom de cada element

  data.filter = filterWidget;
  shoppingList.filter = filterPrice;
  shoppingList.sort = sortQty;
  shoppingList.map = mapName;

  const filterSource1 = data.filter.toString();
  const filterSource2 = shoppingList.filter.toString();
  const sortSource = shoppingList.sort.toString();
  const mapSource = shoppingList.map.toString();

  expect(filterSource1.includes("=>")).toBe(true);
  expect(filterSource2.includes("=>")).toBe(true);
  expect(sortSource.includes("=>")).toBe(true);
  expect(mapSource.includes("=>")).toBe(true);
  expect(shoppingList.shift()).toBe("Bacon");
  expect(shoppingList.shift()).toBe("JT Best Hits");
});
