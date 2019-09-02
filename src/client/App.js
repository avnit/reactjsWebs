import React, { Component } from 'react';
import './app.scss'
import ReactImage from './react.png';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import MainContent from './components/MainContent.js'
import Nav from './components/Nav.js'

export default class App extends Component {

  render() {
    return (
      <div>
      <Nav />
      <Header />
      <MainContent />
      <Footer />

      </div>
    );
  }
}
