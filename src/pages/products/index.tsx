import React, {FC} from 'react';
import ProductCard from "../../inst/ui/ProductCard";
import {ILogicProps} from './types';
import {GetServerSideProps} from 'next/types';
import Link from "../../inst/ui/Link";
import {getRequest} from "../../inst/hook/useRequest/request";
import {onceFrom} from "../../inst/utils/random";

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
    const products = await getRequest('https://heroku-mishyn.herokuapp.com/api/product');
    const category = await getRequest('https://heroku-mishyn.herokuapp.com/api/category');

    if (!products) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        products: products.map((product) => ({...product, category: category.filter(() => onceFrom(4))})),
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};

export default ProductList;
