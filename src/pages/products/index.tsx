import React, {FC} from 'react';
import ProductCard from "../../inst/ui/ProductCard";
import {ILogicProps} from './types';
import {GetServerSideProps} from 'next/types';
import Link from "../../inst/ui/Link";

const ProductList: FC<ILogicProps> = (props) => {
  const {products} = props;

  console.log(products)

  return (
    <>
      {products ?
        products.map((product) => (
          <Link href={{pathname: '/product/[id]', query: {id: product.id}}} prefetch={true}>
            <ProductCard key={product.id} {...product} />
          </Link>
        )) :
        'Нет продуктов удовлетворяющих критерии поиска'}s
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
