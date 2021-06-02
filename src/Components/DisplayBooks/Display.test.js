// import React from "react";
// import Enzyme from 'enzyme';
// import { shallow } from "enzyme";
// import { render, fireEvent } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
// import Adapter from 'enzyme-adapter-react-16';
// import { BrowserRouter } from "react-router-dom";
// import Dislpay from "./Displaybook";
// Enzyme.configure({ adapter: new Adapter() });
// describe("Display testing", () => {
//     test(" Display should render", () => {
//       const wrapper = shallow(<Dislpay />);
//       expect(wrapper.exists()).toBeTruthy();
//     });
//   });

//   it("check if heading  name", () => {
//     const { getByTestId } = render(
//       <BrowserRouter>
//         <Dislpay />
//       </BrowserRouter>
//     );

//     const bookstore = getByTestId("bag");
//     expect(bookstore).toHaveTextContent("ADDED TO BAG");
//   });