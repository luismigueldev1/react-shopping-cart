import AuthPage from ".";
import { mount } from "enzyme";

describe("Pruebas en <AuthPage/>", () => {
  const wrapper = mount(<AuthPage />);
  test("debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
