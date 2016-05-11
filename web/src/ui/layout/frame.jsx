import React from 'react';

import Header from './ui/layout/header';
import Content from './ui/layout/content';
import Footer from './ui/layout/footer';

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
