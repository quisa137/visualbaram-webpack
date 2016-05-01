import React from 'react';
import ReactDOM from 'react-dom';
import Header from './src/ui/layout/header.jsx';
import Content from './src/ui/layout/content.jsx';
import Footer from './src/ui/layout/footer.jsx';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}

ReactDOM.render(<Main/>, document.getElementById('main'));