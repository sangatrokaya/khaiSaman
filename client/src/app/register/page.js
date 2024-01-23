'use client'
import React from 'react'
// import FormLayout from '@/components/layout/page'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button, Input } from '@nextui-org/react';


const SignupSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  fullName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

export const ValidationSchemaExample = () => {
  return (
    <div>
      <div>
        <br />
        <h2 className='register-bio1' style={{ fontSize: "30px" }}>Here for Register!</h2>
        <br />
        <p className='register-bio'>🕵️‍♂️ Hey there,</p>
        <p className='register-bio'>Are you ready to get registered?</p>
        <p className='register-bio'>Remember, only legit credentials can get you registered.</p>
        <p className='register-bio'>No invisible ink or secret handshakes, please! 🦸‍♀️💻</p>
      </div>
      <Formik
        initialValues={{
          fullName: '',
          phoneNumber: '',
          email: '',
          password: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="register-form-body">
              <Input type="fullName" label="Full Name" placeholder='Enter your full name' />
              <br />
              <Input type="email" label="Email" placeholder="Enter your email" />
              <br />
              <Input type="phoneNumber" label="Phone Number" placeholder="Enter your phone number" />
              <br />
              <Input type="password" label="Password" placeholder="Enter your password" />
              <br />
              <Button className='register-botton' type="submit">Submit</Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
};

const page = () => {
  return (
    <ValidationSchemaExample />
  )
}

export default page