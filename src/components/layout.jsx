import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

import "./layout.css"

export default ({ children }) => (
  <>
    <Header />

    {children}

    <Footer />
  </>
)
