import React from 'react';
import Logo from '../img/logo-white.svg';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-3 logo-wrapper">
            <a className="" href="/">
              <img className="img-responsive" src={Logo} alt="With Design Agency" />
            </a>
            <a className="btn" to="https://withdesign.ca/start">Get Started</a>
          </div>
          <div className="col-xs-12 col-sm-9 business">
            <h6>Business</h6>
            <a className="" href="https://withdesign.ca/partners">Partners</a>
            <a className="" href="https://withdesign.ca/research">Research</a>
            <a className="" href="https://withdesign.ca/about">About</a>
            <a className="" href="https://withdesign.ca/solutions">Solutions</a>
            <a className="" href="https://withdesign.ca/contact">Contact</a>
            <a className="pull-right" to="https://withdesign.ca/contact"><i className="fa fa-envelope" /></a>
            <a className="pull-right" href="https://github.com/WithDesign" target="_blank" rel="noopener noreferrer"><i className="fa fa-github" /></a>
            <a className="pull-right" href="https://www.facebook.com/withdesigndigital/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" /></a>
            <a className="pull-right" href="https://www.instagram.com/withdesigndigital/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" /></a>
            <a className="pull-right" href="https://twitter.com/__WithDesign" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" /></a>
          </div>
        </div>
        <h6 className="text-center text-white no-mar-bottom weight-300 text-primary">
          <small>With Design | A digital agency.</small>
        </h6>
      </div>
    </footer>
  );
}

export default Footer;
