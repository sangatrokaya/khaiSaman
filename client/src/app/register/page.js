'use client'
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Input } from "@nextui-org/react";
import styles from './styles.module.css'
import { toast } from 'react-toastify';




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

  const registerUser = async (values) => {
    const res = await fetch('http://localhost:4000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    })
    const data = await res.json()
    toast(data.msg)
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
    <form className={styles.formfields} onSubmit={formik.handleSubmit}>
      <label htmlFor='description'>
        <h1 className={styles.heading}>Here for Register!</h1>
        <p className={styles.disclaimar}>🕵️‍♂️ Hey there,</p>
        <p className={styles.disclaimar}>Are you ready to get registered?</p>
        <p className={styles.disclaimar}>Remember, only legit credentials can get you registered.</p>
        <p className={styles.disclaimar}>No invisible ink or secret handshakes, please! 🦸‍♀️💻</p>
      </label>
      <br />
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

      <br />


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

      <Button className='registerBotton' type="submit">Submit</Button>
    </form>
  );
};

export default SignupForm