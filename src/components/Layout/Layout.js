import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import Footer from "./Footer"
import { Container } from "reactstrap"

const TemplateWrapper = ({
  metaTitle,
  metaDescription,
  metaKeywords,
  children,
  contentClass
}) => {
  const title = metaTitle ? metaTitle : ""
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: "en"
        }}
        title={`${title ? title + " | " : ""}${data.site.siteMetadata.title}`}
        meta={[
          { name: "description", content: metaDescription },
          { name: "keywords", content: metaKeywords },
          { name: "theme-color", content: "#424cd0" }
        ]}
      />

      <Header />

      <main className={contentClass}>
        <Container className="px-0">{children}</Container>
      </main>

      <Footer />
    </>
  )
}

export default TemplateWrapper
