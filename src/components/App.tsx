import * as React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import Header from './header/Header';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header />
          
          <RaisedButton label="Material UI" />
          
          <p className="App-intro">
            To get started, edit <code>src/App.tsx</code> and save to reload.
          </p>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
