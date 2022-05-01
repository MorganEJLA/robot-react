import { render } from '@testing-library/react';
import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';


class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: [],
            searchField: ''

        }
    }

    componentDidMount(){
       this.setState({ robots: robots});
    }
    onSearchChange = (event)=> {
        //Any function that we create so that everytime the search changes DOM manipulation, we get an event //
        this.setState({ searchField: event.target.value })
       
    }
        
    
    render() {
        const filteredRobots = this.state.robots.filter(robots => {
         return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        return(
            <div className = 'tc'>
                <h1 className = 'f2'>RoboFriends</h1>
                <SearchBox searchChange ={this.onSearchChange}/>
                <CardList robots = {filteredRobots} />
            </div>

        );
    }

}

export default App;