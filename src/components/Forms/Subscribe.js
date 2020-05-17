import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { css } from '@emotion/core'
import { lighten } from 'polished'
import { withTheme } from '../Theming'
import { rhythm } from '../../lib/typography'
import { bpMaxSM } from '../../lib/breakpoints'
import Message from '../ConfirmMessage/Message'
import { PleaseConfirmIllustration } from '../ConfirmMessage/Illustrations'

const FORM_ID = process.env.CONVERTKIT_SIGNUP_FORM

const SubscribeSchema = Yup.object().shape({
  email_address: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  first_name: Yup.string(),
})

const PostSubmissionMessage = () => {
  return (
    <div>
      <Message
        illustration={<PleaseConfirmIllustration />}
        title={`Great, one last thing...`}
        body={`I just sent you an email with the confirmation link.
          **Please check your inbox!**`}
      />
    </div>
  )
}

function SignUp(props) {
  const [submitted, setSubmitted] = useState(false)
  const [response, setResponse] = useState()
  const [errorMessage, setErrorMessage] = useState()

  const formik = useFormik({
    initialValues: {
      email_address: '',
      first_name: '',
    },
    validationSchema: SubscribeSchema,
    onSubmit: (values) => handleSubmit(values),
  })

  async function handleSubmit(values) {
    setSubmitted(true)

    try {
      const response = await fetch(
        `https://app.convertkit.com/forms/${FORM_ID}/subscriptions`,
        {
          method: 'post',
          body: JSON.stringify(values, null, 2),
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      )

      const responseJson = await response.json()

      setSubmitted(true)
      setResponse(responseJson)
      setErrorMessage(null)
    } catch (error) {
      setSubmitted(false)
      setErrorMessage('Something went wrong!')
    }
  }

  const { theme, simple } = props
  const successful = response && response.status === 'success'

  return (
    <div>
      {!successful && !simple && (
        <>
          <h2
            css={css`
              margin-bottom: ${rhythm(1)};
              margin-top: 0;
            `}
          >
            Join the Newsletter
          </h2>
          <p>
            Want to hear more about my thoughts on software, the web and life?
            Sign up to my newsletter and I'll let you know when I publish a new
            article.
          </p>
        </>
      )}

      {!successful && (
        <form
          onSubmit={formik.handleSubmit}
          css={css`
            display: flex;
            align-items: flex-end;
            button {
              margin-left: 10px;
            }
            .field-error {
              display: block;
              color: ${theme.colors.red};
              font-size: 80%;
            }
            input,
            label {
              width: 100%;
            }
            ${bpMaxSM} {
              flex-direction: column;
              align-items: flex-start;
              width: auto;
              label,
              input {
                margin: 5px 0 0 0 !important;
                width: 100%;
                display: flex;
                flex-direction: column;
              }
              button {
                margin: 20px 0 0 0;
              }
            }
          `}
        >
          <label htmlFor="first_name">
            <div
              css={css`
                display: flex;
                justify-content: space-between;
                align-items: flex-end;
              `}
            >
              First Name
              {formik.touched.first_name && formik.errors.first_name ? (
                <div>{formik.errors.first_name}</div>
              ) : null}
            </div>
            <input
              aria-label="your first name"
              aria-required="false"
              name="first_name"
              placeholder="Jane"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.first_name}
            />
          </label>
          <label
            htmlFor="email"
            css={css`
              margin-left: 10px;
            `}
          >
            <div
              css={css`
                display: flex;
                justify-content: space-between;
                align-items: flex-end;
              `}
            >
              Email
              {formik.touched.email_address && formik.errors.email_address ? (
                <div>{formik.errors.email_address}</div>
              ) : null}
            </div>
            <input
              aria-label="your email address"
              aria-required="true"
              name="email_address"
              placeholder="jane@acme.com"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email_address}
            />
          </label>
          <button
            data-element="submit"
            type="submit"
            disabled={formik.isSubmitting}
            css={css`
              margin-bottom: 0.5rem;
              background-color: ${theme.colors.link};
              border: 1px solid ${theme.colors.link};
              &:hover {
                background-color: ${lighten(0.1, theme.colors.link)};
                border: 1px solid ${theme.colors.link};
              }
            `}
          >
            {!formik.isSubmitting && 'Submit'}
            {formik.isSubmitting && 'Submitting...'}
          </button>
        </form>
      )}
      {submitted && !formik.isSubmitting && (
        <PostSubmissionMessage response={response} />
      )}
      {errorMessage && <div>{errorMessage}</div>}
    </div>
  )
}

export default withTheme(SignUp)
