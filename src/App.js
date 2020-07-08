import React from 'react';
import axios from 'axios';
import './App.css';

import CardMaker from './components/CardMaker';
import UserCard from './components/UserCard';

class App extends React.Component {
  state = {
    userName:'MaryamMosstoufi',
    user: [], 
    followersUrl: '',
    followers: []
  };

  componentDidMount() {
    console.log(this.mainUser)
    axios
      .get(`https://api.github.com/users/${this.state.userName}`)
      .then(res => {
        console.log('Main User API Call', res)
        //console.log(res.data.followers_url)
        this.setState({
          user: res.data,
          followersUrl: res.data.followers_url
        }); 
        axios
          .get(this.state.followersUrl)
          .then(res => {
            console.log('Followers URL API Call', res)
            this.setState({
              followers: res.data
            });
          })
          .catch(error => {
            console.log("Get Followers Error:", error);
          })
      })
      .catch(error => {
        console.log("Get Followers URL Error:", error);
      })
    console.log('component did mount')
    
  }

  
  render() {
    return (
    <div className="container">
        <h1>React Github User Card</h1>
        <UserCard user={this.state.user}/> 
        <div>
          {this.state.followers.map(follower => (
            <CardMaker  key={follower.id} follower={follower} />
          ))}
        </div>
    </div>
  );
  }
}

export default App;
