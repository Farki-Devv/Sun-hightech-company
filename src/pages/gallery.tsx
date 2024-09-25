import { gallery } from '@/constants'

function Gallery() {
	return (
		<section className='text-gray-600 body-font'>
			<div className='container px-5 py-10 mx-auto'>
				<div className='flex flex-col text-center w-full mb-20'>
					<h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
						Bizning texnalogiyalarimz
					</h1>
					<p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
					Har bir texnalogiya uchun masulyat bilan ahamyat berganmiz
					</p>
				</div>
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
