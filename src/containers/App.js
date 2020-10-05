import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
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

        // try {
        //     const response = await fetch('https://jsonplaceholder.typicode.com/users');
        //     const users = await response.json();
        //     this.setState({
        //         robots: users
        //     });
        // } catch (err) {
        //     console.log('Whoops something went wrong ', err);
        // }
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
                    <Scroll>
                        <CardList robots={ filteredRobots }/>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;