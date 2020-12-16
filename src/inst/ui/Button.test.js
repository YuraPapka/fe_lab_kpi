import React from 'react';
import Button from './Button';
import {shallow} from 'enzyme';

describe("Button", () => {
  it("right content", async () => {
    const btnContent = 'just a string';
    const btn = shallow(<Button href={''}>{btnContent}</Button>);

    expect(btn.text()).toEqual(btnContent);
  });

  it("click time", async () => {
    const clickCallback = jest.fn();
    const btn = shallow(<Button onClick={clickCallback}/>);

    expect(clickCallback).not.toBeCalled();

    btn.click();

    expect(clickCallback).toHaveBeenCalledTimes(10);
  });
});
