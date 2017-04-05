import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './routes/About';
import Contact from './routes/Contact';
import './css/App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
        value: 1,
    }
  }
  componentDidMount() {
     //console.log('App', this);

  }
  componentWillReceiveProps(nextProps) {
     // console.log('next Props App:', nextProps);
  }

  render() {
    return (
    <Router>
      <div className="App">
        <Header active={this.state.value} />
        <div className="container">
            <Route exact={true} path="/" render={() => (
                    <div className="starter-template">
                        <h1>Bootstrap starter template React Modified</h1>
                        <p className="lead">Use this document as a way to quickly start any new React.js project.<br /> All you get is this text and a mostly barebones HTML document.</p>
                    </div>
                )} />

        </div>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
   </Router>
    );
  }
}

export default App;
