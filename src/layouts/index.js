import React from 'react';
import Link from 'gatsby-link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from "../scss/main.scss";

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    if (location.pathname === rootPath) {
      header = (
        <Header location={location} />
      )
    } else {
      header = (
      <Header location={location} />
      )
    }
    return (
      <div>
        {header}
        {children()}
        <Footer />
      </div>
    )
  }
}

export default Template
