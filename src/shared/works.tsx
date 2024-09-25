// this component for Home page

import { advantages } from '@/constants'

function Works() {
	return (
		<div className='grid grid-cols-1 max-w-9xl mx-auto gap-4'>
			<span className='text-primary text-lg font-roboto font-bold text-center'>
			</span>
			<span className='text-5xl font-inter font-semibold text-center'>
				Bizning avzalliklar
			</span>
			<div className='grid space-y-2 lg:grid-cols-2 xl:grid-cols-3 items-center place-items-center font-montserrat'>
				{advantages.map(item => (
					<div className='flex flex-col items-center gap-4'>
						<img src={item.photo} alt='' className='w-44' />
						<div className='flex flex-col items-center'>
							<span className='text-primary text-3xl text-center font-medium'>
								{item.title}
							</span>
							<span className='text-center'>
								{item.description.slice(0, 40)}
							</span>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Works
