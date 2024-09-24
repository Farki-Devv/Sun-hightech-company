// this component for Home page

import { advantages } from '@/constants'

function Works() {
	return (
		<div className='grid grid-cols-1 max-w-9xl mx-auto gap-4'>
			<span className='text-primary text-lg font-roboto font-bold text-center'>
				Haqida
			</span>
			<span className='text-5xl font-inter font-semibold text-center'>
				Bizning avzalliklar
			</span>
			<div className='grid md:grid-cols-2 space-y-10 lg:grid-cols-3 justify-between px-24'>
				{advantages.map(item => (
					<div
						key={item.title}
						className='text-center grid grid-cols-1 gap-2 place-items-center'
					>
						<img src={item.photo} alt='' className='w-auto h-32' />
						<span className='text-primary text-3xl font-montserrat'>
							{item.title}
						</span>
						<span className='text-xl'>{item.description}</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default Works
