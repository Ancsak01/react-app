import React from 'react';
import './site.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Nav from './components/nav';
import Comments from './components/comments'
import Event from './components/event'

class App extends React.Component {

    render() {
        return (
            <main>
                <Nav />
                <Switch>
                    <Route path="/comments" component={Comments} />
                    <Route path="/events" component={Event} />
                </Switch>
            </main>
        )
    }
}

export default App;