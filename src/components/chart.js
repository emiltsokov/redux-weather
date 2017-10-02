import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash';

function average(data) {
  const sum = data.reduce((a,b) =>{
    return a + b;
  }, 0)
  // console.log(sum);
  // console.log('vanila', Math.round(sum/data.length));
  // console.log('lodash',_.round(_.sum(data)/data.length))

  return Math.round(sum/data.length);
}

export default (props) =>{
  return (
    <div>
      <Sparklines height={120} width={180}  data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(props.data)} {props.units}</div>
    </div>
  );
}
