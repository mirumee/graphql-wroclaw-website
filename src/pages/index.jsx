import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { StyledButton } from "../components/button"
import Rectangle from "../components/shapes"
import Layout from "../components/layout"
import {
  HeaderContainer,
  StyledBackground,
  StyledImg,
  FlexContainer,
} from "./style"

const IndexPage = () => (
  <Layout>
    <StaticQuery
      query={graphql`
        query {
          socialBoxImg: file(relativePath: { eq: "graphql_box.png" }) {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      `}
      render={data => (
        <StyledBackground>
          <HeaderContainer>
            <h5>VOL #2 Coming</h5>
            <h1>7 May 2019</h1>
            <h1>7PM - 9PM</h1>
            <h5>Barbara, Świdnicka 8B</h5>
            <StyledButton text="Sing up on Meetup" />
          </HeaderContainer>
          <FlexContainer>
            <p>Scroll down</p>
            <Rectangle animated />
          </FlexContainer>
          <StyledImg fluid={data.socialBoxImg.childImageSharp.fluid} />
        </StyledBackground>
      )}
    />
  </Layout>
)

export default IndexPage
