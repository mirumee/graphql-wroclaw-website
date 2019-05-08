import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Event from "./styles"
import PlayButton from "../shared/playButton"
import Logo from "../../icons"

class EventConteint extends React.Component {
  state = {
    menuOpen: false,
  }

  toggleList() {
    const { menuOpen } = this.state
    this.setState({ menuOpen: !menuOpen })
  }

  render() {
    const { height, menuOpen } = this.state
    return (
      <StaticQuery
        query={graphql`
          query {
            desktop: file(relativePath: { eq: "event_1.jpg" }) {
              childImageSharp {
                fluid(quality: 90, maxWidth: 520) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        `}
        render={data => {
          const imageData = data.desktop.childImageSharp.fluid
          return (
            <Event>
              <Event.Placeholder fluid={imageData}>
                <Event.Title>
                  GRAPHQL WROCŁAW #1
                  <br />
                  REST IS HISTORY {height}
                </Event.Title>
              </Event.Placeholder>
              <Event.Button
                onClick={() => this.toggleList()}
                menuOpen={menuOpen}
              >
                <Logo.Arrow />
              </Event.Button>
              <Event.Content id="content" menuOpen={menuOpen}>
                <p>Videos</p>
                <Event.ContentSeparator />
                <Event.ContentContainer>
                  <div>
                    <p>Why You Should Migrate to GraphQL in 2019</p>
                    <p>Jakub Draganek</p>
                  </div>
                  <PlayButton
                    href="https://www.youtube.com/watch?v=w-p2jsA474E"
                    target="_blank"
                  />
                </Event.ContentContainer>
                <Event.ContentSeparator />
                <Event.ContentContainer>
                  <div>
                    <p>Ariadne: Familiar GraphQL in Python</p>
                    <p>Rafał Pitoń</p>
                  </div>
                  <PlayButton
                    href="https://www.youtube.com/watch?v=Nk4C78i51VM"
                    target="_blank"
                  />
                </Event.ContentContainer>
                <Event.ContentSeparator />
              </Event.Content>
            </Event>
          )
        }}
      />
    )
  }
}

export default EventConteint
