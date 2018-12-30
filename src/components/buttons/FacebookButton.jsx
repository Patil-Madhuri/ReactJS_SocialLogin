import React,{ Component } from "react";
import SocialButton from "../SocialButton";

export default class FacebookButton extends Component {
 
    render() {
        return(
            <SocialButton
            provider="facebook"
            appId="355319825022393"
            onLoginSuccess={this.props.handleSocialLogin}
            onLoginFailure={this.props.handleSocialLoginFailure}
          >
            Login with Facebook
          </SocialButton>
        );
    }
}