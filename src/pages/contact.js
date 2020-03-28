import React, { useState } from "react"
import Layout from "../components/Layout/Layout"
import Spinner from "../components/Graphics/Spinner"
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Modal,
  ModalBody
} from "reactstrap"
import { Formik } from "formik"
import * as yup from "yup"

import "./contact.scss"

const ValidationSchema = yup.object().shape({
  name: yup.string().required("Please enter your name"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Please enter a valid email address"),
  message: yup.string().required("Please enter a message")
})

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const Error = ({ touched, message }) => {
  if (touched && message) {
    return <FormFeedback>{message}</FormFeedback>
  }

  return null
}

export default () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const toggleModal = () => setIsModalOpen(!isModalOpen)

  return (
    <Layout
      metaTitle="Contact Me"
      metaDescription="Ask me a question or send me a message!"
      contentClass="h-100 d-flex align-items-center pt-5"
    >
      <Modal
        isOpen={isModalOpen}
        toggle={toggleModal}
        wrapClassName="contact-modal"
        centered
      >
        <ModalBody className="h4 mb-0 px-4 p-5 text-center">
          <span className="text-primary">Thanks!</span> I will be in touch soon!
          <Button className="mt-4" onClick={toggleModal} size="lg">
            Close
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              <path d="M0 0h24v24H0z" style={{ fill: "none" }} />
            </svg>
          </Button>
        </ModalBody>
      </Modal>

      <section className="p-4 d-flex justify-content-center">
        <div>
          <h1 className="text-secondary">Contact Me</h1>
          <p className="lead">
            Ask a question or send a message and I'll get back to you!
          </p>

          <div className="contact-form mt-4">
            <Formik
              initialValues={{
                name: "",
                lastName: "",
                email: "",
                message: "",
                "form-name": "contact"
              }}
              validationSchema={ValidationSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setSubmitting(true)

                fetch("/contact", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                  },
                  body: encode({ ...values })
                })
                  .then(() => {
                    toggleModal()
                    setSubmitError(false)
                    resetForm()
                  })
                  .catch(error => setSubmitError(true))

                setSubmitting(false)
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting
              }) => {
                const isDisabled =
                  isSubmitting ||
                  errors.name ||
                  errors.email ||
                  errors.message ||
                  !values.name ||
                  !values.email ||
                  !values.message
                    ? true
                    : false

                return (
                  <Form
                    onSubmit={handleSubmit}
                    name="contact"
                    data-netlify="true"
                    netlify-honeypot="last-name"
                  >
                    <div className="position-relative">
                      <FormGroup>
                        <Label for="name">Name</Label>
                        <Input
                          type="text"
                          name="name"
                          id="name"
                          maxLength="50"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                          invalid={touched.name && errors.name?.length > 0}
                        />
                        <Error touched={touched.name} message={errors.name} />
                      </FormGroup>

                      <FormGroup className="contact-form__last-name">
                        <Label for="lastName">
                          If you are human, leave this field empty
                        </Label>
                        <Input
                          type="text"
                          name="lastName"
                          id="lastName"
                          maxLength="50"
                          tabIndex={-1}
                          onChange={handleChange}
                          value={values.lastName}
                        />
                      </FormGroup>

                      <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="john.smith@example.com"
                          maxLength="75"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                          invalid={touched.email && errors.email?.length > 0}
                        />
                        <Error touched={touched.email} message={errors.email} />
                      </FormGroup>

                      <FormGroup>
                        <Label for="message">Message</Label>
                        <Input
                          type="textarea"
                          name="message"
                          id="message"
                          style={{ height: 200 }}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.message}
                          invalid={
                            touched.message && errors.message?.length > 0
                          }
                        />

                        <Error
                          touched={touched.message}
                          message={errors.message}
                        />
                      </FormGroup>

                      {isSubmitting && (
                        <div
                          className="position-absolute w-100 h-100 d-flex justify-content-center align-items-center text-primary"
                          style={{ top: 0, left: 0 }}
                        >
                          <Spinner />
                        </div>
                      )}
                    </div>

                    {submitError && (
                      <div className="mt-3 text-danger h6 border border-danger rounded-sm p-2 text-center">
                        Sorry! There was an error submitting the form. Please
                        try again.
                      </div>
                    )}

                    <Button
                      className="mt-4"
                      disabled={isDisabled}
                      aria-disabled={isDisabled}
                      size="lg"
                      color="primary"
                    >
                      Submit
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path d="M12 8V4l8 8-8 8v-4H4V8z" />
                        <path d="M0 0h24v24H0z" style={{ fill: "none" }} />
                      </svg>
                    </Button>
                  </Form>
                )
              }}
            </Formik>
          </div>
        </div>
      </section>
    </Layout>
  )
}
