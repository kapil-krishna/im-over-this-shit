import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "./index.scss";
import LogoGrid from "../components/logoGrid";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <section className="banner">
      <div className="bannerBox">
        <div className="bannerContent">
          <h1>Welcome to your new career</h1>
          <h2>At Javaswitch, we've been training software engineers for years. Join us today and discover a world you never knew!</h2>
        </div>
        <div className="bannerButtons">
            <a className="applyNow" href="/apply">Apply Now</a>
            <a className="contact" href="/contact">Contact Us</a>
        </div>
      </div>
    </section>

    <section className="aboutContainer">
      <h2>About the course</h2>
      <p>A nine-week, full-time or a 24-week, part-time bootcamp coding course is offered at Javaswitch in London for prospective coders. The part-time program offers classes during weekly evenings and Saturdays. At the end of the program, students will have a Ruby on Rails junior developer level knowledge, meaning they can prototype their ideas.</p>
    </section>
    
    <section className="testimonialContainer">
      <h2>Hear from our recent graduates</h2>
      <p>[SECTION OF TESTIOMONIALS]</p>
    </section>
    
    <section className="companyContainer">
      <h2>Companies we've worked with</h2>
      <LogoGrid />
    </section>
    
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
  </Layout>
)

export default IndexPage
