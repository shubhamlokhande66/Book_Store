import React from "react";
import Enzyme from 'enzyme';
import { shallow } from "enzyme";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from "react-router-dom";
import Signup from "./signup";
Enzyme.configure({ adapter: new Adapter() });
describe("Signup testing", () => {
  test("should render", () => {
    const wrapper = shallow(<Signup />);
    expect(wrapper.exists()).toBeTruthy();
  });
});

it("should check if Name is inserted in textfield ", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );
  
    const nameInput = getByTestId("nameInput");
    expect(nameInput).toHaveValue("");
    fireEvent.change(nameInput, {
      target: { value: "Shubham" },
    });
    expect(nameInput).toHaveValue("Shubham");
});


it("should check if email is inserted in textfield ", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <Signup />
    </BrowserRouter>
  );

  const emailInput = getByTestId("emailInput");
  expect(emailInput).toHaveValue("");
  fireEvent.change(emailInput, {
    target: { value: "lokhandeshubham24@gmail.com" },
  });

  expect(emailInput).toHaveValue("lokhandeshubham24@gmail.com");
});


it("should check if Password is inserted in textfield ", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <Signup />
    </BrowserRouter>
  );

  const passwordInput = getByTestId("passwordInput");
  expect(passwordInput).toHaveValue("");
  fireEvent.change(passwordInput, {
    target: { value: "Shubham@1998" },
  });

  expect(passwordInput).toHaveValue("Shubham@1998");
});



it("should check if Mobile is inserted in textfield ", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );
  
    const MobileInput = getByTestId("MobileInput");
    expect(MobileInput).toHaveValue("");
    fireEvent.change(MobileInput, {
      target: { value: "7083962843" },
    });
  
    expect(MobileInput).toHaveValue("7083962843");
  });
  


it("should check if message is displayed when button is clicked", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <Signup />
    </BrowserRouter>
  );

  const submit = getByTestId("submit");
  fireEvent.click(submit);
});










it("matches URI", () => {
  const EmailRegEx =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$$/;
  const Email = "lokhandeshubham24@gmail.com";
  expect(Email).toMatch(EmailRegEx);
});

it("matches URI", () => {
  const PassRegEx =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  const Pass = "Shubham@1998";
  expect(Pass).toMatch(PassRegEx);
});

it("matches URI", () => {
    const NameRegEx =  /^[A-Z]{1}[a-z]{3,}$/;
    const Name = "Shubham";
    expect(Name).toMatch(NameRegEx);
  });

  it("matches URI", () => {
    const MobileRegEx =  /^.{10,}$/;
    const Mobile = "7083962843";
    expect(Mobile).toMatch(MobileRegEx);
  });