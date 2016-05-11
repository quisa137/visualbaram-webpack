import React from 'react'
import { Router, browserHistory } from 'react-router'
import routes from '../../routes'

export default class Content extends React.Component {
  render() {
    return <Router routes={routes} history={browserHistory}/>;
  }
}
