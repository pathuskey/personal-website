import React, { useState, useEffect } from "react"
import { Link as ScrollLink } from "react-scroll"
import { Link as GatsbyLink } from "gatsby"
import { Navbar, Nav, NavItem, Container, Collapse } from "reactstrap"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const navItems = [
  {
    title: "About",
    url: "/#about",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M0 0h24v24H0V0z" style={{ fill: "transparent" }} />
        <path d="M15 4v7H5.17l-.59.59-.58.58V4h11m1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z" />
      </svg>
    )
  },
  {
    title: "Portfolio",
    url: "/#portfolio",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M0 0h24v24H0V0z" style={{ fill: "transparent" }} />
        <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zM10 9h8v2h-8zm0 3h4v2h-4zm0-6h8v2h-8z" />
      </svg>
    )
  },
  {
    title: "Skills",
    url: "/#skills",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M0 0h24v24H0V0z" style={{ fill: "transparent" }} />
        <path d="M4 6h18V4H2v13H0v3h14v-3H4V6zm20 2h-8v12h8V8zm-2 9h-4v-7h4v7z" />
      </svg>
    )
  }
]

export default () => {
  const [isOpen, setOpen] = useState(false)
  const [isHome, setHome] = useState(true)

  useEffect(() => {
    setHome(window.location.pathname === "/")
  }, [])

  const toggle = () => {
    setOpen(!isOpen)
  }

  return (
    <Navbar
      id="navigation"
      role="navigation"
      expand="lg"
      className="d-print-none"
    >
      <Container className={"pl-4 pr-2 px-lg-0"}>
        <Collapse id="main-navigation" className={isOpen ? "show" : ""} navbar>
          <Nav className="navbar-nav--primary" navbar>
            {navItems.map((navItem, i) => {
              const linkContent = (
                <>
                  <span className="nav-link__icon mr-2">{navItem.icon}</span>
                  <span className="nav-link__text">{navItem.title}</span>
                </>
              )

              return (
                <NavItem key={i}>
                  {isHome ? (
                    <ScrollLink
                      className="nav-link"
                      activeClass="nav-link--active"
                      spy
                      smooth
                      to={navItem.title.toLowerCase()}
                      offset={-64}
                      style={{ "--index": i }}
                      onClick={toggle}
                    >
                      {linkContent}
                    </ScrollLink>
                  ) : (
                    <GatsbyLink
                      className="nav-link"
                      to={navItem.url}
                      style={{ "--index": i }}
                    >
                      {linkContent}
                    </GatsbyLink>
                  )}
                </NavItem>
              )
            })}
          </Nav>
        </Collapse>

        <button
          className={
            "btn btn-none hamburger hamburger--spin navbar-toggler " +
            (isOpen ? "is-active" : "")
          }
          onClick={toggle}
          aria-controls="main-navigation"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>

        <Nav className="navbar-nav--secondary ml-auto" navbar>
          <NavItem>
            <OutboundLink
              className="nav-link"
              href="https://www.linkedin.com/in/patrick-huskey"
              title="My LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="62 0 22 21"
                preserveAspectRatio="xMinYMin meet"
                version="1.1"
                focusable="false"
              >
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <path
                    d="M19.479,0 L1.583,0 C0.727,0 0,0.677 0,1.511 L0,19.488 C0,20.323 0.477,21 1.333,21 L19.229,21 C20.086,21 21,20.323 21,19.488 L21,1.511 C21,0.677 20.336,0 19.479,0"
                    style={{ fill: "transparent" }}
                    transform="translate(63.000000, 0.000000)"
                  ></path>
                  <path d="M82.479,0 L64.583,0 C63.727,0 63,0.677 63,1.511 L63,19.488 C63,20.323 63.477,21 64.333,21 L82.229,21 C83.086,21 84,20.323 84,19.488 L84,1.511 C84,0.677 83.336,0 82.479,0 Z M71,8 L73.827,8 L73.827,9.441 L73.858,9.441 C74.289,8.664 75.562,7.875 77.136,7.875 C80.157,7.875 81,9.479 81,12.45 L81,18 L78,18 L78,12.997 C78,11.667 77.469,10.5 76.227,10.5 C74.719,10.5 74,11.521 74,13.197 L74,18 L71,18 L71,8 Z M66,18 L69,18 L69,8 L66,8 L66,18 Z M69.375,4.5 C69.375,5.536 68.536,6.375 67.5,6.375 C66.464,6.375 65.625,5.536 65.625,4.5 C65.625,3.464 66.464,2.625 67.5,2.625 C68.536,2.625 69.375,3.464 69.375,4.5 Z"></path>
                </g>
              </svg>
            </OutboundLink>
          </NavItem>
          <NavItem>
            <OutboundLink
              className="nav-link"
              href="https://github.com/pathuskey"
              title="My GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                height="32"
                viewBox="0 0 16 16"
                version="1.1"
                width="32"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                ></path>
              </svg>
            </OutboundLink>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  )
}
