import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "./index.scss";
import LogoGrid from "../components/logoGrid";
import { Icon } from '../components/icon';
import Testimonials from "../components/testimonial";
import { HomeBanner } from "../components/banners/homeBanner";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      
        <HomeBanner/>

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

export default IndexPage;
