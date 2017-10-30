import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../containers/Home'
import Nav from './Nav'

const NotFound = () => <div className='container'>Not Found</div>

const App = () => (
  <div>
    <header className='header'>
      <Nav />
    </header>
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </main>
  </div>
)

export default App
