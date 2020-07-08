import React from 'react';

class CardMaker extends React.Component  {

  render() {
    return (
      <div className="card">
        <img src={this.props.follower.avatar_url} alt='Avatar'/>
        <div className="card-info">
          <p className="username">{this.props.follower.login}</p>
          <a href={this.props.follower.html_url}>View Github Profile</a>
        </div>
      </div>
    )
  }
}
export default CardMaker;