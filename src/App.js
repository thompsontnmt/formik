import React from 'react'
import { Formik, Field, Form } from 'formik'
import { Button, TextField } from '@material-ui/core'
// import { number } from 'yup';
// import * as Yup from 'yup';
// import 'yup-phone';

const App = () => {
  return (
    <div>
      <Formik initialValues={{ 
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        agreement: false,
      }}
      onSubmit={(data, {setSubmitting}) => {
        setSubmitting(true);
        //make async call
        console.log('submit: ', data);
        setSubmitting(false)
      }}
      >
        {({ values, isSubmitting }) => (

          <Form>
            <Field
              placeholder='First Name'
              name="firstName"
              type='input'
              as={TextField}
            />
          <div>
            <Field
              placeholder='Last Name'
              name="lastName"
              type='input'
              as={TextField}
            />
          </div>
          <div>
            <Field
              placeholder='Email'
              name="email"
              type='input'
              as={TextField}
            />
          </div>
          <div>
            <Field
              placeholder='Mobile'
              name="mobile"
              type='input'
              as={TextField}
            />
          </div>
            <Field 
              name='agreement' 
              type='checkbox'>
            </Field>
          <div>
            <Button type='submit'>Submit</Button>
          </div>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </Form>
          )}

      </Formik>
    </div>
  );
};

export default App
