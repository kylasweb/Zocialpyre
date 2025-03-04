import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import { Button, TextField } from '@mui/material'

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).required()
})

export const LoginForm = ({ onLogin }) => (
  <Formik
    initialValues={{ email: '', password: '' }}
    validationSchema={validationSchema}
    onSubmit={onLogin}
  >
    {({ errors, touched }) => (
      <Form>
        <Field
          as={TextField}
          name="email"
          label="Email"
          error={touched.email && !!errors.email}
          helperText={touched.email && errors.email}
        />
        <Field
          as={TextField}
          name="password"
          label="Password"
          type="password"
          error={touched.password && !!errors.password}
          helperText={touched.password && errors.password}
        />
        <Button type="submit" variant="contained">
          Login
        </Button>
      </Form>
    )}
  </Formik>
)