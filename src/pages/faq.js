import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { useStaticQuery, graphql } from "gatsby";
import './faq.scss';

const FaqPage = () => {
  const data = useStaticQuery(graphql`
  query {
    markdownRemark(frontmatter: {title: {eq: "F.A.Qs"}}) {
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
        <SEO title="FAQ" />
          <div className="container">
            <section className="faqSection">
              <div className="faqTitle">
                <h1>{data.markdownRemark.frontmatter.title}</h1>
              </div>
              <div 
                className="faqContent" 
                dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}/>
            </section>
          </div>  
      </Layout>
    );
  };

export default FaqPage;
