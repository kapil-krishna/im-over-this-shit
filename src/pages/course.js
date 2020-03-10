import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "./course.scss";
import { CourseBanner } from "../components/banners/courseBanner";

const CoursePage = () => (
  <Layout>
    <SEO title="Course" />
      <div className="container">
        <CourseBanner/>
          <section className="courseSection">
          <div className="content">
            <p>Generic info about the course</p>
            <p>...</p>
            <p>...</p>
            <p>...</p>
            <p>...</p>
            <p>...</p>
            <div className="faqButton">
              <a href="/faq">Have questions? Check out our FAQ page</a>
            </div>
          </div>
        </section>
      </div>
  </Layout>
)

export default CoursePage;
