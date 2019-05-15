import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Flex, Box } from "@rebass/grid"

import EventContainer from "../components/event"
import SEO from "../components/seo"
import { StyledButton } from "../components/shared/button"
import Rectangle from "../components/shared/shapes"
import Layout from "../components/layout"
import CarouselContainer from "../components/carousel"
import {
  HeaderContainer,
  StyledBackground,
  StyledImage,
  FlexContainer,
  OrnamentLeft,
  LogoContainer,
  Subheader
} from "../style"
import Logo from "../icons"

const IndexPage = () => (
  <Layout>
    <SEO />
    <StaticQuery
      query={graphql`
        query {
          socialBoxImg: file(relativePath: { eq: "graphql_box.png" }) {
            childImageSharp {
              fluid(maxWidth: 1000) {
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
          <StyledBackground id="start">
            <HeaderContainer>
              <Box mx={[2,3,3, 4,5]}>              
              <h5>VOL #3 Coming</h5>
              <h1>26 September 2019</h1>
              <h3>7PM - 9PM</h3>
              <h5>Barbara, Świdnicka 8B</h5>
              </Box>
              <Box mt={[2,2,2,5]} mx={[2,3,3, 4,5]}>              
                <StyledButton text="Sign up on Meetup" href="https://www.meetup.com/pl-PL/GraphQL-Wroclaw/" target="_blank"/>
              </Box>
            </HeaderContainer>
            <FlexContainer>
              <p>Scroll down</p>
              <Rectangle animated />
            </FlexContainer>
            <StyledImage fluid={data.socialBoxImg.childImageSharp.fluid} />
          </StyledBackground>
          {/*<Flex id="speakers" flexWrap="wrap" mx={[3, 4, 5, 6]}>
            <Box width={[1, 1, 1 / 2]} pl={[0, 5]}>
              <OrnamentLeft>
                <h2 id="speakers">Speakers</h2>
              </OrnamentLeft>
            </Box>
            <Box
              width={[1, 1, 1 / 2]}
              pl={[0, 0, 3]}
              css={{
                textAlign: "center",
              }}
              mb={[0, 0, -7]}
            >
              <DecoratedImg fluid={data.firstSpeaker.childImageSharp.fluid} />
              <h4>Marcin Gębala</h4>
              <p>Python Developer</p>
            </Box>
            <Box
              width={[1, 1, 1 / 2]}
              pr={[0, 0, 3]}
              css={{
                textAlign: "center",
              }}
            >
              <DecoratedImg fluid={data.secondSpeaker.childImageSharp.fluid} />
              <h4>Marcin Gębala</h4>
              <p>Python Developer</p>
            </Box>
            <Box width={[1, 1, 1, 3 / 4, 2 / 3]} mx="auto" >
              <StyledContainer>
                <h3>Add more to the power of GraphQL</h3>
                <StyledButton secondary text="Submit Your Talk" href="http://bit.ly/LT_GraphQL" target="_blank"/>
              </StyledContainer>
            </Box>
            </Flex>*/}
          <Flex
            id="about"
            px={3}
            my={5}
            flexWrap="wrap"
            css={{
              textAlign: "center",
            }}
            justifyContent="center"
          >
            <Box mb={4}>
              <h2 id="about">About GraphQL Wrocław</h2>
            </Box>
            <Box width={[1, 1, 1, 2 / 3]}>
              <p>
                Knowledge: Cubed. GraphQL Wroclaw is a community of with a
                shared love for new, powerful technology. We believe that
                through sharing and engagement, we can make Wroclaw a local and
                global leader in one of the world’s fastest growing languages.
              </p>
            </Box>
            <Box width={1}>
              <CarouselContainer />
            </Box>
          </Flex>
          <Flex
            px={[3, 3, 2, 5, 6]}
            my={5}
            justifyContent="space-evenly"
            flexWrap="wrap"
          >
            <Box
              width={1}
              mb={4}
              css={{
                textAlign: "center",
              }}
            >
              <h2 id="past-events">Past Events</h2>
            </Box>
            <Box width={[1, 1, 1/2]}>
              <EventContainer />
            </Box>
            <Box width={[1, 1, 1/2]}>
              <EventContainer />
            </Box>
          </Flex>
          <Flex
            id="stream"
            flexWrap="wrap"
            px={[3, 4, 5, 6]}
            alignItems="center"
          >
            <Box width={[1, 1, 2 / 3, 1 / 2]} order={[1, 1, 2]} px={3}>
              <OrnamentLeft>
                <h2 id="stream">Join our Stream</h2>
                <p>
                  The seats for our events are snapped up in quick time. No
                  matter where you are, if you can’t make the event, join the
                  live stream and become part of the community.
                </p>
                <StyledButton text="Watch stream" href="https://www.facebook.com/mirumeelabs/videos/496722830863869/?acontext=%7B%22ref%22%3A52%2C%22source%22%3A1%2C%22action_history%22%3A%22[%7B%5C%22surface%5C%22%3A%5C%22permalink%5C%22%2C%5C%22mechanism%5C%22%3A%5C%22surface%5C%22%2C%5C%22extra_data%5C%22%3A[]%7D]%22%7D&active_tab=discussion" target="_blank"/>
              </OrnamentLeft>
            </Box>
            <Box width={[1, 1, 1 / 3, 1 / 2]} order={[2, 2, 1]}>
              <Img fluid={data.socialBox.childImageSharp.fluid} />
            </Box>
          </Flex>
          <Flex
            id="organizers"
            mx={3}
            my={4}
            flexWrap="wrap"
            justifyContent="center"
          >
            <Box
              mb={4}
              width={1}
              css={{
                textAlign: "center",
              }}
            >
              <h2 id="organisers">Organizers</h2>
            </Box>
            <Box width={[1, 1, 1, 1]}>
              <LogoContainer>
                <Logo.Saleor />
                <Logo.Mirumee />
              </LogoContainer>
            </Box>
          </Flex>
        </>
      )}
    />
  </Layout>
)

export default IndexPage
