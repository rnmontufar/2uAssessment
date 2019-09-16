import React from 'react';

const Forms = React.lazy(() => import('./views/Base/Forms'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const routes = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/invoice', exact: true, name: 'Invoices', component: Dashboard },
    { path: '/invoice/create', name: 'Create Invoices', component: Forms },
];

export default routes;
