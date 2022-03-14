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
import SubmitTalk from "../components/submittalk"
import {
  HeaderContainer,
  StyledBackground,
  StyledImage,
  FlexContainer,
  OrnamentLeft,
  LogoContainer,
  PartnerLogoContainer,
  Subheader,
} from "../style"
import Logo from "../icons"

const IndexPage = () => {
  return (
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
            allEventsJson {
              edges {
                node {
                  title
                  description
                  date
                  image {
                    childImageSharp {
                      fluid(quality: 90, maxWidth: 520) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                    }
                  }
                  videos {
                    title
                    author
                    link
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <>
            <StyledBackground id="start">
              <HeaderContainer>
                <Box mx={[3, 3, 4, 6, 7]}>
                  <h5>Vol #9 COMING</h5>
                  <h1>05 APR. 2022</h1>
                  <Subheader>7PM - 9PM</Subheader>
                  <h5>
                    Online YouTube
                  </h5>
                </Box>
                <Box mt={[2, 2, 4, 5]} mx={[3, 3, 4, 6, 7]}>
                  <StyledButton
                    text="Sign up on Meetup"
                    href="https://www.meetup.com/GraphQL-Wroclaw"
                    target="_blank"
                  />
                </Box>
              </HeaderContainer>
              <FlexContainer>
                <p>Scroll down</p>
                <Rectangle animated />
              </FlexContainer>
              <StyledImage fluid={data.socialBoxImg.childImageSharp.fluid} />
            </StyledBackground>
            {/*<Flex flexWrap="wrap" mx={[3, 3, 4, 6, 7]} mb={[3, 4, 5, 6]}>
              <Box width={[1, 1, 1 / 2]} pl={[0, 0, 7, 9]}>
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
                mb={[0, 0, -10, -10, -11]}
                mt={[0, 0, 3, 4, 5]}
              >
                <DecoratedImg fluid={data.firstSpeaker.childImageSharp.fluid} />
                <h4>Jakub Draganek</h4>
                <p>Python Developer</p>
              </Box>
              <Box
                width={[1, 1, 1 / 2]}
                pr={[0, 0, 3]}
                mb={[3, 4, 5, 6]}
                css={{
                  textAlign: "center",
                }}
              >
                <DecoratedImg
                  fluid={data.secondSpeaker.childImageSharp.fluid}
                />
                <h4>Marcin Gębala</h4>
                <p>Python Developer</p>
              </Box>
              <Box width={[1, 1, 5 / 6, 3 / 4, 2 / 3]} mx="auto">
                <StyledContainer>
                  <h3>Add more to the power of GraphQL</h3>
                  <StyledButton
                    secondary
                    text="Submit your talk"
                    href="http://bit.ly/LT_GraphQL"
                    target="_blank"
                  />
                </StyledContainer>
              </Box>
            </Flex>*/}
            <Flex
              mx={[3, 3, 4, 6, 7]}
              mb={[5, 5, 7, 7]}
              flexWrap="wrap"
              css={{
                textAlign: "center",
              }}
              justifyContent="center"
            >
              <Box width={[1, 1, 1, 3 / 4, 1 / 2]}>
                <SubmitTalk>
                  <h2 id="submit-talk">Add more to the power of GraphQL</h2>
                  <StyledButton
                    text="Submit your talk"
                    href="https://mirumee.typeform.com/to/gLePwX"
                    secondary={true}
                    target="_blank"
                  />
                </SubmitTalk>
              </Box>
            </Flex>
            <Flex
              mb={[3, 4, 5, 7]}
              pl={[3]}
              flexWrap="wrap"
              css={{
                maxWidth: "1600px",
                textAlign: "center",
                marginRight: "auto",
                marginLeft: "auto",
              }}
              justifyContent="center"
            >
              <Box width={1} mb={4}>
                <h2 id="about">About GraphQL Wrocław</h2>
              </Box>
              <Box width={[1, 1, 4 / 6, 2 / 3]} mb={[3, 4, 5, 6]}>
                <p>
                  Knowledge: Cubed. GraphQL Wroclaw is a community of with a
                  shared love for new, powerful technology. We believe that
                  through sharing and engagement, we can make Wroclaw a local
                  and global leader in one of the world’s fastest growing
                  languages.
                </p>
              </Box>
              <Box width={1}>
                <CarouselContainer />
              </Box>
            </Flex>
            <Flex
              css={{
                maxWidth: "1600px",
                marginRight: "auto",
                marginLeft: "auto",
              }}
              my={5}
              justifyContent="space-evenly"
              flexWrap="wrap"
            >
              <Box
                width={1}
                mb={[4, 5, 6]}
                css={{
                  textAlign: "center",
                }}
              >
                <h2 id="past-events">Past Events</h2>
              </Box>
              {data.allEventsJson.edges.map((event, i) => (
                <Box width={[1, 1, 1 / 2]} key={event.node.title}>
                  <EventContainer i={i} data={event.node} />
                </Box>
              ))}
            </Flex>
            <Flex
              flexWrap="wrap"
              css={{
                maxWidth: "1600px",
                marginRight: "auto",
                marginLeft: "auto",
              }}
              px={[3]}
              mb={[3, 4, 5, 6]}
              alignItems="center"
              id="stream"
            >
              <Box width={[1, 1, 2 / 3, 1 / 2]} order={[1, 1, 2]}>
                <OrnamentLeft>
                  <h2>Join our Stream</h2>
                  <p>
                    The seats for our events are snapped up in quick time. No
                    matter where you are, if you can’t make the event, join the
                    live stream and become part of the community.
                  </p>
                  <StyledButton
                    text="Watch stream"
                    href="https://youtu.be/7qrUxMurk24"
                    target="_blank"
                  />
                </OrnamentLeft>
              </Box>
              <Box width={[1, 1, 1 / 3, 1 / 2]} order={[2, 2, 1]}>
                <Img fluid={data.socialBox.childImageSharp.fluid} />
              </Box>
            </Flex>
            <Flex
              mx={[3, 3, 4, 6, 7]}
              mb={[5, 5, 7, 7]}
              flexWrap="wrap"
              justifyContent="center"
            >
              <Box
                mb={[4, 4, 5, 5, 5, 6, 6]}
                width={1}
                css={{
                  textAlign: "center",
                }}
              >
                <h2 id="partners">Community Partners</h2>
              </Box>
              <Box width={[1, 1, 1, 1]}>
                <PartnerLogoContainer>
                  <a
                    href="https://graphql.asia/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Logo.AsiaPartner />
                  </a>
                </PartnerLogoContainer>
              </Box>
            </Flex>
            <Flex
              mx={[3, 3, 4, 6, 7]}
              mb={[5, 5, 7, 7]}
              flexWrap="wrap"
              justifyContent="center"
            >
              <Box
                mb={[4, 4, 5, 5, 5, 6, 6]}
                width={1}
                css={{
                  textAlign: "center",
                }}
              >
                <h2 id="organisers">Organisers</h2>
              </Box>
              <Box width={[1, 1, 1, 1]}>
                <LogoContainer>
                  <a
                    href="https://saleor.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Logo.Saleor />
                  </a>
                  <a
                    href="https://mirumee.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Logo.Mirumee />
                  </a>
                </LogoContainer>
              </Box>
            </Flex>
          </>
        )}
      />
    </Layout>
  )
}

export default IndexPage
