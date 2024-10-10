import { Formik, Form, FormikValues } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';
import { MySelect, MyTextInput, MyCheckbox } from '../components';

export const FormikAbstractation = () => {
    return (
        <div>
            <h2>Formik Abstractation</h2>

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
                        <MyTextInput label="First Name" name="firstName" placeholder='First name' />
                        <MyTextInput label="Last Name" name="lastName" placeholder='Last name' />
                        <MyTextInput label="Email" name="email" placeholder='Email' type='email' />

                        <MySelect label="Job Type" name="jobType">
                            <option value="">Pick something</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="itSenior">IT Senior</option>
                            <option value="itJunior">IT Jr.</option>
                        </MySelect>

                        <MyCheckbox label="Terms & Conditions" name='terms' />

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>

        </div>
    )
}