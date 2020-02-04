import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const FaqPage = () => (
  <Layout>
    <SEO title="Course" />
    <h1>F.A.Q.</h1>
    <p className="question">Question 1</p>
    <p>This is an answer to a question</p>
    <p className="question">Question 2</p>
    <p>This is an answer to a question</p>
    <p className="question">Question 3</p>
    <p>This is an answer to a question</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
  </Layout>
)

export default FaqPage;
