import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Link from 'gatsby-link';
import "./course.scss";

const CoursePage = () => (
  <Layout>
    <SEO title="Course" />
    <h1>Course</h1>
    <p>Generic info about the course</p>
    <div className="faqButton">
      <a to="/faq">Have questions? Check out our FAQ page</a>
    </div>
  </Layout>
)

export default CoursePage;
