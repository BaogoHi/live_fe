import React from 'react'
import Reflv from 'reflv'

class RealLive extends React.Component{
  render() {
    return (
      <Reflv  
        url={`http://42.56.90.219:8000/live/test.flv`}
        type="flv"
        isLive
        no-cors
      />
    )
  }
}

export default RealLive