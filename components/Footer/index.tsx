import React from "react";

import GithubIcon from "@components/icons/GithubIcon";
import TwitterIcon from "@components/icons/TwitterIcon";
import ButtonIcon from "@components/ButtonIcon";
import Logo from "@components/Logo";

import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footerWrapper}>
      <div className={style.footerTopWrapper}>
        <Logo />
        <div className={style.tagline}>
          <p>Keep catching!</p>
        </div>
        <div className={style.links}>
          <a
            href="https://github.com/cheemzkun"
            target="_blank"
            rel="noreferrer"
          >
            <ButtonIcon bgColor="bg-100" fgColor="bg-100">
              <GithubIcon />
            </ButtonIcon>
          </a>
          <a
            href="https://twitter.com/cheemzkun"
            target="_blank"
            rel="noreferrer"
          >
            <ButtonIcon bgColor="bg-100" fgColor="bg-100">
              <TwitterIcon />
            </ButtonIcon>
          </a>
        </div>
      </div>
      <div className={style.footerBottomWrapper}>
        <p>
          © 2021 - present catch.wtf.
          <br /> All Rights Reserved; I guess <code>¯\_(ツ)_/¯</code>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
