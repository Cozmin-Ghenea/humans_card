import React, { Component}  from 'react'
import { robots } from './robots';
import 'tachyons';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';



class App extends Component {
    constructor() {
        super()
        this.state ={
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (e) => {
        this.setState({ searchfield: e.target.value})
        console.log(e.target.value);
    }
    render () {
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
        })
        return (
            
            <div className='tc'>
             <h1 className='f1'>Human Friends</h1>
             <SearchBox searchChange={this.onSearchChange}/>
                <CardList  robots={filteredRobots}/>
            </div>
        )
    }
}
    

export default App;