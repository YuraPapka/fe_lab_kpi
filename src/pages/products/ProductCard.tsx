import React, {FC} from 'react';
import {makeStyles} from '@material-ui/styles';
import {IProduct} from "./types";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    padding: 10,
    marginBottom: 10,
    position: 'relative',
    background: '#FDCFF399',
  },
  image: {
    width: '30%',
    '& > img': {
      width: '100%',
      height: 'auto',
    },
  },
  data: {
    width: '70%',
    paddingLeft: 24,
    color: '#070707',
  },
  price: {
    float: 'right',
    fontSize: 24,
    position: 'absolute',
    bottom: 15,
    right: 15,
    color: '#40434E',
  },
  salesPrice: {
    textDecoration: 'line-through',
    textDecorationColor: 'red',
    fontSize: 16,
  },
}));

const ProductCard: FC<IProduct> = (props) => {
  const {image, description, price, sales} = props;
  const mc = useStyles();

  return (
    <div className={mc.root}>
      <div className={mc.image}>
        <img src={image} alt={description} />
      </div>
      <div className={mc.data}>
        <Typography variant={'h6'}>{description}</Typography>
        <div className={mc.price}>
          Цена:&nbsp;
          {
            sales ? <><span className={mc.salesPrice}>{price}$</span>/{sales}</> : price
          }
          $
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
