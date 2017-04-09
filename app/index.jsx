import React from 'react';
import ReactDOM from 'react-dom';
require('./scss/main.scss')

export default class MainLayout extends React.Component {
  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <h1>Hello ReactJS *paran* </h1>
        <p>Its working.</p>
      </div>);
  }
}

ReactDOM.render(<MainLayout/>, document.getElementById('app'))