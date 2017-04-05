import React from 'react';
import { Route } from 'react-router-dom';
import About from './About';
import Contact from './Contact';

class routes extends React.Component {
    render() {
        return(
            <div>
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
            </div>
        )
    }
}

export default routes;
