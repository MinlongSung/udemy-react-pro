import { ShoppingPage } from "../02-component-patterns";

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
];