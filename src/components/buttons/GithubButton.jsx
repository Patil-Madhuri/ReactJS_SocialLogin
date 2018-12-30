import React,{ Component } from "react";
import SocialButton from "../SocialButton";

export default class GithubButton extends Component {
    render() {
        return (
            <SocialButton
            clickedBy={"github"}
            provider="github"
            gatekeeper="http://localhost:9999"
            appId="0b72654c38c7ac657f57"
            redirect="http://localhost:3000"
          >
            Login with GitHub OAuth
          </SocialButton>
        )
    }
}