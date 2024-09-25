import { numbers } from '@/constants'

// this component for Home page
function Numbers() {
	return (
		<div className='grid grid-cols-1 space-y-4'>
			<span className='text-lg text-primary text-center font-bold font-roboto'></span>
			<span className='text-5xl text-center font-semibold font-inter'>
				SUN-HIGHTECH raqamlarda
			</span>
			<div className='grid grid-cols-1 md:grid-cols-3 max-md:space-y-4 max-md:text-center md:space-x-4'>
				{numbers.map(item => (
					<div
						key={item.name}
						className='bg-white shadow-2xl flex flex-col rounded-md p-4 place-items-center card hover:scale-110 transition-all hover:z-50'
					>
						<img src={item.photo} alt='' className='size-28' />
						<span className='text-primary text-2xl font-medium font-roboto mt-2'>
							{item.name}
						</span>
						<span className='text-sm text-gray-400'>{item.description}</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default Numbers
