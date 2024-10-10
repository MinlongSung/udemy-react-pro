import { useFormik } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikYupPage = () => {
    const {
        errors,
        touched,
        handleSubmit,
        getFieldProps,
    } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required field'),

            lastName: Yup.string()
                .max(10, 'Must be 10 characters or less')
                .required('Required field'),

            email: Yup.string()
                .email('Invalid email')
                .required('Required field')
        }),
    });

    return (
        <div>
            <h2>Formik Yup Page</h2>

            <form noValidate onSubmit={handleSubmit}>
                <label htmlFor="firstName">First name</label>
                <input type="text" {...getFieldProps('firstName')} />
                {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

                <label htmlFor="lastName">Last name</label>
                <input type="text" {...getFieldProps('lastName')} />
                {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

                <label htmlFor="email">Email</label>
                <input type="email" {...getFieldProps('email')}/>
                {touched.email && errors.email && <span>{errors.email}</span>}

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}