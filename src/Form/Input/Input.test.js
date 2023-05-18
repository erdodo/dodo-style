import React from 'react';
import { render } from '@testing-library/react';
import Input from './index';
import '@testing-library/jest-dom/extend-expect';
import { act } from 'react-dom/test-utils';
import Config from "./config.json"
import userEvent from "@testing-library/user-event";

test("Input text renders correctly", () => {
    const { debug,getByTestId } = render(<Input value={""} data-testid="input" />);
    const input = getByTestId("input");
    expect(input).toBeInTheDocument();
})

test("Input text change value", () => {
    const onChangeInput = jest.fn();
    const { getByTestId } = render(<Input onChange={onChangeInput} data-testid="input" />);
    const input = getByTestId("input");
    userEvent.type(input,"test");
    expect(onChangeInput).toHaveBeenCalledTimes(4);
    expect(input).toHaveValue("test");
})

test("Input text disabled", () => {
    const { getByTestId } = render(<Input disabled data-testid="input" />);
    const input = getByTestId("input");
    expect(input).toHaveAttribute("disabled");
})

test("Input text placeholder", () => {
    const { getByTestId } = render(<Input placeholder="test" data-testid="input" />);
    const input = getByTestId("input");
    expect(input).toHaveAttribute("placeholder","test");
})

test("Input text limit", () => {
        const {getByTestId} = render(<Input limit={10} data-testid="input"/>);
        const input = getByTestId("input");
        const limitSpan =input.parentElement.querySelector(".dodo-limit");
        expect(limitSpan).toBeInTheDocument();
        expect(limitSpan).toHaveTextContent("0/10");
        expect(input).toHaveAttribute("maxLength","10");
        userEvent.type(input,"test");
        expect(limitSpan).toHaveTextContent("4/10");



})
