import React, {FC, useCallback} from 'react';
import ProductCard from "../../inst/ui/ProductCard";
import {GetServerSideProps} from "next";
import {ILogicProps, IQuery} from "./types";
import {IProduct} from "../../inst/types/product";
import {IReview} from "../../inst/types/review";
import {ICategory} from "../../inst/types/category";
import {ICustomer} from "../../inst/types/customer";
import {getRequest} from "../../inst/hook/useRequest/request";
import {randomInteger, onceFrom} from "../../inst/utils/random";
import {isEmpty} from 'lodash';
import {Typography} from "@material-ui/core";
import Review from "../../inst/ui/Review";
import Button from "../../inst/ui/Button";

const ProductCardPage: FC<ILogicProps> = (props) => {
  const {product, review} = props;

  const onBuy = useCallback(() => {
    alert('Функционал не реализован!');
  }, []);

  return <div>
    <ProductCard {...product} />
    <Button
      onClick={onBuy}
      style={{marginLeft: 'calc(80%)'}}
    >
      Купить
    </Button>
    {!!review?.length && (
      <>
        <Typography variant={'h6'}>Отзывы:</Typography>
        {review.map((review) => <Review {...review} />)}
      </>
    )}
  </div>
};

export const getServerSideProps: GetServerSideProps<ILogicProps, IQuery> = async ({query}) => {
  try {
    const {id} = query;

    if (!id) {
      return {
        notFound: true,
      };
    }

    const [product, category, review, customers] = await Promise.all([
      getRequest(`https://heroku-mishyn.herokuapp.com/api/product/${id}`),
      getRequest(`https://heroku-mishyn.herokuapp.com/api/category`),
      getRequest(`https://heroku-matviychuk.herokuapp.com/api/review`),
      getRequest(`https://heroku-matviychuk.herokuapp.com/api/customer`),
    ]) as [IProduct[], ICategory[], IReview[], ICustomer[]];

    if (isEmpty(product) || isEmpty(review) || isEmpty(customers)) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        product: {
          ...product,
          category: category.filter(() => onceFrom(10)),
        },
        review: review.filter(() => onceFrom(5)).map((review) => ({
          ...review,
          customer: customers[randomInteger(customers.length - 1)],
        })),
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};

export default ProductCardPage;
