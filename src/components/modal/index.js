import React from "react"
import ReactDOM from "react-dom"

const Modal = ({ isShowing, hide, children }) =>
  isShowing ? (
    ReactDOM.createPortal(<p>fdfdfd</p>, document.body)
  ) : (
    <>{children}</>
  )
export default Modal
