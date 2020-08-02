import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import PostItem from "../components/PostItem"
import SEO from "../components/seo"

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query PostList {
        allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
          edges {
            node {
              frontmatter {
                date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-BR")
                category
                title
                description
                background
                color
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )

  const postList = allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Home" />
      {postList.map(
        ({
          node: {
            frontmatter: {
              date,
              title,
              description,
              category,
              background,
              color,
            },
            fields: { slug },
          },
        }) => (
          <PostItem
            slug={slug}
            background={background}
            color={color}
            category={category}
            date={date}
            title={title}
            description={description}
          />
        )
      )}
    </Layout>
  )
}
export default IndexPage
