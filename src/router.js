import React from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Container from './pages/Container'
import LiveData from './pages/LiveData'


const App = () => (
  <main>
    <BrowserRouter>
      <Switch>
        <Redirect exact from='/' to='/main/livedata' />
        {/* <Route exact path='/login' component={} />
        <Route exact path='/signup' component={} /> */}
        <Route path='/main' render={() =>
          <Container>
            <Route exact path='/main/livedata' component={LiveData}/>
          </Container>
        }/>
      </Switch>
    </BrowserRouter>
  </main>
)

export default App