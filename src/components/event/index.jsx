import React, { useState } from "react"

import Event from "./styles"
import PlayButton from "../shared/playButton"
import Logo from "../../icons"

const EventConteint = props => {
  const [isOpen, setInOpen] = useState(false)
  const { data } = props
  const imageData = data.image.childImageSharp.fluid

  return (
    <Event>
      <Event.Placeholder fluid={imageData}>
        <Event.Title>
          {data.title}
          <br />
          {data.date}
        </Event.Title>
      </Event.Placeholder>
      <Event.Button onClick={() => setInOpen(!isOpen)} menuOpen={isOpen}>
        <Logo.Arrow />
      </Event.Button>
      <Event.Content id="content" menuOpen={isOpen}>
        <span>Videos</span>
        <Event.ContentSeparator />
        {data.videos.map(video => (
          <div key={video.title}>
            <Event.ContentContainer>
              <div>
                <p>{video.title}</p>
                <p>{video.author}</p>
              </div>
              <PlayButton href={`${video.link}`} target="_blank" />
            </Event.ContentContainer>
            <Event.ContentSeparator />
          </div>
        ))}
      </Event.Content>
    </Event>
  )
}

export default EventConteint
