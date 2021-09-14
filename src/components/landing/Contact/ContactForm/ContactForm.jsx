import React, { useContext } from 'react';
import { Formik, Form, FastField, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { url } from 'data/config';
import { Error, InputField, Input } from './styles';
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
            : 'http://localhost:3000/api/contact',
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
        <Form>
          <InputField>
            <Input
              as={FastField}
              type='text'
              name='name'
              component='input'
              aria-label='name'
              placeholder='Full name*'
              error={touched.name && errors.name}
              theme={theme}
            />
            <Error as={ErrorMessage} name='name' theme={theme} />
          </InputField>
          <InputField>
            <Input
              as={FastField}
              id='email'
              type='email'
              name='email'
              component='input'
              aria-label='email'
              placeholder='Email*'
              error={touched.email && errors.email}
              theme={theme}
            />
            <ErrorMessage component={Error} name='email' />
          </InputField>
          <InputField>
            <Input
              as={FastField}
              type='text'
              name='subject'
              component='input'
              aria-label='subject'
              placeholder='Subject*'
              error={touched.subject && errors.subject}
              theme={theme}
            />
            <ErrorMessage component={Error} name='subject' />
          </InputField>
          <InputField>
            <Input
              as={FastField}
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
            <ErrorMessage component={Error} name='message' />
          </InputField>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
