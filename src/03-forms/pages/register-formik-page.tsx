import { Form, Formik, FormikValues } from 'formik';
import * as Yup from 'yup';

import { MyTextInput } from '../components/my-text-input';

import '../styles/styles.css';


export const RegisterFormikPage = () => {
    return (
        <div>
            <h1>RegisterFormikPage</h1>

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    password2: '',
                }}
                onSubmit={(values: FormikValues) => {
                    console.log(values);
                }}
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                            .min(2, 'Must be 2 characters or more')
                            .max(15, 'Must be 15 characters or less')
                            .required('Required field'),
                        email: Yup.string()
                            .email('Invalid email')
                            .required('Required field'),
                        password: Yup.string()
                            .min(6, 'Must be 6 characters or more')
                            .required('Required field'),
                        password2: Yup.string()
                            .oneOf([Yup.ref('password')], 'Passwords must match')
                            .required('Required field')
                    })
                }
            >
                {
                    ({ handleReset }) => (
                        <Form>
                            <MyTextInput label='Name' placeholder="Name" name='name' />
                            <MyTextInput label='Email' placeholder="Email" name='email' />
                            <MyTextInput label='Password' type="password" placeholder="******" name='password' />
                            <MyTextInput label='Password Confirmation' type="password" placeholder="******" name='password2' />

                            <button type="submit">Submit</button>
                            <button type='button' onClick={handleReset}>Reset</button>
                        </Form>
                    )
                }
            </Formik>

        </div>
    )
}