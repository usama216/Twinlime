import { useFormik } from 'formik';
import * as Yup from 'yup';  // Import Yup directly for validation
import { useState } from 'react';
import { useSendContactFormMutation } from '../Store/Services/contactApi';

const ContactForm = () => {
  const [sendContactForm, { isLoading, isError, isSuccess }] = useSendContactFormMutation();
  const [submitError, setSubmitError] = useState(null);

  // Define the validation schema directly inside the form component
  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Name is required')
      .min(2, 'Name must be at least 2 characters'),
    
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    
    message: Yup.string()
      .required('Message is required')
      .min(10, 'Message must be at least 10 characters'),
  });

  // Formik setup with validation schema
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema,  // Use the validation schema defined above
    onSubmit: async (values) => {
      try {
        await sendContactForm(values).unwrap(); // Submit the form
        formik.resetForm(); // Reset the form on successful submission
      } catch (error) {
        setSubmitError(error.message); // Handle submission error
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name && <div>{formik.errors.name}</div>}
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}
      </div>
      <div>
        <label>Message</label>
        <textarea
          name="message"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.message && formik.errors.message && <div>{formik.errors.message}</div>}
      </div>
      {submitError && <div>{submitError}</div>}
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Sending...' : 'Submit'}
      </button>
      {isSuccess && <div>Your message was sent successfully!</div>}
      {isError && <div>Something went wrong. Please try again.</div>}
    </form>
  );
};

export default ContactForm;
