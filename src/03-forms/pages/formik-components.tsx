import { Formik, Field, Form, FormikValues, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikComponents = () => {
    return (
        <div>
            <h2>Formik Components</h2>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: '',
                }}
                onSubmit={(values: FormikValues) => {
                    console.log(values);
                }}
                validationSchema={
                    Yup.object({
                        firstName: Yup.string()
                            .max(15, 'Must be 15 characters or less')
                            .required('Required field'),

                        lastName: Yup.string()
                            .max(10, 'Must be 10 characters or less')
                            .required('Required field'),

                        email: Yup.string()
                            .email('Invalid email')
                            .required('Required field'),

                        terms: Yup.boolean()
                            .oneOf([true], 'Must accept the terms and conds'),

                        jobType: Yup.string()
                            .notOneOf(['itJunior'], 'Invalid option')
                            .required('Required field'),
                    })
                }>

                {formik => (
                    <Form>
                        <label htmlFor="firstName">First name</label>
                        <Field type="text" name="firsName" />
                        <ErrorMessage name='firstName' component="span" />
                        <label htmlFor="lastName">Last name</label>
                        <Field type="text" name="lastName" />
                        <ErrorMessage name='lastName' component="span" />

                        <label htmlFor="email">Email</label>
                        <Field type="text" name="email" />
                        <ErrorMessage name='email' component="span" />

                        <label htmlFor="jobType">Job Type</label>
                        <Field type="text" as="select">
                            <option value="">Pick something</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="itSenior">IT Senior</option>
                            <option value="itJunior">IT Jr.</option>
                        </Field>
                        <ErrorMessage name='jobType' component="span" />

                        <label>
                            <Field type="checkbox" name="terms" />
                            Terms and conditions
                        </label>
                        <ErrorMessage name='terms' component="span" />

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>

        </div>
    )
}