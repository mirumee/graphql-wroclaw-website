import React, { useState, useRef, useEffect } from "react"
import { StaticQuery, graphql } from "gatsby"
// import Carousel from "@brainhubeu/react-carousel"
// import "@brainhubeu/react-carousel/lib/style.css"

import Slider, { Photo, Carousel, CarouselWrapper } from "./styles"

const CarouselContainer = () => {
  const [currentValue, setValue] = useState(0)
  const [carouselWidth, setWidth] = useState(window.innerWidth)

  const handleChange = e => {
    const { value } = e.target
    setValue(value)
  }

  const carouselRef = useRef()

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const handleResize = e => {
    const offset =
      carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
    setWidth(offset)
  }

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
        }
      `}
      render={data => (
        <>
          <CarouselWrapper>
            <Carousel
              sliderValue={currentValue}
              carouselWidth={carouselWidth}
              ref={carouselRef}
            >
              <Photo fluid={data.eventPhotoTwo.childImageSharp.fluid} />
              <Photo fluid={data.eventPhotoThree.childImageSharp.fluid} />
              <Photo fluid={data.eventPhotoFour.childImageSharp.fluid} />
              <Photo fluid={data.eventPhotoFive.childImageSharp.fluid} />
              <Photo fluid={data.eventPhotoSix.childImageSharp.fluid} />
              <Photo fluid={data.eventPhotoSeven.childImageSharp.fluid} />
            </Carousel>
          </CarouselWrapper>
          <Slider
            min="1"
            max="100"
            value={currentValue}
            onChange={handleChange}
          />
        </>
      )}
    />
  )
}

export default CarouselContainer

{
  /* <>
<Carousel
  value={currentValue}
  slidesPerPage={carouselWidth()}
  slidesPerScroll={1}
  addArrowClickHandler={false}
  draggable={false}
>

</Carousel>

</> */
}
