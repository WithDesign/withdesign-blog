import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import PageHead from '../components/Head';
import Bio from '../components/Bio'

class BlogIndex extends React.Component {

  Welcome() {
    const date = new Date();
    const hour = date.getHours();

    let welcomeMsg;

    if (hour > 4 && hour < 12) {
      welcomeMsg = 'Good Morning';
    } else if (hour >= 12 && hour < 17) {
      welcomeMsg = 'Good Afternoon';
    } else if (hour >= 17 && hour < 21) {
      welcomeMsg = 'Good Evening';
    } else {
      welcomeMsg = 'Good Evening';
    }

    return {
      welcome: `${welcomeMsg}!`,
    };
  }

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    const { welcome } = this.Welcome();

    return (
      <div>
        <PageHead
          title={siteTitle}
          description={''}
          url="https://.ca/"
        />
        <div className="banner pos-rel">
          <div className="wrapper text-center">
            <img
              className="img-responsive banner-bottom"
              src="./img/banner-convert.svg"
              alt="Increase your conversion rate, revenue & achieve your goals"
            />
            <h1 className="mar-10-bottom mar-30-top weight-400 text-center main-heading">
            Insipiring heading goes here
            </h1>
            <h2 className="mar-15-top mar-20-bottom weight-400 text-center">
              what is this site.
            </h2>
            <div className="text-black icon">
              <i className="fa fa-angle-down" aria-hidden="true" />
            </div>
          </div>
        </div>

        {/* <div className="container">
          <h1 className="no-mar-bottom">{welcome}</h1>
        </div> */}
        <div className="blog-wrapper">
          <div className="item item-tall">

          </div>
          {posts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug
            return (
              <div className="item" key={node.fields.slug}>
                <article>
                  <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                  <Img sizes={node.frontmatter.featuredImage.childImageSharp.sizes} />
                  <br />
                  <small>{node.frontmatter.date}</small>
                  <br />
                  <h3 className="no-margin ">
                    {title}
                  </h3>
                  <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                  </Link>
                </article>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            featuredImage {
                childImageSharp{
                    sizes(maxWidth: 630) {
                        ...GatsbyImageSharpSizes
                    }
                }
            }
          }
        }
      }
    }
  }
`
