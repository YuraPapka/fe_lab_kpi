import React, {FC} from "react";
import NextLink, {LinkProps} from "next/link";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: 'none',
    display: 'block',
  },
}));

const Link: FC<LinkProps> = (props) => {
  const {children,  ...rest} = props;
  const mc = useStyles();

  return <NextLink {...rest}>
    <a className={mc.link}>
      {children}
    </a>
  </NextLink>
};

export default Link;

