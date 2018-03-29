import React from 'react'
import Container from './pages/Container'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'


const App = () => (
  <main>
    <BrowserRouter>
      <Switch>
        <Redirect exact from='/' to='/main' />
        {/* <Route exact path='/login' component={} />
        <Route exact path='/signup' component={} /> */}
        <Route path='/main' render={() =>
          <Container>
            {/* <Route exact path='/live'component={}/> */}
          </Container>
        }/>
      </Switch>
    </BrowserRouter>
  </main>
)

export default App