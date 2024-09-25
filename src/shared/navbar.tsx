import { Button } from '@/components/ui/button'
import { navlink } from '@/constants'
import { Phone } from 'lucide-react'
import { NavLink, Outlet } from 'react-router-dom'
import Logo from './logo'
import Mobile from './mobile'

function Navbar() {
	return (
		<div className='max-w-9xl mx-auto space-y-4 '>
			<div className='fixed mt-2 top-0 left-0 w-full z-50 '>
				<div className=' flex justify-between max-w-9xl mx-auto items-center px-4 font-roboto border-b-2 p-2 bg-gradient-to-r rounded cardbar'>
					<div className='flex justify-between md:gap-10 items-center w-full pr-4'>
						<Logo />
						<div className='flex md:gap-6 max-md:hidden'>
							{navlink.map(nav => (
								<NavLink
									key={nav.href}
									to={nav.href}
									className={({ isActive, isPending }) =>
										isPending
											? ''
											: isActive
											? 'font-semibold text-lg	'
											: 'lg:text-sm xl:text-lg font-normal'
									}
								>
									{nav.label}
								</NavLink>
							))}
						</div>
						<div />
						<div className='hidden max-md:flex'>
							<Mobile />
						</div>
					</div>
					<div className='md:gap-4 hidden lg:flex'>
						<Button>Aloqa uchun</Button>
						<Button variant={'outline'} className='gap-2'>
							<Phone className='size-4 text-blue-400' />
							(+998) 55 506 78 88
						</Button>
					</div>
				</div>
			</div>
			<Outlet />
		</div>
	)
}

export default Navbar
