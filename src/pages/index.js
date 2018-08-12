import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import PageHead from '../components/Head';
import Bio from '../components/Bio'
import BannerImage from '../img/blog-cover.png'
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
          description={'In depth case studies, posts, and intresting ecommerce info. We are committed to research and educating others in the industry.'}
          url="https://blog.withdesign.ca/"
        />
        <div className="banner pos-rel">
          <div className="wrapper text-center">
            <img
              className="img-responsive banner-bottom"
              src={BannerImage}
              alt="Increase your conversion rate, revenue & achieve your goals"
            />
            <h1 className="mar-10-bottom mar-30-top weight-400 text-center main-heading">
            {welcome}
            </h1>
            <h2 className="mar-15-top mar-20-bottom weight-400 text-center">
              Are you ready to learn about eCommerce, design, developmnet, & optimization?!<br/>
            </h2>
            <a className="btn btn-cta-1" href="#top">Lets Read!</a>
            <div className="text-black icon">
              <a href="#top"><i className="fa fa-angle-down" aria-hidden="true" /></a>
            </div>
          </div>
        </div>

        <div className="container">
          {/* <h1 className="no-mar-bottom">{welcome}</h1> */}
          {/* <h2 className="h6 mar-15-top mar-20-bottom weight-400">
            Blog With Design is a eCommerce blog about design, development, & optimization.<br/>
            <small className="weight-300 text-center">Managed all by With Design</small>
          </h2> */}
        </div>
        <div id="top" className="blog-wrapper">
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
                  <h5 className="no-margin ">
                    {title}
                  </h5>
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
