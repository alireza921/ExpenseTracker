import { useState } from "react";
import { useAuth, useAuthAction } from "../../context/auth/auhContextProvider";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
const initialValues = {
  name: "",
  email: "",
};

const validationSchema = yup.object({
  name: yup
    .string()
    .required("Name is Required !")
    .min(6, "Minimum 6 charachter "),
  email: yup.string().email("Email Is Invalid !").required("Email is Required"),
});

const LoginPage = () => {
  const navigate = useNavigate();
  const setAuth = useAuthAction();

  const onSubmit = (values, { resetForm }) => {
    setAuth(values);
    resetForm({ values: "" });
    navigate("/");
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className='my-4'>
        <label className='font-semibold '> Name : </label>
        <input
          type='text'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          name='name'
          className='border-2 border-violet-400 rounded-lg px-1 outline-none w-full my-1 '
        />
        {formik.errors.name && formik.touched.name && (
          <div className='text-red-600 mb-1'> {formik.errors.name} </div>
        )}
      </div>
      <div>
        <label className='font-semibold '> Email : </label>
        <input
          type='email'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          name='email'
          className='border-2 border-violet-400 rounded-lg px-1 outline-none w-full my-1'
        />
        {formik.errors.email && formik.touched.email && (
          <div className='text-red-600 mb-1'> {formik.errors.email} </div>
        )}
      </div>
      <button
        disabled={!formik.isValid}
        type='submit'
        className={`${
          !formik.isValid && "bg-gray-200 text-violet-800 cursor-not-allowed"
        } ${" border-solid w-full bg-violet-400 p-2 text-indigo-50 my-2 rounded-xl"}`}>
        submit
      </button>
    </form>
  );
};

export default LoginPage;
