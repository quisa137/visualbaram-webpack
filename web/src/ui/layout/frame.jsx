import React from 'react';

import Header from './header';
//import Content from './content';
import Footer from './footer';
require('../../../static/init.css');
require('../../../semantic/semantic.min.css');

export default class Frame extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
