import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './CardList.js';
import {robots} from './robots.js';
import SearchBox from './SearchBox.js';
import Scroll from './Scroll.js';

class App extends React.Component{
constructor(){
super();
this.state={
  robots: [],
searchField:''

}

}


onSearchChange=(event)=>{
this.setState({searchField: event.target.value});

}


componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
  }


 render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })
    return !robots.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
  }



}

export default App;
