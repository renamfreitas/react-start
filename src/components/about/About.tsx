import * as React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import Header from '../header/Header';

class About extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header />
          
          <RaisedButton label="Material UI" />
          
          <p className="App-intro">
            Pagina about
          </p>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default About;
