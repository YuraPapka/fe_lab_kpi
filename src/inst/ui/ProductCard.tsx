import React, {FC} from 'react';
import {makeStyles} from '@material-ui/styles';
import {IProduct} from "../types/product";
import {Typography} from "@material-ui/core";
import {ICategory} from "../types/category";

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    padding: 10,
    marginBottom: 15,
    position: 'relative',
    background: '#FDCFF399',
    boxShadow: '-2px 2px 1px 4px #FDCFF333'
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
  category: {
    fontSize: 16,
  },
}));

interface IProps extends IProduct {
  category?: ICategory[];
}

const ProductCard: FC<IProps> = (props) => {
  const {image, description, price, sales, category} = props;
  const mc = useStyles();

  return (
    <div className={mc.root}>
      <div className={mc.image}>
        <img src={image} alt={description} />
      </div>
      <div className={mc.data}>
        <Typography variant={'h6'}>{description}</Typography>
        <div id={'price'} className={mc.price}>
          Цена:&nbsp;
          {
            sales ? <><span className={mc.salesPrice}>{price}$</span>/{sales}</> : price
          }
          $
        </div>
        {!!category?.length && (<Typography className={mc.category}>
          Категории: {category.map((c) => c.name).join(', ')}
        </Typography>)}
      </div>
    </div>
  );
};

export default ProductCard;
