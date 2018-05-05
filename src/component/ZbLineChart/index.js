import React from 'react'
import {Chart, Axis, Geom, Tooltip,Legend } from 'bizcharts'
import { DataSet } from '@antv/data-set';

class ZbLineChart extends React.Component {
  render() {
    const data = [
      { month: 'Jan', Live: 5, People:5 },
      { month: 'Feb', Live: 1, People:5 },
      { month: 'Mar', Live: 1, People:5 },
      { month: 'Apr', Live: 1, People:5 },
      { month: 'May', Live: 1, People:5 },
      { month: 'Jun', Live: 1, People:5 },
      { month: 'Jul', Live: 1, People:5 },
      { month: 'Aug', Live: 1, People:5 },
      { month: 'Sep', Live: 1, People:5 },
      { month: 'Oct', Live: 1, People:5 },
      { month: 'Nov', Live: 1, People:5 },
      { month: 'Dec', Live: 1, People:5 }
    ];
  
    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.transform({
      type: 'fold',
      fields: [ 'Live', 'People' ], // 展开字段集
      key: 'city', // key字段
      value: 'people', // value字段
    });
    console.log(dv);
    const cols = {
      month: {
        range: [ 0, 1 ]
      }
    }
    return (
      <Chart height={400} data={dv} scale={cols} forceFit>
      <Legend />
      <Axis name="month" />
      <Axis name="people" label={{formatter: val => `${val}人`}}/>
      <Tooltip crosshairs={{type : "y"}}/>
      <Geom type="line" position="month*people" size={2} color={'city'} shape={'smooth'} />
      <Geom type='point' position="month*people" size={4} shape={'circle'} color={'city'} style={{ stroke: '#fff', lineWidth: 1}} />
    </Chart>
    )
  }
}

export default ZbLineChart