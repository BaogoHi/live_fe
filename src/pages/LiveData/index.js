import React from 'react'
import './index.less'
import ZbDataCard from '../../component/ZbDataCard'
import ZbLineChart from '../../component/ZbLineChart'
class LiveData extends React.Component {
  render(){
    return (
      <div>   
        <div className="flex-card">
          <ZbDataCard  className="flex-card-item" icon= 'user' number= '5 ' color= 'dc-blue '/>
          <ZbDataCard  className="flex-card-item" icon= 'video-camera' number= '1 ' color= 'dc-orange '/>
          
        </div>
        <div className="chart">
          <ZbLineChart className="flex-card-item"/>
        </div> 
      </div>
    )
  }
}

export default LiveData