import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import MainContent from './components/MainContent.js'
import Nav from './components/Nav.js'




export default class App extends Component {
  state = { contacts: [] };

  componentDidMount() {
    fetch('https://community-open-weather-map.p.rapidapi.com/weather')
      .then(res => res.json())
      .then(user => this.setState({ contacts: data }));
  }

  render() {
    const settime = new Date();

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
