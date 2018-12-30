import React, { Component } from "react";
import SocialButton from "../SocialButton";

export default class InstagramButton extends Component {
  render() {
    return (
      <SocialButton
        clickedBy={"instagram"}
        provider="instagram"
        appId="afdf675d26214280ac9a792afea5651c"
        redirect="http://localhost:3000"
        onLoginSuccess={this.props.handleSocialLogin}
        onLoginFailure={this.props.handleSocialLoginFailure}
      >
        Login with Instagram
      </SocialButton>
    );
  }
}
