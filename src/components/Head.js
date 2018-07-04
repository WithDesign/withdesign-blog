import React from 'react'
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types'

const propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.string,
  twitterUser: PropTypes.string,
};

const defaultProps = {
  title: 'Blog | With Design',
  description: 'Read about new marketing experiences and ideas with insights about a wide range of customers to help you scale your revenue.',
  image: './img/cover.png',
};

function PageHead({
    title,
    description,
    url,
    image,
    twitterUser
  }) {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content={url} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:site" content={twitterUser} />
        <meta name="twitter:creator" content={twitterUser} />
        <meta itemProp="name" content={title} />
        <meta itemProp="description" content={description} />
        <meta itemProp="image" content={image} />
        <link rel="icon" sizes="16x16 32x32 64x64" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="196x196" href="./touch/favicon-192.png" />
        <link rel="icon" type="image/png" sizes="160x160" href="./touch/favicon-160.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="./touch/favicon-96.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="./touch/favicon-64.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="./touch/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="./touch/favicon-16.png" />
        <link rel="apple-touch-icon" href="./touch/favicon-57.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="./touch/favicon-114.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="./touch/favicon-72.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="./touch/favicon-144.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="./touch/favicon-60.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="./touch/favicon-120.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="./touch/favicon-76.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="./touch/favicon-152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="./touch/favicon-180.png" />
      </Helmet>
    </div>
  );
}

PageHead.PropTypes = propTypes;
PageHead.defaultProps = defaultProps;

export default PageHead;
