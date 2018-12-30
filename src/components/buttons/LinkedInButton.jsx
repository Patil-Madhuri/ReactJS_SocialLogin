import React, { Component } from "react";
import SocialButton from "../SocialButton";

export default class LinkedInButton extends Component {
  render() {
    return (
      <SocialButton
        clickedBy={"linkedin"}
        provider="linkedin"
        appId="81lz10cx0wnrep"
        onLoginSuccess={this.props.handleSocialLogin}
        onLoginFailure={this.props.handleSocialLoginFailure}
      >
        Login with LinkedIn
      </SocialButton>
    );
  }
}
