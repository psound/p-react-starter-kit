import React from 'react';

class Contact extends React.Component {

    constructor (props) {
      super(props);
      this.state = {

      }
    }

    componentDidMount() {
        //console.log('Home View Props', this.props);

    }

    componentWillReceiveProps(nextProps) {
        //console.log('next Props:', nextProps);
    }
  render() {
      return(
          <div className="container">
              <div className="starter-template">
                  <h1>Bootstrap starter template React Modified</h1>
                  <p className="lead">Use this document as a way to quickly start any new React.js project.<br /> All you get is this text and a mostly barebones HTML document.</p>
              </div>
          </div>
        )
    }
}

export default Contact;
