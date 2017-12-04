import React from 'react';
import ReactDOM from 'react-dom';
// import './index.cs s';


class HelloWorld extends React.Component {
    render() {
      let hello = <div>
                    <p>hello world</p>
                  </div>
      let button = <div><button>na!</button></div>
      return (
        
      );
    }
}

ReactDOM.render(
  <HelloWorld />,
  document.querySelector('body')
)