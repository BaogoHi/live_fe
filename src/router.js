import React from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Container from './pages/Container'
import LiveData from './pages/LiveData'
import LiveRoom from './pages/LiveRoom'
import RealLive from './pages/RealLive'
import UserList from './pages/UserList'
import PersonCenter from './pages/PersonCenter'
import Login from './pages/Login'
const App = () => (
  <main>
    <BrowserRouter>
      <Switch>
        <Redirect exact from='/' to='/Login' />
        {/* <Route exact path='/login' component={} />
        <Route exact path='/signup' component={} /> */}
        <Route exact path='/login' component={Login} />
        <Route path='/main' render={() =>
          <Container>
            <Route exact path='/main/livedata' component={LiveData}/>
            <Route exact path='/main/liveroom' component={LiveRoom}/>
            <Route exact path='/main/reallive/:id' component={RealLive}/>
            <Route exact path='/main/userlist' component={UserList}/>
            <Route exact path='/main/personcenter' component={PersonCenter}/>
          </Container>
        }/>
      </Switch>
    </BrowserRouter>
  </main>
)

export default App