import React, {FC} from 'react';
import {makeStyles} from '@material-ui/styles';
import {IProduct} from "../types/product";
import {Typography} from "@material-ui/core";
import {ICategory} from "../types/category";
import {randomInteger} from "../utils/random";

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    padding: 10,
    marginBottom: 15,
    position: 'relative',
    background: '#FFDC7B99',
    boxShadow: '-2px 2px 1px 4px #FFDC7B33'
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
    marginBottom: 28,
  },
  description: {
    // maxHeight: 128,
    // lineHeight: 32,
    // overflowX: 'hidden',
  },
}));

interface IProps extends IProduct {
  category?: ICategory[];
}

// {
//   product: [{
//     image: 'url',
//     description: 'test',
//     category: [{id: '1', name: 'text'}, {id: '1', name: 'text'}, ]
//   }]
//   review: [{
//     customer: {avatar: 'url', first_name: 'str', last_name: 'str', city: 'str'},
//     comment: 'text',
//   },],
// }

const ProductCard: FC<IProps> = (props) => {
  const {image, description, category} = props;
  const mc = useStyles();

  return (
    <div className={mc.root}>
      <div className={mc.image}>
        <img src={image} alt={description} />
      </div>
      <div className={mc.data}>
        <Typography variant={'h6'} className={mc.description}>{description}</Typography>
        <div className={mc.price}>
          Рейтинг:&nbsp;
          {randomInteger(5, 3)}
        </div>
        {!!category?.length && (<Typography className={mc.category}>Категории: {category.map((category) => category.name).join(', ')}</Typography>)}
      </div>
    </div>
  );
};

export default ProductCard;
