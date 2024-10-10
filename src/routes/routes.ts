import {
    DynamicForm,
  FormikAbstractation,
  FormikBasicPage,
  FormikComponents,
  FormikYupPage,
  RegisterFormikPage,
  RegisterPage,
} from "../03-forms/pages";

interface Route {
  to: string;
  path: string;
  Component: React.FC;
  name: string;
}

export const routes: Route[] = [
  {
    to: "register",
    path: "/register",
    Component: RegisterPage,
    name: "Register",
  },
  {
    to: "formik",
    path: "/formik",
    Component: FormikBasicPage,
    name: "Formik",
  },
  {
    to: "formik-yup",
    path: "/formik-yup",
    Component: FormikYupPage,
    name: "Formik Yup",
  },
  {
    to: "formik-components",
    path: "/formik-components",
    Component: FormikComponents,
    name: "Formik Components",
  },
  {
    to: "formik-abstractation",
    path: "/formik-abstractation",
    Component: FormikAbstractation,
    name: "Formik Abstractation",
  },
  {
    to: "register-formik-page",
    path: "/register-formik-page",
    Component: RegisterFormikPage,
    name: "Register Formik-page",
  },
  {
    to: "dynamic-form",
    path: "/dynamic-form",
    Component: DynamicForm,
    name: "Dynamic Form",
  },
];
