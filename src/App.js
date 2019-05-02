import React, { Component } from 'react';
import axios from "axios";
import './App.css';


import UserForm from "./Components/UserForm";

class App extends Component {
  state = {
    }


  getUser = (e) => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    if (user) {
      axios.get(`https://api.github.com/users/${user}`)
      .then((res) => {
        const name = res.data.name;
        const avatar_url = res.data.avatar_url;
        const company = res.data.company;
        const location = res.data.location;
        const followers = res.data.followers;
        const following = res.data.following;
      console.log(name, avatar_url, company, location, followers,  following );
      this.setState({
        name, avatar_url, company, location, followers, following});
      })
    } else return;
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">HTTP Calls in React</h1>
        </header>
      <h1>GitHub Profile Finder</h1>
        <UserForm getUser= {this.getUser} />
           { this.state.name ? <p>Name: { this.state.name }</p> : <p>Please enter a username.</p> }
           <img src={this.state.avatar_url}></img>
       <p>{ this.state.company }</p>
       <p>{ this.state.location }</p>
       <p>Followers: { this.state.followers }</p>
       <p>Following: { this.state.following }</p>
      
       </div>
    );
  }
};

export default App;
