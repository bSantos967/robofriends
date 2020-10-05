import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(data => data.json())
            .then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({
            searchfield: event.target.value
        });
    }

    render() {
        const { robots, searchfield } = this.state;

        const filteredRobots = robots.filter(bot => {
            return bot.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        
        if (!robots.length) {
            return (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <h1 className="f2">Loading</h1>
                </div>
            );
        } else {
            return (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <ErrorBoundry>
                        <CardList robots={ filteredRobots }/>
                    </ErrorBoundry>
                </div>
            );
        }
    }
}

export default App;