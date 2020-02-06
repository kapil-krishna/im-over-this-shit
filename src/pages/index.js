import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Icon from "../components/icon"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to your new career</h1>
    <p>Retrain as a software developer for the lols</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Icon/>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
