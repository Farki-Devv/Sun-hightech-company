import { gallery } from '@/constants'

function Gallery() {
	return (
		<section className='text-gray-600 body-font'>
			<div className='container px-5 py-10 mx-auto'>
				<div className='grid max-md:grid-cols-1 max-lg:grid-cols-2 grid-cols-3 gap-4'>
					{gallery.map(item => (
						<div key={item.photo} className=''>
							<img src={item.photo} alt='' />
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Gallery
