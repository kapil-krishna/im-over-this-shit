import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "./index.scss";
import LogoGrid from "../components/logoGrid";
import { Icon } from '../components/icon';
import Testimonials from "../components/testimonial";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">

    <section className="banner">
      <div className="bannerOutline">
        <div className="bannerContent">
          <Icon/>
          <h2>The markets leading software engineer transformation programme
            <br></br><br></br>
            JavaSwitch your game up</h2>
        </div>
      </div>
      <div className="bannerButtons">
            <a className="applyNow" href="/apply">Apply Now</a>
            <a className="contact" href="/contact">Contact Us</a>
        </div>
    </section>

    <section className="aboutContainer">
      <h2>About the course</h2>
      <p>A nine-week, full-time or a 24-week, part-time bootcamp coding course is offered at Javaswitch in London for prospective coders. The part-time program offers classes during weekly evenings and Saturdays. At the end of the program, students will have a Ruby on Rails junior developer level knowledge, meaning they can prototype their ideas.</p>
      <a className="findOutMore" href="/course">Learn more</a>
    </section>
    
    <section className="testimonialContainer">
      <h2>Hear from some of our recent graduates</h2>
      <Testimonials/>
    </section>
    
    <section className="companyContainer">
      <h2>Companies we've worked with</h2>
      <LogoGrid />
    </section>
    
  </div>
  </Layout>
)

export default IndexPage
