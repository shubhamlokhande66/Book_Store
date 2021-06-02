// import React from "react";
// import Enzyme from 'enzyme';
// import { shallow } from "enzyme";
// import { render, fireEvent } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
// import Adapter from 'enzyme-adapter-react-16';
// import { BrowserRouter } from "react-router-dom";
// import Header from "./Header";
// Enzyme.configure({ adapter: new Adapter() });
// describe("Header testing", () => {
//   test(" Header should render", () => {
//     const wrapper = shallow(<Header />);
//     expect(wrapper.exists()).toBeTruthy();
//   });
// });

// it("check if heading  name", () => {
//     const { getByTestId } = render(
//       <BrowserRouter>
//         <Header />
//       </BrowserRouter>
//     );

//     const bookstore = getByTestId("bookstore");
//     expect(bookstore).toHaveTextContent("BookStore");
//   });


//   it("should check if message is displayed when  Login button is clicked", () => {
//     const { getByTestId } = render(
//       <BrowserRouter>
//         <Header />
//       </BrowserRouter>
//     );
  
//     const submit = getByTestId("submit");
//     fireEvent.click(submit);
//   });