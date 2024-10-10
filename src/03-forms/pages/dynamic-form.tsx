import { Formik, Form, FormikValues } from 'formik';
import * as Yup from 'yup';

import formJson from '../data/custom-form.json';
import { MySelect, MyTextInput } from '../components';

const initialValues: { [key: string]: any } = {};
const fieldValidations: { [key: string]: any } = {};

for (const input of formJson) {
    initialValues[input.name] = input.value;

    if (!input.validations) continue;

    let schema = Yup.string();

    for (const rule of input.validations) {
        if (rule.type === 'required') {
            schema = schema.required('Required field');
        }

        if (rule.type === 'minLength') {
            schema = schema.min((rule as any).value || 2, `Must be ${(rule as any).value || 2} characters or more`);
        }

        if (rule.type === 'email') {
            schema = schema.email('Invalid email');
        }
    }

    fieldValidations[input.name] = schema;
}

const validationSchema = Yup.object({ ...fieldValidations });

export const DynamicForm = () => {
    return (
        <div>
            <h1>DynamicForm</h1>

            <Formik
                initialValues={initialValues}
                onSubmit={(values: FormikValues) => {
                    console.log(values);
                }}
                validationSchema={validationSchema}
            >
                {formik => (
                    <Form>
                        {formJson.map(({ type, name, placeholder, label, options }) => {

                            const validTextTypes = ['text', 'password', 'email'];
                            if (validTextTypes.includes(type)) {
                                return <MyTextInput
                                    key={name}
                                    type={(type as any)}
                                    name={name}
                                    placeholder={placeholder}
                                    label={label}
                                />
                            }

                            if (type == 'select') {
                                return (
                                    <MySelect
                                        key={name}
                                        label={label}
                                        name={name}
                                    >
                                        <option value="">Select an option</option>
                                        {options?.map(({ id, label }) => (
                                            <option key={id} value={id}>{label}</option>
                                        ))}
                                    </MySelect>
                                )
                            }

                            throw new Error(`The type ${type} is not supported`)
                        })}
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}