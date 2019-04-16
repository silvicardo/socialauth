import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import FacebookFeed from './FacebookFeed';

class Facebook extends Component {

  state = {

    isLoggedIn: false,
    userID: '',
    name: '',
    email: '',
    picture: '',

  }

  componentClicked = () => {
    console.log('you clicked the button')
  }

  //directly destructure elements from response
  responseFacebook = ({email, name, picture, userID}) => {

    this.setState({ isLoggedIn: true, email, name, userID, picture: picture.data.url},
    () => {
      console.log('newState', this.state)
    });
  }

  render() {

    let fbContent; //the rendered content of the page
    const {email, name, picture, userID} = this.state

    //Do not show FacebookLogin component if user
    //is already logged in
    if (this.state.isLoggedIn){
      fbContent = (
        <div>
          <h1>You succesfully logged in to Facebook!</h1>
          <h2>Hi {name} - userId: {userID}</h2>
          <p>Email: {email}</p>
          <img src={picture} alt=""/>
          <FacebookFeed picture={picture} />
        </div>
      )
    } else {
      fbContent = (
        <FacebookLogin
          appId="Your app id"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
          icon="fa-facebook"
        />
      )
    }

    return (
        <div>
          {fbContent}
        </div>
    );
  }
}

export default Facebook;
