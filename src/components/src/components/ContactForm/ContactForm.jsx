import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

const ContactForm = ({ addContact }) => {
  const initialValues = { name: '', number: '' };

  const validationSchema = Yup.object({
    name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
    number: Yup.string().required('Required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    addContact({ ...values, id: nanoid() });
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.contactForm}>
        <div>
          <label className={styles.label} htmlFor="name">Name</label>
          <Field className={styles.input} name="name" type="text" />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </div>
        <div>
          <label className={styles.label} htmlFor="number">Number</label>
          <Field className={styles.input} name="number" type="text" />
          <ErrorMessage name="number" component="div" className={styles.error} />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;