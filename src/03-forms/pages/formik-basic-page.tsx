import { FormikErrors, useFormik } from 'formik';
import '../styles/styles.css';

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

const isValidEmail = (email: string) => {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

export const FormikBasicPage = () => {
    const validate = ({ firstName, lastName, email }: FormValues) => {
        const errors: FormikErrors<FormValues> = {};

        if (!firstName) {
            errors.firstName = 'Required';
        } else if (firstName.length > 15) {
            errors.firstName = 'Must be 15 characters or less';
        }

        if (!lastName) {
            errors.lastName = 'Required';
        } else if (lastName.length > 10) {
            errors.lastName = 'Must be 10 characters or less';
        }

        if (!email) {
            errors.email = 'Required';
        } else if (!isValidEmail(email)) {
            errors.email = 'Invalid email';
        }

        return errors;
    }

    const { 
        errors, 
        touched,
        values, 
        handleBlur,
        handleChange, 
        handleSubmit, 
    } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validate: validate,
    });

    const { firstName, lastName, email } = values;

    return (
        <div>
            <h2>Formik Basic Page</h2>

            <form noValidate onSubmit={handleSubmit}>
                <label htmlFor="firstName">First name</label>
                <input
                    type="text"
                    name='firstName'
                    value={firstName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                />
                {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

                <label htmlFor="lastName">Last name</label>
                <input
                    type="text"
                    name='lastName'
                    value={lastName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                />
                {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name='email'
                    value={email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                />
                {touched.email && errors.email && <span>{errors.email}</span>}

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}