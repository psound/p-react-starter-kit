import React from 'react';
import logo from '../../img/logo.svg';
import { Link } from 'react-router-dom';

class Header extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
        active: this.props.active,
    }
  }

  componentDidMount() {
      //console.log('Header', this);

  }

  componentWillReceiveProps(nextProps) {

      //console.log('next Props Header:', nextProps);
  }
    navTime = (x) => {
        //console.log('here', x);
        this.setState({
            active: x,
        });
    }
  render() {
      return(
      <nav className="navbar navbar-inverse">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li className={this.state.active === 1 ? 'active' : ''}><Link to="/" onClick={this.navTime.bind(this, 1)}>Home</Link></li>
            <li className={this.state.active === 2 ? 'active' : ''}><Link to="/about" onClick={this.navTime.bind(this, 2)}>About</Link></li>
            <li className={this.state.active === 3 ? 'active' : ''}><Link to="/contact" onClick={this.navTime.bind(this, 3)}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
        )
    }
}

export default Header;
