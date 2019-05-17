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
            eventPhotoOne: file(relativePath: { eq: "event_photo_1.jpeg" }) {
              childImageSharp {
                fluid(maxWidth: 580) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
            eventPhotoTwo: file(relativePath: { eq: "event_photo_2.jpeg" }) {
              childImageSharp {
                fluid(maxWidth: 580) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            eventPhotoThree: file(relativePath: { eq: "event_photo_3.jpeg" }) {
              childImageSharp {
                fluid(maxWidth: 580) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            eventPhotoFour: file(relativePath: { eq: "event_photo_4.jpeg" }) {
              childImageSharp {
                fluid(maxWidth: 580) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            eventPhotoFive: file(relativePath: { eq: "event_photo_5.jpeg" }) {
              childImageSharp {
                fluid(maxWidth: 580) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            eventPhotoSix: file(relativePath: { eq: "event_photo_6.jpeg" }) {
              childImageSharp {
                fluid(maxWidth: 580) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            eventPhotoSeven: file(relativePath: { eq: "event_photo_7.jpeg" }) {
              childImageSharp {
                fluid(maxWidth: 580) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            eventPhotoEight: file(relativePath: { eq: "event_photo_8.jpeg" }) {
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
              slidesPerPage={3}
              slidesPerScroll={1}
              onChange={this.onChange}
              addArrowClickHandler={false}
              draggable={false}
            >
              <Photo fluid={data.eventPhotoOne.childImageSharp.fluid} />
              <Photo fluid={data.eventPhotoTwo.childImageSharp.fluid} />
              <Photo fluid={data.eventPhotoThree.childImageSharp.fluid} />
              <Photo fluid={data.eventPhotoFour.childImageSharp.fluid} />
              <Photo fluid={data.eventPhotoFive.childImageSharp.fluid} />
              {/* <Photo fluid={data.eventPhotoSix.childImageSharp.fluid} />
              <Photo fluid={data.eventPhotoSeven.childImageSharp.fluid} />
              <Photo fluid={data.eventPhotoEight.childImageSharp.fluid} /> */}
            </Carousel>
            <Slider
              min="0"
              max="2"
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
