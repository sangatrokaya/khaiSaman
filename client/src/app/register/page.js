'use client'
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Input } from "@nextui-org/react";


const SignupForm = () => {
  const SignupSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phoneNumber: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    password: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    role: Yup.string()
      .required('required')
  });

  const registerUser = async(values)=> {
    await fetch('http://localhost:4000/register', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(values)
    })
  }

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      password: '',
      role: ''
    },
    validationSchema: SignupSchema,
    onSubmit: values => {
      registerUser(values)
    },
  });
  // console.log(formik)
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="register-form-body">
        <label htmlFor="fullName">Full Name</label>
        <Input
          id="fullName"
          name="fullName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.fullName}
          placeholder='Enter your full name' />
        {formik?.errors.fullName}

        <br />

        <label htmlFor="email">Email</label>
        <Input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder='Enter your email' />
        {formik?.errors.email}


        <br />


        <label htmlFor="phoneNumber">Phone Number</label>
        <Input
          id="phoneNumber"
          name="phoneNumber"
          type="phoneNumber"
          onChange={formik.handleChange}
          value={formik.values.phoneNumber}
          placeholder='Enter your phone number' />
        {formik?.errors.phoneNumber}


        <br />


        <label htmlFor="password">password</label>
        <Input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder='Enter your password' />
        {formik?.errors.password}

        <br/>


        <label htmlFor="role">Role</label>
        <Input
          id="role"
          name="role"
          type="role"
          onChange={formik.handleChange}
          value={formik.values.role}
          placeholder='Enter your role' />
        {formik?.errors.role}


        <br />

        <Button className='register-botton' type="submit">Submit</Button>
      </div>
    </form>
  );
};

export default SignupForm