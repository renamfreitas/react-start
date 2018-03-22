import * as React from 'react';
import { Link } from 'react-router-dom';

const logo = require('../../logo.svg');
import './header.scss';

export default class Header extends React.Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Meu header</h1>
                <Link to="/about">About</Link>
                <Link to="/">Home</Link>
            </header>
        );
    }
}