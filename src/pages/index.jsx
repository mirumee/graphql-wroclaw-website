import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Flex, Box } from "@rebass/grid"

import EventContainer from "../components/event"
import { StyledButton } from "../components/shared/button"
import Rectangle from "../components/shared/shapes"
import Layout from "../components/layout"
import {
  HeaderContainer,
  StyledBackground,
  StyledImage,
  FlexContainer,
  OrnamentLeft,
  DecoratedImg,
  StyledContainer,
  LogoContainer,
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
          <Flex flexWrap="wrap" mx={[3, 4]}>
            <Box width={[1, 1, 1 / 2]} pl={[0, 5]}>
              <OrnamentLeft>
                <h2>Speakers</h2>
              </OrnamentLeft>
            </Box>
            <Box
              width={[1, 1, 1 / 2]}
              pl={[0, 0, 3]}
              css={{
                textAlign: "center",
              }}
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
            <Box width={1} mx={[0, 0, 5]}>
              <StyledContainer>
                <h3>Add more to the power of GraphQL</h3>
                <StyledButton secondary text="Submit Your Talk" />
              </StyledContainer>
            </Box>
          </Flex>
          <Flex
            px={3}
            my={5}
            flexWrap="wrap"
            css={{
              textAlign: "center",
            }}
          >
            <Box mb={4}>
              <h2>About GraphQL Wrocław</h2>
            </Box>
            <Box>
              <p>
                Knowledge: Cubed. GraphQL Wroclaw is a community of with a
                shared love for new, powerful technology. We believe that
                through sharing and engagement, we can make Wroclaw a local and
                global leader in one of the world’s fastest growing languages.
              </p>
            </Box>
          </Flex>
          <Flex
            px={[3, 3, 5, 6, 7]}
            my={5}
            justifyContent="center"
            flexWrap="wrap"
          >
            <Box
              width={1}
              mb={4}
              css={{
                textAlign: "center",
              }}
            >
              <h2>Past Events</h2>
            </Box>
            <Box width={[1, 1, 1 / 2]}>
              <EventContainer />
            </Box>
            <Box width={[1, 1, 1 / 2]}>
              <EventContainer />
            </Box>
          </Flex>
          <Flex flexWrap="wrap">
            <Box width={[1, 1, 2 / 3]} order={[1, 1, 2]} px={3}>
              <OrnamentLeft>
                <h2>Join our Stream</h2>
                <p>
                  The seats for our events are snapped up in quick time. No
                  matter where you are, if you can’t make the event, join the
                  live stream and become part of the community.
                </p>
                <StyledButton text="Watch stream" />
              </OrnamentLeft>
            </Box>
            <Box width={[1, 1, 1 / 3]} order={[2, 2, 1]}>
              <Img fluid={data.socialBox.childImageSharp.fluid} />
            </Box>
          </Flex>
          <Flex mx={3} my={4} flexWrap="wrap" justifyContent="center">
            <Box mb={4}>
              <h2>Organizers</h2>
            </Box>
            <Box>
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
