import { jest, test, expect } from '@jest/globals';

test("17_public-class-fields-1: public class fields help us avoid .bind-ing everything", () => {
  class FakeReactComponent {
    constructor(props) {
      this.props = props;
      this.setState = () => {}; // només per diversió
    }
  }
class MyComponent extends FakeReactComponent {
  // campo público de clase (arrow function)
  handleClick = ({ target: { value } }) => {
    this.props.onClick(value)
  }

  render() {
    // coses estranyes de JSX aquí
  }

  testClick(value) {
    const fakeEvent = { target: { value } }
    this.handleClick(fakeEvent)
  }
}



  const onClick = jest.fn();
  const myComponent = new MyComponent({ onClick });
  myComponent.testClick("hello world");
  expect(onClick).toHaveBeenCalledTimes(1);
  expect(onClick).toHaveBeenCalledWith("hello world");
});
