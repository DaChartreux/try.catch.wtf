import {
  FooterWrapper,
  FooterTopWrapper,
  FooterBottomWrapper,
} from "@components/Footer/Footer.style";
import React from "react";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterTopWrapper>
        <div>
          <span>
            <p>TRY</p>
            <p>.CATCH.</p>
            <p>WTF</p>
          </span>
        </div>
        <div>
          <span>
            <p>Keep catching!</p>
          </span>
        </div>
      </FooterTopWrapper>
      <FooterBottomWrapper>
        <p>© 2021-present catch.wtf, All Rights Reserved; I guess ¯\_(ツ)_/¯</p>
      </FooterBottomWrapper>
    </FooterWrapper>
  );
};

export default Footer;
