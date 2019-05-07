import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import EventContainer from "../components/event"
import { StyledButton } from "../components/button"
import Rectangle from "../components/shapes"
import Layout from "../components/layout"
import {
  HeaderContainer,
  StyledBackground,
  StyledImage,
  FlexContainer,
  OrnamentLeft,
  DecoratedImg,
  Section,
  StyledContainer,
} from "./style"
import Logo from "../icons"

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
          firstSpeaker: file(relativePath: { eq: "speaker_1.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 723) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          secondSpeaker: file(relativePath: { eq: "speaker_2.png" }) {
            childImageSharp {
              fluid(maxWidth: 723) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          socialBox: file(relativePath: { eq: "social_box.png" }) {
            childImageSharp {
              fluid(maxWidth: 723) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <>
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
            <StyledImage fluid={data.socialBoxImg.childImageSharp.fluid} />
          </StyledBackground>
          <Section>
            <OrnamentLeft>
              <h2>Speakers</h2>
            </OrnamentLeft>
            <div>
              <DecoratedImg fluid={data.firstSpeaker.childImageSharp.fluid} />
              <h4>Marcin Gębala</h4>
              <p>Python Developer</p>
            </div>
            <div>
              <DecoratedImg fluid={data.secondSpeaker.childImageSharp.fluid} />
              <h4>Marcin Gębala</h4>
              <p>Python Developer</p>
            </div>
            <div>
              <StyledContainer>
                <h3>Add more to the power of GraphQL</h3>
                <StyledButton secondary text="Submit Your Talk" />
              </StyledContainer>
            </div>
          </Section>
          <Section>
            <h2>About GraphQL Wrocław</h2>
            <p>
              Knowledge: Cubed. GraphQL Wroclaw is a community of with a shared
              love for new, powerful technology. We believe that through sharing
              and engagement, we can make Wroclaw a local and global leader in
              one of the world’s fastest growing languages.
            </p>
          </Section>
          <Section>
            <div>
              <h2>Past Events</h2>
              <EventContainer />
            </div>
          </Section>
          <Section>
            <div>
              <OrnamentLeft>
                <h2>Join our Stream</h2>
                <p>
                  The seats for our events are snapped up in quick time. No
                  matter where you are, if you can’t make the event, join the
                  live stream and become part of the community.
                </p>
                <StyledButton text="Watch stream" />
              </OrnamentLeft>
              <Img fluid={data.socialBox.childImageSharp.fluid} />
            </div>
          </Section>
          <Section>
            <div>
              <h2>Organizers</h2>
              <div>
                <Logo.Saleor />
                <Logo.Mirumee />
              </div>
            </div>
          </Section>
        </>
      )}
    />
  </Layout>
)

export default IndexPage
