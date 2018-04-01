import React from 'react'
import { Icon } from 'antd';
import './index.less'
class ZbDataCard extends React.Component {
  render() {
    const {icon,color,number} = this.props
    return (
      <div className="data-card">
        <div className={color} style={{textAlign:"center",padding:"10px"}}>
          <Icon type={icon} />
          <br />
          <span className="number">{number}</span>
        </div>
      </div>
    )
  }
}

export default ZbDataCard