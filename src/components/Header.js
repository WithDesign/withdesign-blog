import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logo from '../img/logo-white.svg';

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { activeMenu: false };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleClick() {
    this.setState({
      activeMenu: !this.state.activeMenu,
    });
  }

//
  render() {
    const { className } = this.props;
    const { activeMenu } = this.state;
    const isMobile = window.innerWidth <= 500;
    const isTab = window.innerWidth <= 992;

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <header>
        <div className={`clearfix nav-wrapper ${className}`}>
          {(isMobile || isTab) &&
            <button className="mobile-nav-toggle" onClick={() => this.handleClick('menu-active')}>
              <i className="fa fa-bars" />
            </button>}
          <a className="logo" href="/">
            <img className="img-responsive pull-left" src={Logo} alt="With Design Agency" />
          </a>
          <nav className={`${(isMobile || isTab) ? 'mobile-nav' : ''} ${activeMenu ? 'mobile-nav-show' : 'mobile-nav-hidden'}`}>
            <a className="btn pull-right cta" href="https://withdesign.ca/start">Get Started</a>
            <a className="btn pull-right" href="https://withdesign.ca/partners">Partners</a>
            <a className="btn pull-right" href="https://withdesign.ca/research">Research</a>
            <a className="btn pull-right" href="https://withdesign.ca/about">About</a>
            <a className="btn pull-right" href="https://withdesign.ca/solutions">Solutions</a>
            <a className="btn pull-right" href="https://withdesign.ca/">Home</a>
          </nav>
        </div>
        {(!isMobile || !isTab) &&
          <div className="sub-menu">
            <a className="pull-right" href="https://withdesign.ca/partners">Updates</a>
            <a className="pull-right" href="https://withdesign.ca/research">Research</a>
            <a className="pull-right" href="https://withdesign.ca/about">Inspiration</a>
            <a className="pull-right" href="https://withdesign.ca/solutions">Popular</a>
            <a className="pull-right active" href="/">{!(location.pathname === rootPath) && (
            'Back to'
            )} Feed</a>
          </div>}
      </header>
    );
  }
}

Header.PropTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
