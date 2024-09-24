import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTrigger,
} from '@/components/ui/sheet'
import { navlink } from '@/constants'
import { Menu, Phone } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import Logo from './logo'

function Mobile() {
	return (
		<Sheet>
			<SheetTrigger>
				<Menu />
			</SheetTrigger>
			<SheetContent side={'top'} className='space-y-4'>
				<SheetHeader>
					<Logo />
				</SheetHeader>
				<div className='flex flex-col gap-4 px-4'>
					{navlink.map(nav => (
						<NavLink
							key={nav.href}
							to={nav.href}
							className={({ isActive, isPending }) =>
								isPending
									? ''
									: isActive
									? 'font-semibold text-lg px-4 py-2 rounded-md bg-blue-400 text-white'
									: 'text-lg font-medium px-4 py-2 rounded-md bg-blue-400/20 text-blue-600'
							}
						>
							{nav.label}
						</NavLink>
					))}
				</div>
				<Separator className='mt-2' />
				<div className='flex flex-col px-4 mt-4 gap-2'>
					<Button>Aloqa</Button>
					<Button variant={'outline'} className='gap-2'>
						<Phone className='size-4 text-blue-400' /> 94 947 2041
					</Button>
				</div>
			</SheetContent>
		</Sheet>
	)
}

export default Mobile
