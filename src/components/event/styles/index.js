import styled from "styled-components"

import Button from "./Button"
import Placeholder from "./Placeholder"
import Content from "./Content"
import ContentSeparator from "./ContentSeparator"
import Title from "./Title"
import ContentContainer from "./ContentContainer"

const Event = styled.div`
  min-width: 300px;
  max-width: 660px;
  margin: 0 auto 50px auto;
  position: relative;
  display: flex;
  flex-wrap: wrap;
`

Event.Button = Button
Event.Placeholder = Placeholder
Event.Content = Content
Event.ContentSeparator = ContentSeparator
Event.Title = Title
Event.ContentContainer = ContentContainer

export default Event
