import { FormEvent } from 'react';
import '../styles/styles.css';
import { useForm } from '../hooks/use-form';

interface RegisterForm {
    name: string,
    email: string,
    password: string,
    password2: string,
}

export const RegisterPage = () => {
    const {
        name,
        email,
        password,
        password2,
        formData,
        handleChange,
        isValidEmail,
        resetForm
    } = useForm<RegisterForm>({
        name: '',
        email: '',
        password: '',
        password2: '',
    });

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <div>
            <h1>RegisterPage</h1>

            <form noValidate onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    name='name'
                    value={name}
                    onChange={handleChange}
                    className={`${!name.trim().length && 'has-error'}`}
                />
                {!name.trim().length && <span>Required field</span>}

                <input
                    type="email"
                    placeholder="Email"
                    name='email'
                    value={email}
                    onChange={handleChange}
                    className={`${!isValidEmail(email) && 'has-error'}`}
                />
                {!isValidEmail(email) && <span>Invalid email</span>}
                <input
                    type="password"
                    placeholder="Password"
                    name='password'
                    value={password}
                    onChange={handleChange}
                />
                {!password.trim().length && <span>Required field</span>}
                {password.trim().length > 0 && password.trim().length < 6 && <span>Passowrd must have 6 characters</span>}


                <input
                    type="password"
                    placeholder="Repeat Password"
                    name='password2'
                    value={password2}
                    onChange={handleChange}
                />
                {!password2.trim().length && <span>Required field</span>}
                {password2.trim().length > 0 && password == password2 && <span>Passwords must match</span>}


                <button type="submit">Submit</button>
                <button type="button" onClick={resetForm}>Reset</button>
            </form>
        </div>
    )
}