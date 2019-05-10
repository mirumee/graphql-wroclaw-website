import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Slider, { Photo } from "./styles"

import Carousel from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"

class CarouselContainer extends React.Component {
  state = {
    value: "0",
  }

  handleChange = e => this.setState({ value: e.target ? e.target.value : e })

  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            eventPhotoOne: file(relativePath: { eq: "event_photo_1.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 580) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
            eventPhotoTwo: file(relativePath: { eq: "event_photo_1.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 580) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            eventPhotoThree: file(relativePath: { eq: "event_photo_1.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 580) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => (
          <>
            <Carousel
              value={this.state.value}
              slidesPerPage={2}
              slidesPerScroll={1}
              onChange={this.onChange}
              addArrowClickHandler={false}
            >
              <Photo fluid={data.eventPhotoOne.childImageSharp.fluid} />
              <Photo fluid={data.eventPhotoTwo.childImageSharp.fluid} />
              <Photo fluid={data.eventPhotoThree.childImageSharp.fluid} />
              <Photo fluid={data.eventPhotoOne.childImageSharp.fluid} />
              <Photo fluid={data.eventPhotoTwo.childImageSharp.fluid} />
              <Photo fluid={data.eventPhotoThree.childImageSharp.fluid} />
            </Carousel>
            <Slider
              min="0"
              max="4"
              value={this.state.value}
              onChange={e => this.handleChange(e)}
            />
          </>
        )}
      />
    )
  }
}

export default CarouselContainer
