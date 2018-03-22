import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import * as injectTapEventPlugin from 'react-tap-event-plugin';

import App from './components/App';
import About from './components/about/About';
import Error404 from './components/Error404';

import registerServiceWorker from './registerServiceWorker';

injectTapEventPlugin();

import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/about" component={About} />
        <Route path="*" component={Error404} />
    </Switch>
  </ BrowserRouter>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
