import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import PostItem from "../components/PostItem"
import SEO from "../components/seo"

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query PostList {
        allMarkdownRemark {
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
          },
        }) => (
          <PostItem
            slug="/about/"
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
