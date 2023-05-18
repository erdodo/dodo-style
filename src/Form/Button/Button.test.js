import React from 'react';
import { render } from '@testing-library/react';
import Button from './index';
import '@testing-library/jest-dom/extend-expect';
import Config from "./config.json"
import userEvent from "@testing-library/user-event";

test("Button renders correctly", () => {
    const { debug,getByText } = render(<Button>Button</Button> );
   // debug(); // render edilen componentin html çıktısını konsola basar
    const button = getByText("Button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("dodo-button");
});
test("Button style type control ", () => {
    const typeList = ["primary","secondary","success","danger","warning","info","light","dark"];

    typeList.forEach(type => {
        const { getByText,debug } = render(<Button type={type}>button-{type}</Button> );
        const button = getByText("button-"+type);
        expect(button).toHaveClass(` ${Config.types[type]}`);
    })
})
test("Button style outline type control ", () => {
    const typeList = ["primary","secondary","success","danger","warning","info","light","dark"];

    typeList.forEach(type => {
        const { getByText,debug } = render(<Button type={type} outline>button-{type}</Button> );
        const button = getByText("button-"+type);
        expect(button).toHaveClass(` ${Config.outlineTypes[type]}`);
    })
})
test("Button style plain type control ", () => {
    const typeList = ["primary","secondary","success","danger","warning","info","light","dark"];

    typeList.forEach(type => {
        const { getByText,debug } = render(<Button type={type} plain>button-{type}</Button> );
        const button = getByText("button-"+type);
        expect(button).toHaveClass(` ${Config.plainTypes[type]}`);
    })
})
test("Button style disabled type control ", () => {
    const typeList = ["primary","secondary","success","danger","warning","info","light","dark"];

    typeList.forEach(type => {
        const { getByText,debug } = render(<Button type={type} disabled>button-{type}</Button> );
        const button = getByText("button-"+type);
        expect(button).toHaveClass(` ${Config.disabledTypes[type]}`);
        expect(button).toHaveAttribute("disabled")
    })
})
test("Button style link type control ", () => {
    const typeList = ["primary","secondary","success","danger","warning","info","light","dark"];

    typeList.forEach(type => {
        const { getByText,debug } = render(<Button type={type} link>button-{type}</Button> );
        const button = getByText("button-"+type);
        expect(button).toHaveClass(` ${Config.linkTypes[type]}`);
    })
})
test("Button style disabled link type control ", () => {
    const typeList = ["primary","secondary","success","danger","warning","info","light","dark"];

    typeList.forEach(type => {
        const { getByText,debug } = render(<Button type={type} link disabled>button-{type}</Button> );
        const button = getByText("button-"+type);
        expect(button).toHaveClass(` ${Config.disabledLinkTypes[type]}`);
    })
})
test("Button style gradient type control ", () => {
    const typeList = ["primary","secondary","success","danger","warning","info","light","dark"];

    typeList.forEach(type => {
        const { getByText,debug } = render(<Button type={type} gradient>button-{type}</Button> );
        const button = getByText("button-"+type);
        expect(button).toHaveClass(` ${Config.gradientTypes[type]}`);
    })
})
test("button size control", () => {
    const sizeList = ["xs",'sm', 'md', 'lg', 'xl', '2xl'];
    sizeList.forEach(size => {
        const { getByText,debug } = render(<Button size={size}>button-{size}</Button> );
        const button = getByText("button-"+size);
        expect(button).toHaveClass(` ${Config.size[size]}`);
    })
})
test("Button click event control", () => {
    const onClick = jest.fn();
    const { getByText,debug } = render(<Button onClick={onClick}>button</Button> );
    const button = getByText("button");
    userEvent.click(button);
    expect(onClick).toHaveBeenCalled();
})

