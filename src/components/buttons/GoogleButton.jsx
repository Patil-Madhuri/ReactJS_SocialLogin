import React, { Component } from "react";
import SocialButton from "../SocialButton";

export default class GoogleButton extends Component {
  render() {
    return (
      <SocialButton
        clickedBy={"google"}
        provider="google"
        appId="542868588268-edrihu8q07hiufpbcg4f1m8ldqk5d154.apps.googleusercontent.com"
        onLoginSuccess={this.props.handleSocialLogin}
        onLoginFailure={this.props.handleSocialLoginFailure}
      >
        Login with Google
      </SocialButton>
    );
  }
}
