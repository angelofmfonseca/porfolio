import React from "react"

import Layout from "../components/Layout"
import PostItem from "../components/PostItem"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem
      slug="about"
      background="#FF0000"
      color="#fff"
      category="life"
      date="21 de jilho de 2017"
      title="Virada de chave"
      description="Os desafios de uma carreira drástica de carreira próximo dos 30 anos"
    />
  </Layout>
)

export default IndexPage
