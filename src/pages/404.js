import React from "react"
import Layout from "../components/Layout/Layout"
import { Link } from "gatsby"
import { Button } from "reactstrap"

export default () => {
  return (
    <Layout metaTitle="Page Not Found">
      <section className="p-5">
        <div className="text-center my-5 py-5">
          <h1 className="mb-4">
            <span className="text-primary font-weight-bold">Oops!</span> That
            page does not exist!
          </h1>
          <Button color="primary" tag={Link} to="/" outline>
            Return To Home
          </Button>
        </div>
      </section>
    </Layout>
  )
}
