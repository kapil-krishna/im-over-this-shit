import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Icon from "../components/icon"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <section className="heroMain">
      <h1>Welcome to your new career</h1>
      <p>*Cool tagline to get you excited*</p>
      <div className="heroButtons">
        <a className="applyNow" href="/apply">Apply Now</a>
        <a className="contact" href="/contact">Contact Us</a>
      </div>
    </section>

    <section className="courseInfo">
      <p>[SECTION ABOUT COURSE]</p>
    </section>
    
    <section className="testimonials">
      <p>[SECTION OF TESTIOMONIALS]</p>
    </section>
    
    <section className="courseInfo">
      <p>[SECTION ABOUT COMPANIES WE WERE FOR]</p>
    </section>
    
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
  </Layout>
)

export default IndexPage
