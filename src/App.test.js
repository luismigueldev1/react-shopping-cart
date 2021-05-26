import { mount } from "enzyme";
import App from "./App";

describe("Pruebas en <App/>", () => {
  const wrapper = mount(<App />);
  test("Debe de mostrarse correctamente ", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
