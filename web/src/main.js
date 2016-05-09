/*eslint jsx-quotes: ["error", "prefer-single"]*/
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './ui/layout/header.jsx';
import Content from './ui/layout/content.jsx';
import Footer from './ui/layout/footer.jsx';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('content'));