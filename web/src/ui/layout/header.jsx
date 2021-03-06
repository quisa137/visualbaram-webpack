/*eslint jsx-quotes: ["error", "prefer-single"]*/
import React from 'react';

export default class Header extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className="ui fixed inverted yellow menu">
        <div className="ui container">
          <a href="/" className="header item">
            <i className="arrow right icon"></i>
            Baram Home
          </a>
          <div className="ui simple dropdown item">
            Visualization <i className="dropdown icon"></i>
            <div className="menu">
              <a className="item" href="/leak">Leakcount</a>
              <div className="divider"></div>
              <div className="header">Header Item</div>
              <div className="item">
                <i className="dropdown icon"></i>
                Sub Menu
                <div className="menu">
                  <a className="item" href="#">Link Item</a>
                  <a className="item" href="#">Link Item</a>
                </div>
              </div>
              <a className="item" href="#">Link Item</a>
            </div>
          </div>
          <a href="/search" className="item">Search</a>
        </div>
      </div>
    );
  }
}
