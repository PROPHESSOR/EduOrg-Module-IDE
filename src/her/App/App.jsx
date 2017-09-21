import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './App.css';
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';

//require('../MobileBasic');

require('codemirror/mode/javascript/javascript');

require('../menubar');


class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <CodeMirror
          className="codemirror"
          options={{
            theme: "monokai",
            lineNumbers: true,
            mode: "text/javascript",
            autoCloseBrackets: true
          }}
        />
      </div>
    );
  }
}

export default App;