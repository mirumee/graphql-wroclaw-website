import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { StyledBackground, PageNotFoundImg, PageNotFound } from "./style"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <StaticQuery
    query={graphql`
      query {
        socialBoxImg: file(relativePath: { eq: "graphql_box.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `}
    render={data => (
      <Layout withoutNav>
        <StyledBackground>
          <PageNotFound>
            <SEO title="404: Not found" />
            <PageNotFoundImg fluid={data.socialBoxImg.childImageSharp.fluid} />
            <h2>Ooops!</h2>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          </PageNotFound>
        </StyledBackground>
      </Layout>
    )}
  />
)

export default NotFoundPage
