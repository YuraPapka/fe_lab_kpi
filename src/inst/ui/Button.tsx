import React from 'react';
import {withStyles} from "@material-ui/core";
import {Button} from "@material-ui/core";

//  style={{
//       backgroundColor: '#DE89BE',
//
//       color: '#40434E',
//       transition: '1s all ease',
//       '&:hover': {
//         background: '#FDCFF3',
//       }
//     }}

const Btn = withStyles(() => ({
  root: {
    backgroundColor: '#DE89BE',
    color: '#40434E',
    // transition: '0.3s all ease',
    '&:hover': {
      background: '#FDCFF3',
    },
  },
}))(Button) as typeof Button;

export default Btn;
