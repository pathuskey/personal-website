import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout/Layout"
import Bubbles from "../components/Graphics/Bubbles"
import Waves from "../components/Graphics/Waves"
import Img from "gatsby-image"
import {
  Container,
  Row,
  Col,
  CardColumns,
  Card,
  CardImg,
  CardFooter,
  Button
} from "reactstrap"
import ScrollAnimation from "react-animate-on-scroll"
import { scroller } from "react-scroll"

import "./index.scss"

export default ({ data }) => {
  const introMessages = ["Husband", "Father", "Learner", "Engineer"]
  const projects = [
    {
      title: "tyson.com",
      url: "https://www.tyson.com",
      image: data.tyson.childImageSharp.fluid
    },
    {
      title: "tysonfoodservice.com",
      url: "https://www.tysonfoodservice.com",
      image: data.foodservice.childImageSharp.fluid
    },
    {
      title: "aidells.com",
      url: "https://www.aidells.com",
      image: data.aidells.childImageSharp.fluid
    },
    {
      title: "jimmydean.com",
      url: "https://www.jimmydean.com",
      image: data.jimmydean.childImageSharp.fluid
    },
    {
      title: "hillshiresnacking.com",
      url: "https://www.hillshiresnacking.com",
      image: data.hssnacking.childImageSharp.fluid
    },
    {
      title: "hillshirefarm.com",
      url: "https://www.hillshirefarm.com",
      image: data.hsfarm.childImageSharp.fluid
    },
    {
      title: "tysonfoods.com",
      url: "https://www.tysonfoods.com",
      image: data.corporate.childImageSharp.fluid
    },
    {
      title: "nudgesdogtreats.com",
      url: "https://www.nudgesdogtreats.com",
      image: data.nudges.childImageSharp.fluid
    },
    {
      title: "truechews.com",
      url: "https://www.truechews.com",
      image: data.truechews.childImageSharp.fluid
    },
    {
      title: "wrightbrand.com",
      url: "https://www.wrightbrand.com",
      image: data.wrightbrand.childImageSharp.fluid
    },
    {
      title: "corndogs.com",
      url: "https://www.corndogs.com",
      image: data.statefair.childImageSharp.fluid
    },
    {
      title: "tortillaland.com",
      url: "https://www.tortillaland.com",
      image: data.tortillaland.childImageSharp.fluid
    }
  ]

  return (
    <Layout
      metaTitle="Patrick Huskey"
      metaDescription="I am a Senior Full Stack Engineer with 9+ years
        experience working with various web technologies and cloud infrastructure.
        I have solid experience with a wide array of technologies such as Html5,
        CSS3, Javascript, SCSS, jQuery, React, Gatsby, Bootstrap, ASP.NET, C#,
        Nodejs, PHP, MySQL, MongoDB, Drupal, Sitecore, Wordpress, Azure, AWS, GCP,
        Terraform, REST, GraphQL, Elasticsearch, Git, Azure DevOps, Jenkins,
        Artifactory, Linux, Google Analytics, Adobe Analytics, and Adobe CC."
    >
      <div className="sidebar animated fadeInUp">
        <Container className="sidebar__container px-0">
          <div className="sidebar__wrapper shadow-sm">
            <div className="sidebar__content animated">
              <h1 className="h5" style={{ fontStyle: "italic" }}>
                Patrick Huskey
              </h1>
              <div
                className="h1 text-primary text-uppercase"
                style={{ lineHeight: 1, textIndent: -2 }}
              >
                Passionate
                <br />
                <div className="rotating-messages">
                  <div className="invisible">Spacer</div>
                  {introMessages.map((message, i) => (
                    <span key={i} className="rotating-messages__message">
                      {message}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-3">
                Northwest Arkansas based
                <br />
                <span className="font-weight-bold">
                  Senior Full Stack Engineer
                </span>
                <br />
                and technologist.
              </div>

              <Button tag={Link} to="/contact" className="mt-4" size="lg">
                Contact Me{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0V0z" style={{ fill: "none" }} />
                  <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
                </svg>
              </Button>
            </div>
          </div>
        </Container>
      </div>
      <div className="content position-relative">
        <section id="bio">
          <Img
            fluid={data.family.childImageSharp.fluid}
            alt="Family"
            style={{ objectFit: "contain" }}
          />

          <button
            className="click-scroll animated animated infinite shiftDown d-none d-lg-block"
            title="Scroll to About"
            onClick={() =>
              scroller.scrollTo("about", {
                offset: -80,
                smooth: true
              })
            }
          >
            <span className="sr-only">Scroll to About section</span>
          </button>
        </section>

        <ScrollAnimation animateIn="fadeIn" animateOnce>
          <section
            id="about"
            className="section pt-lg-4 mt-md-5 mt-lg-4 shadow-sm"
          >
            <svg
              className="about-bg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 10 10"
            >
              <path
                d="m0.36504,11.3034c2.42048,0.12522 0.53126,-0.75117 0.68484,-1.97023c0.15358,-1.21906 1.13166,-1.08506 1.98728,-1.04201c0.85562,0.04305 2.34009,-0.32583 1.77848,-1.7276c-0.56161,-1.40177 0.90788,-1.42406 1.94723,-1.46721c1.03935,-0.04315 1.90133,-0.68576 2.08719,-1.51962c0.18586,-0.83386 0.40632,-3.17014 1.54474,-2.89574c0.56921,0.1372 3.13803,-1.18018 0.36525,-1.12014c-2.77279,0.06005 -9.85147,-0.07391 -11.863,-0.06986l-0.40606,11.48344l1.87405,0.32897z"
                fill="#ffffff"
              />
            </svg>

            <Row
              className="align-items-center position-relative"
              style={{ zIndex: 2 }}
            >
              <Col style={{ minWidth: 300 }}>
                <h2>About Me</h2>
                <p>
                  I have 9+ years experience as a full stack engineer for a
                  Fortune 100 company primarily focused on branded marketing and
                  corporate websites. I love engaging with new technologies,
                  solving difficult problems, creating beautiful user
                  experiences, and working with other talented engineers.
                </p>
              </Col>
              <Col className="text-center">
                <Img
                  fixed={data.monitor.childImageSharp.fixed}
                  alt="Computer monitor"
                />
              </Col>
            </Row>
          </section>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeIn" animateOnce>
          <section id="portfolio" className="section shadow-sm">
            <div className="position-relative" style={{ zIndex: 1 }}>
              <h2>Portfolio</h2>
              <p>A preview of my contributions and projects...</p>

              <CardColumns className="portfolio-cards">
                {projects.map((project, i) => (
                  <Card
                    key={i}
                    className="portfolio-cards__card shadow-sm rounded border-0"
                  >
                    <CardImg
                      tag={Img}
                      top
                      width="100%"
                      fluid={project.image}
                      alt={project.title}
                    />
                    <CardFooter>
                      <a
                        className="stretched-link"
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={project.title}
                      >
                        {project.title}
                      </a>
                    </CardFooter>
                  </Card>
                ))}
              </CardColumns>
            </div>

            <Bubbles />
          </section>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeIn" animateOnce>
          <section id="skills" className="section mb-md-5 mb-lg-4 shadow-sm">
            <h2 className="mb-4">Skills and Technologies</h2>
            <div className="skills d-flex flex-wrap justify-content-center">
              {data.skills.edges.map((skill, i) => {
                const name = skill.node.name
                  .split("_")[1]
                  .replace(",", ".")
                  .replace("CSharp", "C#")

                return (
                  <span
                    key={i}
                    className="skills__skill d-flex align-items-center m-2"
                  >
                    <Img
                      fixed={skill.node.childImageSharp.fixed}
                      alt={name}
                      className="mr-1"
                    />
                    {name}
                  </span>
                )
              })}
            </div>

            <Waves />
          </section>
        </ScrollAnimation>
      </div>
    </Layout>
  )
}

export const GridImage = graphql`
  fragment PortfolioImage on File {
    childImageSharp {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    family: file(relativePath: { eq: "family.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    monitor: file(relativePath: { eq: "monitor.png" }) {
      childImageSharp {
        fixed(width: 300) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
    tyson: file(relativePath: { eq: "portfolio/Tyson.jpg" }) {
      ...PortfolioImage
    }
    foodservice: file(relativePath: { eq: "portfolio/Foodservice.jpg" }) {
      ...PortfolioImage
    }
    hsfarm: file(relativePath: { eq: "portfolio/HsFarm.jpg" }) {
      ...PortfolioImage
    }
    corporate: file(relativePath: { eq: "portfolio/Corporate.jpg" }) {
      ...PortfolioImage
    }
    aidells: file(relativePath: { eq: "portfolio/Aidells.jpg" }) {
      ...PortfolioImage
    }
    jimmydean: file(relativePath: { eq: "portfolio/JimmyDean.jpg" }) {
      ...PortfolioImage
    }
    hssnacking: file(relativePath: { eq: "portfolio/HsSnacking.jpg" }) {
      ...PortfolioImage
    }
    nudges: file(relativePath: { eq: "portfolio/Nudges.jpg" }) {
      ...PortfolioImage
    }
    truechews: file(relativePath: { eq: "portfolio/TrueChews.jpg" }) {
      ...PortfolioImage
    }
    statefair: file(relativePath: { eq: "portfolio/StateFair.jpg" }) {
      ...PortfolioImage
    }
    tortillaland: file(relativePath: { eq: "portfolio/Tortillaland.jpg" }) {
      ...PortfolioImage
    }
    wrightbrand: file(relativePath: { eq: "portfolio/WrightBrand.jpg" }) {
      ...PortfolioImage
    }
    skills: allFile(
      filter: { relativeDirectory: { eq: "skills" } }
      sort: { fields: name }
    ) {
      edges {
        node {
          childImageSharp {
            fixed(height: 24) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
          name
        }
      }
    }
  }
`
