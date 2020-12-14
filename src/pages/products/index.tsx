import React, {FC} from 'react';
import ProductCard from "./ProductCard";
import {ILogicProps} from './types';
import {GetServerSideProps} from 'next/types';

const ProductList: FC<ILogicProps> = (props) => {
  const {products} = props;

  console.log(products)

  return (
    <>
      {products ?
        products.map((product) => <ProductCard key={product.id} {...product} />) :
        'Нет продуктов удовлетворяющих критерии поиска'}
    </>
  );
};

export const getServerSideProps: GetServerSideProps<ILogicProps> = async () => {
  try {
    const products = await fetch('https://heroku-mishyn.herokuapp.com/api/product')
      .then((res: any) => res.json());

    if (!products) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        products,
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};

export default ProductList;
