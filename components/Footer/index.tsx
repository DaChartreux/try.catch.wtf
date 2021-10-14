import React from "react";

import {
  FooterWrapper,
  FooterTopWrapper,
  FooterBottomWrapper,
} from "@components/Footer/Footer.style";
import GithubIcon from "@components/icons/GithubIcon";
import TwitterIcon from "@components/icons/TwitterIcon";
import ButtonIcon from "@components/ButtonIcon";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterTopWrapper>
        <div className="logo">
          <span>
            <p>TRY</p>
            <p>.CATCH.</p>
            <p>WTF</p>
          </span>
        </div>
        <div className="tagline">
          <span>
            <p>Keep catching!</p>
          </span>
        </div>
        <div className="links">
          <ButtonIcon bgColor="bg" fgColor="bg">
            <GithubIcon />
          </ButtonIcon>
          <ButtonIcon bgColor="bg" fgColor="bg">
            <TwitterIcon />
          </ButtonIcon>
        </div>
      </FooterTopWrapper>
      <FooterBottomWrapper>
        <p>
          © 2021-present catch.wtf.
          <br /> All Rights Reserved; I guess <code>¯\_(ツ)_/¯</code>
        </p>
      </FooterBottomWrapper>
    </FooterWrapper>
  );
};

export default Footer;
