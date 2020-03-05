import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "./course.scss";

const CoursePage = () => (
  <Layout>
    <SEO title="Course" />
      <div className="container">
        <section className="formSection">
          <div className="title">
            <h1>Course</h1>
          </div>
          <div className="content">
            <p>Generic info about the course</p>
            <div className="faqButton">
              <a href="/faq">Have questions? Check out our FAQ page</a>
            </div>
          </div>
        </section>
      </div>
  </Layout>
)

export default CoursePage;
