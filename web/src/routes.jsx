import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Leakcount from './ui/module/Leakcount'
import Snssearch from './ui/module/Snssearch'
import Logcount from './ui/module/Logcount'

const NotFound = React.createClass({
  render() {
    return <h2>Not found</h2>
  }
})

module.exports = (
  <Route path="/" component={Frame}>
    <IndexRoute component={Logcount}/>
    <Route path="/leak" component={Leakcount}/>
    <Route path="/search" component={Snssearch}/>
    {/*
      <Route path="contact/new" component={NewContact} />
      <Route path="contact/:id" component={Contact} />
    */}
    <Route path="*" component={NotFound} />
  </Route>
);
