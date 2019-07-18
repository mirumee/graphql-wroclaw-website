import React from "react"
import { StaticQuery, graphql } from "gatsby"
// import Carousel from "@brainhubeu/react-carousel"
// import "@brainhubeu/react-carousel/lib/style.css"

import Slider, { Photo, Carousel, CarouselWrapper } from "./styles"

class CarouselContainer extends React.Component {
  state = {
    currentValue: 0,
    carouselWidth: 0,
  }
  
  carouselRef = React.createRef()

  componentDidMount() {
    window.addEventListener("resize", this.handleResize)
    this.handleResize()
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize)
  }

  handleChange = ({ target }) => {
    this.setState({ currentValue: target.value })
  }

  handleResize = e => {
    const { scrollWidth, offsetWidth } = this.carouselRef.current
    const offset = scrollWidth - offsetWidth
    this.setState({ carouselWidth: offset })
  }

  render() {
    const { currentValue, carouselWidth } = this.state
  
    return (
      <StaticQuery
        query={graphql`
          query {
            eventPhotoOne: file(relativePath: { eq: "event_photo_1.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 580) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            eventPhotoTwo: file(relativePath: { eq: "event_photo_2.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 580) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            eventPhotoThree: file(relativePath: { eq: "event_photo_3.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 580) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            eventPhotoFour: file(relativePath: { eq: "event_photo_4.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 580) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            eventPhotoFive: file(relativePath: { eq: "event_photo_5.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 580) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            eventPhotoSix: file(relativePath: { eq: "event_photo_6.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 580) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            eventPhotoSeven: file(relativePath: { eq: "event_photo_7.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 580) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            eventPhotoEight: file(relativePath: { eq: "event_photo_8.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 580) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            eventPhotoNine: file(relativePath: { eq: "event_photo_9.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 580) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            eventPhotoTen: file(relativePath: { eq: "event_photo_10.jpg" }) {
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
            <CarouselWrapper>
              <Carousel
                sliderValue={currentValue}
                carouselWidth={carouselWidth}
                ref={this.carouselRef}
              >
                <Photo carouselWidth={carouselWidth} fluid={data.eventPhotoOne.childImageSharp.fluid} />
                <Photo carouselWidth={carouselWidth} fluid={data.eventPhotoTwo.childImageSharp.fluid} />
                <Photo carouselWidth={carouselWidth} fluid={data.eventPhotoThree.childImageSharp.fluid} />
                <Photo carouselWidth={carouselWidth} fluid={data.eventPhotoFour.childImageSharp.fluid} />
                <Photo carouselWidth={carouselWidth} fluid={data.eventPhotoFive.childImageSharp.fluid} />
                <Photo carouselWidth={carouselWidth} fluid={data.eventPhotoSix.childImageSharp.fluid} />
                <Photo carouselWidth={carouselWidth} fluid={data.eventPhotoSeven.childImageSharp.fluid} />
                <Photo carouselWidth={carouselWidth} fluid={data.eventPhotoEight.childImageSharp.fluid} />
                <Photo carouselWidth={carouselWidth} fluid={data.eventPhotoNine.childImageSharp.fluid} />
                <Photo carouselWidth={carouselWidth} fluid={data.eventPhotoTen.childImageSharp.fluid} />
              </Carousel>
            </CarouselWrapper>
            <Slider
              min="1"
              max="100"
              value={currentValue}
              onChange={this.handleChange}
            />
          </>
        )}
      />
    )
  }
}

export default CarouselContainer
