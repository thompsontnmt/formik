import React from 'react'
import { Formik, Field } from 'formik'
import { Button, TextField } from '@material-ui/core'

const App = () => {
  return (
    <div>
      <Formik initialValues={{ 
        firstName: '',
        lastName: '',
      }}
      onSubmit={(data, {setSubmitting}) => {
        setSubmitting(true);
        //make async call
        console.log('submit: ', data);
        setSubmitting(false)
      }}
      >
        {({ values, handleChange, handleBlur, handleSubmit}) => (

          <form onSubmit={handleSubmit}>
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
            <Button type='submit'>Submit</Button>
          </div>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </form>
          )}

      </Formik>
    </div>
  );
};

export default App
