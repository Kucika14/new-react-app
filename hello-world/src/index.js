import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';


class HelloWorld extends React.Component {
    render() {
      return (
        <div>
          <p>hello world</p>
        </div>
      );
    }
}

ReactDOM.render(
  <HelloWorld />,
  document.querySelector('body')
)