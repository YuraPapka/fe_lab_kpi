import React, {FC} from 'react';
import {makeStyles} from "@material-ui/styles";
import {IReview} from "../../types/review";
import {ICustomer} from "../../types/customer";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    background: '#FFFED099',
    boxShadow: '-1px 1px 1px 2px #C297B833',
    padding: 10,
    marginBottom: 15,
  },
  avatar: {
    width: 50,
    flexBasis: '50px',
    '& > img': {
      width: '50px',
      height: 'auto',
    },
  },
  content: {
    marginLeft: 16,
  },
  comment: {
    marginTop: 10,
    fontSize: 14,
  },
}));

interface IProps extends IReview{
  customer: ICustomer,
}

const defaultImgUrl = 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png';

const Review: FC<IProps> = (props) => {
  const {customer, comment} = props;
  const {avatar, first_name, last_name, city} = customer;
  const mc = useStyles();

  return (
    <div className={mc.root}>
      <div className={mc.avatar}>
        <img src={defaultImgUrl || avatar} alt={first_name} />
      </div>
      <div className={mc.content}>
        <Typography>{`Рецензент: ${first_name} ${last_name}${city ? ', из ' + city : ''}`}</Typography>
        <Typography className={mc.comment}>{comment}</Typography>
      </div>
    </div>
  );
};

export default Review;
