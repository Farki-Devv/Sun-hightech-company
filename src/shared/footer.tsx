import { Input } from '@/components/ui/input'
import { features, navlink } from '@/constants'
import { Facebook, Instagram, Send, Youtube } from 'lucide-react'
import { Link } from 'react-router-dom'
import Logo from './logo'

function Footer() {
	return (
		<footer className='text-gray-600 body-font'>
			<div className='container px-5 py-24 mx-auto'>
				<div className='flex flex-wrap md:text-left text-center order-first'>
					<div className='lg:w-1/4 md:w-1/2 w-full px-4'>
						<h2 className='title-font font-medium text-gray-900 tracking-widest text-sm mb-3'>
							Pages
						</h2>
						<nav className='flex flex-col gap-2 mb-10'>
							{navlink.map(item => (
								<Link key={item.href} to={item.href}>
									{item.label}
								</Link>
							))}
						</nav>
					</div>
					<div className='lg:w-1/4 md:w-1/2 w-full px-4'>
						<h2 className='title-font font-medium text-gray-900 tracking-widest text-sm mb-3'>
							Features
						</h2>
						<nav className='flex flex-col gap-2 mb-10'>
							{features.map(item => (
								<span key={item.name}>{item.name}</span>
							))}
						</nav>
					</div>
					<div className='lg:w-1/4 md:w-1/2 w-full px-4'>
						<h2 className='title-font font-medium text-gray-900 tracking-widest text-sm mb-3'>
							Obuna bolish
						</h2>
						<div className='flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start'>
							<div className='relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2'>
								<label
									htmlFor='footer-field'
									className='leading-7 text-sm text-gray-600'
								>
									Email maznil yoki aloqa rsqamini kiriting
								</label>
								<Input className='h-10' placeholder='+998 00 000 00 00'/>
							</div>
							<button className='lg:mt-2 flex items-center gap-2 xl:mt-0 flex-shrink-0 text-white bg-primary border-0 py-2 px-6 focus:outline-none rounded'>
								Yuborish <Send className='size-4' />
							</button>
						</div>
						<p className='text-gray-500 text-sm mt-2 md:text-left text-center'>
							Bizga qoshiling
						</p>
					</div>
				</div>
			</div>
			<div className='bg-gray-100'>
				<div className='container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col'>
					<Logo />
					<span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
						<span className='flex gap-4'>
							<Instagram />
							<Youtube />
							<Facebook />
							<Send />
						</span>
					</span>
				</div>
			</div>
		</footer>
	)
}

export default Footer
