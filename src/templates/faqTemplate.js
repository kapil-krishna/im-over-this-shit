import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";

export default function FaqPage({data}) {
  const { markdownRemark } = data; 
  const { frontmatter, html } = markdownRemark;
  return (
      <Layout>
        <SEO title="FAQ" />
        <div className="faqContainer">
          <div className="faqTitle">
            {frontmatter.title}
          </div>
          <div 
            className="faqContent" 
            dangerouslySetInnerHTML={{ __html: html }}
            />
        </div>
      </Layout>
    );
  };

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`