import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Contact from './pages/contact'
import Gallery from './pages/gallery'
import Home from './pages/home'
import Order from './pages/order'
import Solution from './pages/solution'
import Work from './pages/work'
import Footer from './shared/footer'
import Navbar from './shared/navbar'

function Layout() {
	return (
		<div>
			<Navbar />
			<Footer />
		</div>
	)
}

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '',
				element: <Home />,
			},
			{
				path: '/solution',
				element: <Solution />,
			},
			{
				path: '/gallery',
				element: <Gallery />,
			},
			{
				path: '/work',
				element: <Work />,
			},
			{
				path: '/order',
				element: <Order />,
			},
			{
				path: '/contact',
				element: <Contact />,
			},
		],
	},
])

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<div className='p-4 bg-gradient-to-r from-blue-400/10'>
			<RouterProvider router={router} />
		</div>
	</StrictMode>
)
