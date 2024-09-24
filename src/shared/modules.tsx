import { Button } from '@/components/ui/button'
import { modules } from '@/constants'
import { BadgeCheck } from 'lucide-react'

// this component for Home page
function Modules() {
	return (
		<div className='grid grid-cols-1'>
			<div className='space-y-4'>
				{modules.map(item => (
					<div
						key={item.kva}
						className='flex justify-around max-w-7xl mx-auto  bg-gradient-to-l from-blue-400/10 rounded-xl px-10 py-1'
					>
						<img src={item.photo} alt='' className='w-64' />
						<div className='flex justify-around gap-10'>
							<div className='flex flex-col gap-6'>
								<div className='flex gap-4 items-center'>
									<span className='text-4xl text-primary max-md:text-center font-roboto font-bold'>
										{item.title}
									</span>
									<Button className='text-sm' size={'sm'}>
										{item.kva}
									</Button>
								</div>
								<span className='text-lg max-md:ext-center'>
									{item.description}
								</span>
							</div>
							<div className='grid grid-cols-2 gap-x-16 gap-y-4'>
								{item.data.map(item => (
									<span className='flex gap-2'>
										<BadgeCheck className='text-primary' />
										{item}
									</span>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Modules
