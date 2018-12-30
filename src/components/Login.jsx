import React, { Component } from "react";
import FacebookButton from "./buttons/FacebookButton";
import GoogleButton from "./buttons/GoogleButton";
import GithubButton from "./buttons/GithubButton";
import LinkedInButton from "./buttons/LinkedInButton";
import InstagramButton from "./buttons/InstagramButton";

export default class Login extends Component {
  handleSocialLogin = user => {
    console.log(user);
  };

  handleSocialLoginFailure = err => {
    console.error(err);
  };
  render() {
    return (
      <div className="login">
        <FacebookButton
          handleSocialLogin={this.handleSocialLogin}
          handleSocialLoginFailure={this.handleSocialLoginFailure}
        />

        <GoogleButton
          handleSocialLogin={this.handleSocialLogin}
          handleSocialLoginFailure={this.handleSocialLoginFailure}
        />

        <GithubButton />

        <LinkedInButton
          handleSocialLogin={this.handleSocialLogin}
          handleSocialLoginFailure={this.handleSocialLoginFailure}
        />

        <InstagramButton
          handleSocialLogin={this.handleSocialLogin}
          handleSocialLoginFailure={this.handleSocialLoginFailure}
        />
      </div>
    );
  }
}
