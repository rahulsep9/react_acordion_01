import ReactDOM from 'react-dom/client';
import AppLayout from './components/AppLayout';
import Home from './components/Home';
import Error from './components/Error';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from './components/Contact';
import { lazy, Suspense } from 'react';

const About = lazy(() => import('./components/About'));

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/about',
                element: (
                    <Suspense fallback="rahul is greatest of all time">
                        <About />
                    </Suspense>
                )
            },
            {
                path: '/contact',
                element: <Contact />
            }

        ],
        errorElement: <Error />
    }
])

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<RouterProvider router={appRouter}></RouterProvider>);