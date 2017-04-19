import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Routes from './routes';
import './css/App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
        activeMenu: 1,
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
    <Router basenamme={'/'}>
      <div className="App">
        <Header active={this.state.activeMenu} />
        <Routes>
            {this.props.children}
        </Routes>
      </div>
   </Router>
    );
  }
}

export default App;
