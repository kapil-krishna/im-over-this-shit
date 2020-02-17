import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Link from 'gatsby-link';

const CoursePage = () => (
  <Layout>
    <SEO title="Course" />
    <h1>Course</h1>
    <p>Generic info about the course</p>
    <Link to="/faq">Have questions? Check out our FAQ page</Link>
  </Layout>
)

export default CoursePage;
