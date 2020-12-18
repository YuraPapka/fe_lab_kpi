import React from 'react';
import {withStyles} from "@material-ui/core";
import {Button} from "@material-ui/core";

//  style={{
//       backgroundColor: '#DE89BE',
//
//       color: '#40434E',
//       transition: '1s all ease',
//       '&:hover': {
//         background: '#FFDC7B',
//       }
//     }}

const Btn = withStyles(() => ({
  root: {
    backgroundColor: '#DE89BE',
    color: '#40434E',
    // transition: '0.3s all ease',
    '&:hover': {
      background: '#FFDC7B',
    },
  },
}))(Button) as typeof Button;

export default Btn;
