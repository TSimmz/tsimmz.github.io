import React, { useContext } from 'react';
import { Formik, Form, FastField, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Recaptcha from 'react-google-recaptcha';
import { url } from 'data/config';
import { Button } from 'components/common';
import { Error, InputField, Input, Submit} from './styles';
import { ThemeContext } from 'providers/ThemeProvider';

const ContactForm = () => {
  const { theme } = useContext(ThemeContext);

  const initialValues = {
    name: '',
    email: '',
    subject: '',
    message: '',
    recaptcha: '',
    success: false,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Full name field is required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Email field is required'),
    subject: Yup.string().required('Subject field is required'),
    message: Yup.string().required('Message field is required'),
    recaptcha:
      process.env.NODE_ENV !== 'development'
        ? Yup.string().required('Robots are not welcome yet!')
        : Yup.string(),
  });

  const onSubmit = async (
    { name, email, subject, message },
    { setSubmitting, resetForm, setFieldValue }
  ) => {
    try {
      await axios({
        method: 'POST',
        url:
          process.env.NODE_ENV !== 'development'
            ? `${url}/api/contact`
            : 'http://localhost:3001/api/contact',
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      });
      setSubmitting(false);
      setFieldValue('success', true);
      setTimeout(() => resetForm(), 6000);
    } catch (error) {
      setSubmitting(false);
      setFieldValue('success', false);
      alert('Something went wrong, please try again!');
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      {({ values, touched, errors, setFieldValue, isSubmitting }) => (
        <Form style={{margin: 0}}>
          <InputField>
            <Input
              as={Field}
              type='text'
              name='name'
              component='input'
              aria-label='name'
              placeholder='Full name*'
              error={touched.name && errors.name}
              theme={theme}
            />
            <ErrorMessage component={Error} name='name' theme={theme}/>
          </InputField>
          <InputField>
            <Input
              as={Field}
              id='email'
              type='email'
              name='email'
              component='input'
              aria-label='email'
              placeholder='Email*'
              error={touched.email && errors.email}
              theme={theme}
            />
            <ErrorMessage component={Error} name='email' theme={theme}/>
          </InputField>
          <InputField>
            <Input
              as={Field}
              type='text'
              name='subject'
              component='input'
              aria-label='subject'
              placeholder='Subject*'
              error={touched.subject && errors.subject}
              theme={theme}
            />
            <ErrorMessage component={Error} name='subject' theme={theme}/>
          </InputField>
          <InputField>
            <Input
              as={Field}
              component='textarea'
              aria-label='message'
              id='message'
              rows='8'
              type='text'
              name='message'
              placeholder='Message*'
              error={touched.message && errors.message}
              theme={theme}
            />
            <ErrorMessage component={Error} name='message' theme={theme}/>
          </InputField>
          { values.name &&
					  values.email &&
            values.subject &&
            values.message &&
            process.env.NODE_ENV !== "development" && (
						<InputField>
							<FastField
								component={Recaptcha}
								sitekey={process.env.REACT_APP_PORTFOLIO_RECAPTCHA}
								name="recaptcha"
								onChange={(value) => setFieldValue("recaptcha", value)}
							/>
							<ErrorMessage component={Error} name="recaptcha" />
						</InputField>
					)}
          {values.success && (
					<InputField>
							<h4>
								Your message has been successfully sent, I will get back to you ASAP!
							</h4>
					</InputField>
				)}
					<Button as={Submit} theme={theme} secondary type="submit" disabled={isSubmitting}>
						Submit
					</Button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
