import React from 'react';
import Link from './Link';
import {shallow} from 'enzyme';

describe("Link", () => {
  it("right content", async () => {
    const linkContent = 'just a string';
    const link = shallow(<Link href={''}>{linkContent}</Link>);

    expect(link.text()).toEqual(linkContent);
  });

  it("Right href attr", async () => {
    const href = '/product/list';
    const link = shallow(<Link href={href} />);

    expect(link.find('a').getAttribute('href'))
      .toEqual(window.location.origin + href);
  });
});
