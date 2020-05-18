import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "./index.scss";
import LogoGrid from "../components/logoGrid";
import { useStaticQuery, graphql } from "gatsby";
import Testimonials from "../components/testimonial";
import { HomeBanner } from "../components/banners/homeBanner";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query {
    markdownRemark(frontmatter: {title: {eq: "Index page"}}) {
      frontmatter {
        title
        path
      }
      html
    }
  }
  `);

  return (
    <Layout>
      <SEO title="Home" />
      <div className="container">
        
        <HomeBanner/>

        <section className="aboutContainer">
          <div
            dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}/>
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
  );
};

export default IndexPage;
