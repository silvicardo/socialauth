import React, {Component} from 'react';

export default class FacebookFeed extends Component {

  state = {
    posts: []
  }

  componentDidMount(){

    window.FB.api('/me/feed', (response) => {
      if(response && !response.error){

        //Log posts, and pass to state last 5
        console.log('feed response ' , response.data);
        this.setState({posts: response.data.splice(0, 5)})

      }
  })
}

  render(){

    let profilePicStyle = {maxWidth: '150px', borderRadius: '100%'};

    return (
      <div>
      <h1>Read your latest posts</h1>
        <ul>
          {this.state.posts.map((post, index) =>
            (<li key={index}><img src={this.props.picture} style={profilePicStyle} alt="noPic" />{post.message}</li>))}
        </ul>
      </div>
    );
  }
}
