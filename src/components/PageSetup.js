/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PageHead from '../components/Head';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import PageContent from '../components/Content/PageContent';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  h1: PropTypes.string.isRequired,
  sub: PropTypes.string.isRequired,
  container: PropTypes.bool.isRequired,
};

const defaultProps = {
  className: '',
  children: '',
  title: '',
  description: '',
  url: 'https://withdesign.ca/',
  h1: '',
  sub: '',
  container: true,
};

class PageSetup extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const {
      className,
      title,
      description,
      url,
      h1,
      sub,
      container,
      children,
    } = this.props;

    return (
      <div>
        <PageHead
          title={`With Design | ${title}`}
          description={description}
          url={url}
        />
        <Header />
        <div className="content-wrapper pad-30-right pad-30-left no-pad-bottom no-mar-bottom no-pad-top">
          <div className={`${className}`}>
            {h1 &&
            <div className="page-intro">
              <h1 className="text-center text-upper text-white">{h1}</h1>
              {sub &&
                <p className="text-center h5 text-white weight-300">
                  {sub}
                </p>}
            </div>}
            <div className={`${container ? 'container' : ''}`}>
              {children}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

PageSetup.PropTypes = propTypes;
PageSetup.defaultProps = defaultProps;

export default PageSetup;
