import React from 'react'
import {Chart, Axis, Geom, Tooltip,Legend } from 'bizcharts'
import { DataSet } from '@antv/data-set';

class ZbLineChart extends React.Component {
  render() {
    const data = [
      { month: 'Jan', Live: 7.0, People: 3.9 },
      { month: 'Feb', Live: 6.9, People: 4.2 },
      { month: 'Mar', Live: 9.5, People: 5.7 },
      { month: 'Apr', Live: 14.5, People: 8.5 },
      { month: 'May', Live: 18.4, People: 11.9 },
      { month: 'Jun', Live: 21.5, People: 15.2 },
      { month: 'Jul', Live: 25.2, People: 17.0 },
      { month: 'Aug', Live: 26.5, People: 16.6 },
      { month: 'Sep', Live: 23.3, People: 14.2 },
      { month: 'Oct', Live: 18.3, People: 10.3 },
      { month: 'Nov', Live: 13.9, People: 6.6 },
      { month: 'Dec', Live: 9.6, People: 4.8 }
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