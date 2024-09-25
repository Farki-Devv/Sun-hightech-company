import { modules } from '@/constants'
import { BadgeCheck } from 'lucide-react'

// this component for Home page
function Modules() {
	return (
		<div className='grid grid-cols-1'>
			<div className='max-w-9xl grid max-md:grid-cols-1 max-lg:grid-cols-2 grid-cols-3 mx-auto gap-2 '>
				{modules.map(item => (
					<div className='p-4 space-y-4 border rounded hover:scale-110 card transition-all hover:z-50'>
						<div className='rounded-lg w-60 h-52 m-auto overflow-hidden'>
							<img
								alt='content'
								className='object-cover object-center'
								src={item.photo}
							/>
						</div>
						<h2 className='text-xl font-medium title-font text-gray-900 mt-5'>
							{item.title}
						</h2>
						<p className='text-base leading-relaxed mt-2'>
							{item.description.slice(0, 300)}
						</p>
						<a className='text-primary grid grid-cols-3 space-y-1'>
							{item.data.map(item => (
								<span key={item} className='grid grid-cols-3'>
									<span className='grid grid-cols-2 items-center max-lg:gap-1'>
										<BadgeCheck className='size-4' />
										<span className='max-md:text-sm'>{item}</span>
									</span>
								</span>
							))}
						</a>
					</div>
				))}
			</div>
		</div>
	)
}

export default Modules
