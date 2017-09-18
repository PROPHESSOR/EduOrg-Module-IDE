import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './App.css';
import CodeMirror from 'react-code-mirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <CodeMirror theme="monokai" style={{
          height: '100vh',
          width: '100vw'
        }}
        lineNumbers={true}
        
        />
      </div>
    );
  }
}

export default App;