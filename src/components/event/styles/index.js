import styled from "styled-components"

import Button from "./Button"
import Placeholder from "./Placeholder"
import Content from "./Content"
import ContentSeparator from "./ContentSeparator"
import Title from "./Title"
import ContentContainer from "./ContentContainer"

const Event = styled.div`
  background-color: rgba(41, 37, 91, 0.05);
  margin: 0 auto 50px auto;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 90%;

  ${props => props.theme.media.laptop`max-width: 345px;`}
  ${props => props.theme.media.laptopL`max-width: 400px;`}
  ${props => props.theme.media.desktop`max-width: 460px;`}
  ${props => props.theme.media.desktop`max-width: unset;`}  
`

Event.Button = Button
Event.Placeholder = Placeholder
Event.Content = Content
Event.ContentSeparator = ContentSeparator
Event.Title = Title
Event.ContentContainer = ContentContainer

export default Event
