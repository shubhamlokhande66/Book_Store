import React from "react";
import Enzyme from 'enzyme';
import { shallow } from "enzyme";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from "react-router-dom";
import Cart from "./Cart";
Enzyme.configure({ adapter: new Adapter() });
describe("Header testing", () => {
  test(" Header should render", () => {
    const wrapper = shallow(<Cart />);
    expect(wrapper.exists()).toBeTruthy();
  });
});

it("matches URI", () => {
  const NameRegEx = /^[A-Z]{1}[a-z ]{3,}$/;
  const firstName = "Shubham";
  expect(firstName).toMatch(NameRegEx);
});

it("matches URI", () => {
  const MobileRegEx =  /^[6-9]{1}[0-9]{9}$/;
  const Mobile = "7083962843";
  expect(Mobile).toMatch(MobileRegEx);
});

it("matches URI", () => {
  const AddressRegEx =   /^[A-Za-z ]{5,}$/;
  const Adresss = "Rampur";
  expect(Adresss).toMatch(AddressRegEx);
});


it("matches URI", () => {
  const CityRegEx =   /^[A-Za-z ]{3,}$/;
  const city = "Rahuri";
  expect(city).toMatch(CityRegEx);
});

it("matches URI", () => {
  const StateRegEx =   /^[A-Za-z ]{3,}$/;
  const State = "Rahuri";
  expect(State).toMatch(StateRegEx);
});


it("check if heading  name", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Cart />
      </BrowserRouter>
    );

    const bookstore = getByTestId("item");
    expect(bookstore).toHaveTextContent("PLACE ORDER");
  });
  
it("check if Customer  name", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <Cart />
    </BrowserRouter>
  );

  const bookstore = getByTestId("item1");
  expect(bookstore).toHaveTextContent("Customer Details");
});


it("should check if Name is inserted in textfield ", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <Cart />
    </BrowserRouter>
  );

  const nameInput = getByTestId("nameInput");
  expect(nameInput).toHaveValue("");
  fireEvent.change(nameInput, {
    target: { value: "Shubham" },
  });

  expect(nameInput).toHaveValue("Shubham");
});

it("should check if Name is inserted in textfield ", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <Cart />
    </BrowserRouter>
  );

  const MobileInput = getByTestId("MobileInput");
  expect(MobileInput).toHaveValue("");
  fireEvent.change(MobileInput, {
    target: { value: "7083962843" },
  });

  expect(MobileInput).toHaveValue("7083962843");
});

  it("check if message is displayed when button is clicked", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Cart />
      </BrowserRouter>
    );
  
    const Continue = getByTestId("Continue");
    fireEvent.click(Continue);
  });