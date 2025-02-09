import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '../../Store/Services/Auth/authApi';
import { setAuthToken, setUserData } from '../../Store/Services/Auth/authSlice';
import { useState } from 'react';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [login, { isLoading, isError, isSuccess }] = useLoginMutation();
  const [submitError, setSubmitError] = useState(null);

  // Validation schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await login(values).unwrap();
        dispatch(setAuthToken(response.token));
        dispatch(setUserData(response.user));
        formik.resetForm();
      } catch (error) {
        setSubmitError(error.message);
      }
    },
  });

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center w-full">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Login</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
            )}
          </div>

          {submitError && <div className="text-red-500 text-sm mb-4">{submitError}</div>}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>

          {isSuccess && <div className="text-green-500 text-sm mt-4">Login successful!</div>}
          {isError && <div className="text-red-500 text-sm mt-4">Login failed. Please try again.</div>}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
