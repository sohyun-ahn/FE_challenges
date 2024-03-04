import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("the counter starts at 0", () => {
  render(<App />); //App 컴포넌트 렌더링
  const counterElement = screen.getByTestId("counter"); // screen object를 이용해서 원하는 엘레멘트에 접근
  expect(counterElement).toHaveTextContent("0"); // id가 counter인 엘레멘트의 텍스트가 0인지 테스트
});

test("minus button has correct text", () => {
  render(<App />);
  const buttonElment = screen.getByTestId("minus-button");
  expect(buttonElment).toHaveTextContent("-");
});

test("plus button has correct text", () => {
  render(<App />);
  const buttonElment = screen.getByTestId("plus-button");
  expect(buttonElment).toHaveTextContent("+");
});

test("when the + button is pressed, the counter changes to 1", () => {
  render(<App />);
  const buttonElment = screen.getByTestId("plus-button");
  fireEvent.click(buttonElment);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent("1");
});

test("when the - button is pressed, the counter changes to -1", () => {
  render(<App />);
  const buttonElment = screen.getByTestId("minus-button");
  fireEvent.click(buttonElment);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent("-1");
});

test("on/off button has blue color", () => {
  render(<App />);
  const buttonElment = screen.getByTestId("onoff-button");
  expect(buttonElment).toHaveStyle({ backgroundColor: "blue" });
});

test("prevent the -,+ button from being pressed when the on/off button is clicked", () => {
  render(<App />);
  const onoffButtonElement = screen.getByTestId("onoff-button");
  fireEvent.click(onoffButtonElement);
  const plusButtonElement = screen.getByTestId("plus-button");
  const minusButtonElement = screen.getByTestId("minus-button");
  expect(plusButtonElement).toBeDisabled();
  expect(minusButtonElement).toBeDisabled();
});
