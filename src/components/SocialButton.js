import React from "react";
import SocialLogin from "react-social-login";
import { GithubLoginButton, GoogleLoginButton, FacebookLoginButton, LinkedInLoginButton, InstagramLoginButton } from "react-social-login-buttons";

class SocialLoginBtn extends React.Component {
  render() {
    if (this.props.clickedBy === "github") {
      return (
        <GithubLoginButton onClick={this.props.triggerLogin}>
          {this.props.children}
        </GithubLoginButton>
      );
    } else if (this.props.clickedBy === "google") {
      return (
        <GoogleLoginButton onClick={this.props.triggerLogin}>
          {this.props.children}
        </GoogleLoginButton>
      );
    }
    else if (this.props.clickedBy === "linkedin") {      
      return (
        <LinkedInLoginButton onClick={this.props.triggerLogin}>
          {this.props.children}
        </LinkedInLoginButton>
      );
    }
   
    else if (this.props.clickedBy === "instagram") {      
      return (
        <InstagramLoginButton onClick={this.props.triggerLogin}>
          {this.props.children}
        </InstagramLoginButton>
      );
    }
    else {
      return (  
        <FacebookLoginButton onClick={this.props.triggerLogin}>
          {this.props.children}
        </FacebookLoginButton>
      );
    }
  }
}

export default SocialLogin(SocialLoginBtn);
