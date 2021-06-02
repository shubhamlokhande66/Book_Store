import React from "react";
import Enzyme from 'enzyme';
import { shallow } from "enzyme";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from "react-router-dom";
import Login from "./login";
Enzyme.configure({ adapter: new Adapter() });
describe("Login testing", () => {
  test("should render", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toBeTruthy();
  });
});

it("should check if email is inserted in textfield ", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <Login />
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
      <Login />
    </BrowserRouter>
  );

  const passwordInput = getByTestId("passwordInput");
  expect(passwordInput).toHaveValue("");
  fireEvent.change(passwordInput, {
    target: { value: "Shubham@1998" },
  });

  expect(passwordInput).toHaveValue("Shubham@1998");
});

// it("should check if Span Email Input is inserted in textfield ", () => {
//   const { getByTestId } = render(
//     <BrowserRouter>
//       <Login />
//     </BrowserRouter>
//   );

//   const spanemailInput = getByTestId("spanemailInput");
//   expect(spanemailInput).toHaveValue("");
//   fireEvent.change(spanemailInput, {
//     target: { value: "lokhandeshubham24@gmail.com" },
//   });

//   expect(spanemailInput).toHaveValue("lokhandeshubham24@gmail.com");
// });



it("should check if message is displayed when button is clicked", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );

  const submit = getByTestId("submit");
  fireEvent.click(submit);
});





it("matches URI", () => {
  const EmailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$$/;
  const Email = "lokhandeshubham24@gmail.com";
  expect(Email).toMatch(EmailRegEx);
});

it("matches URI", () => {
  const PassRegEx =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  const Pass = "Shubham@1998";
  expect(Pass).toMatch(PassRegEx);
});