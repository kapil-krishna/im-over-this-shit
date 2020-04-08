import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "./course.scss";
import { useStaticQuery, graphql } from "gatsby";
import { CourseBanner } from "../components/banners/courseBanner";

const CoursePage = () => {
  const data = useStaticQuery(graphql`
  query {
    markdownRemark(frontmatter: {title: {eq: "Course information"}}) {
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
      <SEO title="Course" />
        <div className="container">
          <CourseBanner/>
            <section className="courseSection">
            <h2>Here's everything you need to know about the course.</h2>
            <div 
              className="content"
              dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}/>
              <div className="faqButton">
                <a href="/faq">Have questions? Check out our FAQ page</a>
              </div>
          </section>
        </div>
    </Layout>
  )
}

export default CoursePage;
