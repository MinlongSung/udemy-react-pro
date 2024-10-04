import { AboutPage, ShoppingPage, UsersPage } from "../02-component-patterns";

interface Route {
    to: string;
    path: string;
    Component: React.FC;
    name: string;
}

export const routes: Route[] = [
    {
        to: 'shopping',
        path: '/shopping',
        Component: ShoppingPage,
        name: 'Shopping'
    },
    {
        to: 'about',
        path: '/about',
        Component: AboutPage,
        name: 'About'
    },
    {
        to: 'users',
        path: '/users',
        Component: UsersPage,
        name: 'Users'
    },
];