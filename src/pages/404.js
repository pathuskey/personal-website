import React from "react"
import Layout from "../components/Layout/Layout"
import { Link } from "gatsby"
import { Button } from "reactstrap"

const PageNotFound = () => {
  return (
    <Layout
      metaTitle="Page Not Found"
      contentClass="h-100 d-flex align-items-center"
    >
      <section className="text-center px-5">
        <h1 className="mb-4 mb-md-5">
          <span className="text-primary font-weight-bold">Oops!</span> That page
          does not exist!
        </h1>
        <Button color="primary" tag={Link} to="/" size="lg">
          Return Home
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            <path d="M0 0h24v24H0z" style={{ fill: "none" }} />
          </svg>
        </Button>
      </section>
    </Layout>
  )
}

export default PageNotFound
