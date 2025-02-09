// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import { useDispatch } from 'react-redux';
// import { useSignupMutation } from '../../Store/Services/Auth/authApi';
// import { setAuthToken, setUserData } from '../../Store/Services/Auth/authSlice';
// import { useState } from 'react';

// const SignupForm = () => {
//   const dispatch = useDispatch();
//   const [signup, { isLoading, isError, isSuccess }] = useSignupMutation();
//   const [submitError, setSubmitError] = useState(null);

//   // Validation schema using Yup
//   const validationSchema = Yup.object({
//     name: Yup.string().min(2, 'Name must be at least 2 characters').required('Name is required'),
//     email: Yup.string().email('Invalid email').required('Email is required'),
//     password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
//     confirmPassword: Yup.string()
//       .oneOf([Yup.ref('password'), null], 'Passwords must match')
//       .required('Confirm Password is required'),
//   });

//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       email: '',
//       password: '',
//       confirmPassword: '',
//     },
//     validationSchema,
//     onSubmit: async (values) => {
//       try {
//         const response = await signup(values).unwrap();
//         dispatch(setAuthToken(response.token));
//         dispatch(setUserData(response.user));
//         formik.resetForm();
//       } catch (error) {
//         setSubmitError(error.message);
//       }
//     },
//   });

//   return (
//     <div className="min-h-screen bg-gray-900 flex items-center justify-center">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
//         <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Sign Up</h2>
//         <form onSubmit={formik.handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={formik.values.name}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//             />
//             {formik.touched.name && formik.errors.name && (
//               <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
//             )}
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={formik.values.email}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//             />
//             {formik.touched.email && formik.errors.email && (
//               <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
//             )}
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={formik.values.password}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//             />
//             {formik.touched.password && formik.errors.password && (
//               <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
//             )}
//           </div>

//           <div className="mb-6">
//             <label className="block text-gray-700 font-semibold mb-2" htmlFor="confirmPassword">
//               Confirm Password
//             </label>
//             <input
//               type="password"
//               id="confirmPassword"
//               name="confirmPassword"
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={formik.values.confirmPassword}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//             />
//             {formik.touched.confirmPassword && formik.errors.confirmPassword && (
//               <div className="text-red-500 text-sm mt-1">{formik.errors.confirmPassword}</div>
//             )}
//           </div>

//           {submitError && <div className="text-red-500 text-sm mb-4">{submitError}</div>}

//           <button
//             type="submit"
//             disabled={isLoading}
//             className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
//           >
//             {isLoading ? 'Signing up...' : 'Sign Up'}
//           </button>

//           {isSuccess && <div className="text-green-500 text-sm mt-4">Signup successful! You are now logged in.</div>}
//           {isError && <div className="text-red-500 text-sm mt-4">Signup failed. Please try again.</div>}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignupForm;


import React from 'react';
import Heading from '../atoms/Heading';
import InputField from '../atoms/InputField';
import RadioButton from '../atoms/RadioButton';
import TextArea from '../atoms/TextArea';
import Checkbox from '../atoms/Checkbox';
import Button from '../atoms/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      gender: '',
      country: '',
      terms: false,
    },
    // validationSchema: Yup.object({
    //   name: Yup.string().required('Name is required'),
    //   email: Yup.string().email('Invalid email').required('Email is required'),
    //   password: Yup.string().required('Password is required'),
    //   confirmPassword: Yup.string()
    //     .oneOf([Yup.ref('password'), null], 'Passwords must match')
    //     .required('Confirm Password is required'),
    //   gender: Yup.string().required('Please select your gender'),
    //   country: Yup.string().required('Please select your country'),
    //   terms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
    // }),
    validationSchema: Yup.object(),
    onSubmit: (values) => {
      console.log('Form submitted with:', values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-6">
      <Heading level={2} text="Sign Up Form" />

      <InputField
        id="name"
        name="name"
        type="text"
        placeholder="Enter your name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && formik.errors.name}
      />

      <InputField
        id="email"
        name="email"
        type="email"
        placeholder="Enter your email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && formik.errors.email}
      />

      <InputField
        id="password"
        name="password"
        type="password"
        placeholder="Enter your password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && formik.errors.password}
      />

      <RadioButton
        name="gender"
        options={[
          { label: 'Male', value: 'male' },
          { label: 'Female', value: 'female' },
        ]}
        value={formik.values.gender}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.gender && formik.errors.gender && (
        <div className="text-red-500">{formik.errors.gender}</div>
      )}

   

      <Checkbox
        id="terms"
        name="terms"
        label="I agree to the terms and conditions"
        value={formik.values.terms}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.terms && formik.errors.terms && (
        <div className="text-red-500">{formik.errors.terms}</div>
      )}

      {/* <Button type="submit">Submit</Button> */}
      <Button type="submit" disabled={formik.isSubmitting}>Submit</Button>

    </form>
  );
};

export default SignupForm;
