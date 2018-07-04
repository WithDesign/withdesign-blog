import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Img from 'gatsby-image';
import Bio from '../components/Bio';
import PageHead from '../components/Head';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    const { previous, next } = this.props.pathContext;

    return (
      <div>
        <PageHead
          title={`${post.frontmatter.title} | ${siteTitle}`}
          description={''}
          url="https://withdesign.ca/"
        />
        <article className="container">
        {/* <Img className="post-image" sizes={post.frontmatter.featuredImage.childImageSharp.sizes} /> */}
          <h1>{post.frontmatter.title}</h1>
          <small>
          {post.frontmatter.tags.join(", ")}<br />
          {post.frontmatter.author}
          </small>
          <p>
            {post.frontmatter.date}
          </p>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <ul>
            {previous && (
              <li>
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              </li>
            )}

            {next && (
              <li>
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              </li>
            )}
          </ul>
        </article>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
        author
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
`
