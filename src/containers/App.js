import React, { Component}  from 'react'
import 'tachyons';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';




class App extends Component {
    constructor() {
        super()
        this.state ={
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}))
        
    }

    onSearchChange = (e) => {
        this.setState({ searchfield: e.target.value})
      
    }
    render () {
        const{robots,searchfield} = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
        })
        if(robots.length ===0){
            return <h1>Loading <br></br>Please Wait</h1>
        }else{
        return (
            
            <div className='tc'>
             <h1 className='f1'>Human Friends</h1>
             <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList  robots={filteredRobots}/>
                </Scroll>
            </div>
        )
    }
    }
}
    

export default App;