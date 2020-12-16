import React from 'react';
import ProductCard from './ProductCard';
import {shallow} from 'enzyme';

const product = {
  image: '/favicon.ico',
  description: "description",
  price: 12,
  sales: 11,
  category: [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
  ],
};

describe("ProductCard", () => {
  it("product name", async () => {
    const productCard = shallow(<ProductCard {...product} />);

    expect(productCard.find('h6').text()).toEqual(product.description);

  });

  it("product price without salary", async () => {
    const productCard = shallow(<ProductCard {...product} sales={undefined} />);

    expect(productCard.find('#price').text()).toEqual(`Цена ${product.price}$`);
  });

  it("product price with salary", async () => {
    const productCard = shallow(<ProductCard {...product}/>);

    const priceBlock = productCard.find('#price');
    expect(priceBlock.innerText).toEqual(`Цена ${product.price}$/${product.sales}$`);
  });

  it("product card categories", async () => {
    const productCard = shallow(<ProductCard {...product}/>);

    const categoryBlock = productCard.find('p');
    expect(categoryBlock.text())
      .toEqual(`Категории: ${product.category.map((c) => c.name).join(', ')}`);
  });

  it("image tag", async () => {
    const productCard = shallow(<ProductCard {...product} />);

    expect(productCard.find('img').getAttribute('str')).toEqual(product.image);
    expect(productCard.find('img').getAttribute('alt')).toEqual(product.description);
  });
});
