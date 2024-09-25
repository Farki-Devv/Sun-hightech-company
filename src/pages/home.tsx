import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Features from '@/shared/features'
import FixedBar from '@/shared/fixed-bar'
import Modules from '@/shared/modules'
import Numbers from '@/shared/numbers'
import Partner from '@/shared/partner'
import ScrollToTop from '@/shared/scroll'
import Works from '@/shared/works'
import { Send } from 'lucide-react'

function Home() {
	return (
		<>
			<div>
				<div className='text-center max-md:pt-10'>
					<span className='md:hidden text-3xl px-2 text-center font-roboto'>
						MChJ "SUN-HIGHTECH" YUQORI TEXNOLOGIYALAR
					</span>
				</div>
				<section className='text-gray-600'>
					<div className='container px-5 py-16 mx-auto flex justify-between flex-wrap'>
						<div className='flex flex-wrap w-full'>
							<div className='lg:w-2/5 md:w-1/2 md:pr-10 md:py-6'>
								<div className='flex relative pb-12'>
									<div className='h-full w-10 absolute inset-0 flex items-center justify-center'>
										<div className='h-full w-1 bg-gray-200 pointer-events-none'></div>
									</div>
									<div className='flex-shrink-0 w-10 h-10 rounded-full bg-primary inline-flex items-center justify-center text-white relative z-10'>
										<svg
											fill='none'
											stroke='currentColor'
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='2'
											className='w-5 h-5'
											viewBox='0 0 24 24'
										>
											<path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'></path>
										</svg>
									</div>
									<div className='flex-grow pl-4'>
										<h2 className='font-medium title-font text-sm text-gray-900 mb-1 tracking-wider'>
											Biz kimmiz ?
										</h2>
										<p className='leading-relaxed'>
											MChJ "SUN-HIGHTECH" YUQORI TEXNOLOGIYALAR
										</p>
									</div>
								</div>
								<div className='flex relative pb-12'>
									<div className='h-full w-10 absolute inset-0 flex items-center justify-center'>
										<div className='h-full w-1 bg-gray-200 pointer-events-none'></div>
									</div>
									<div className='flex-shrink-0 w-10 h-10 rounded-full bg-primary inline-flex items-center justify-center text-white relative z-10'>
										<svg
											fill='none'
											stroke='currentColor'
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='2'
											className='w-5 h-5'
											viewBox='0 0 24 24'
										>
											<path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
										</svg>
									</div>
									<div className='flex-grow pl-4'>
										<h2 className='font-medium title-font text-sm text-gray-900 mb-1 tracking-wider'>
											Ba'tafsil ma'lumot
										</h2>
										<p className='leading-relaxed'>
											«SUN-HIGHTECH» MChJ mutaxassislari 10 yildan ortiq vaqt
											davomida professional ravishda Quyosh elektr stantsiyalari
											va Quyosh suv isitgichlarini loyihalash, o’rnatish, ishlab
											chiqarish va xizmat ko’rsatish bilan shug’ullanadi. Biz
											avtonom, gibrid va tarmoq Quyosh elektr stantsiyalari va
											Quyosh suv isitgichlarini loyihalash, ishlab chiqarish va
											o’rnatish bo’yicha yuqori tajribaga egamiz
										</p>
									</div>
								</div>
								<div className='flex relative pb-12'>
									<div className='h-full w-10 absolute inset-0 flex items-center justify-center'>
										<div className='h-full w-1 bg-gray-200 pointer-events-none'></div>
									</div>
									<div className='flex-shrink-0 w-10 h-10 rounded-full bg-primary inline-flex items-center justify-center text-white relative z-10'>
										<svg
											fill='none'
											stroke='currentColor'
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='2'
											className='w-5 h-5'
											viewBox='0 0 24 24'
										>
											<circle cx='12' cy='5' r='3'></circle>
											<path d='M12 22V8M5 12H2a10 10 0 0020 0h-3'></path>
										</svg>
									</div>
									<div className='flex-grow pl-4'>
										<h2 className='font-medium title-font text-sm text-gray-900 mb-1 tracking-wider'>
											Natijalarimiz
										</h2>
										<p className='leading-relaxed'>
											Bugungi kunga qadar Respublikaning barcha hududlarida
											korxona mutaxassislari tomonidan mingdan ortiq Quyosh
											elektr stantsiyalari va Quyosh suv isitgichlari
											o’rnatilgan. Korxona mutaxassislari ushbu sohada
											Respublikamizda birinchilardan bo’lib amaliy jixatdan
											shug’ullana boshlashgan.
										</p>
									</div>
								</div>
								<div className='flex relative pb-12'>
									<div className='h-full w-10 absolute inset-0 flex items-center justify-center'>
										<div className='h-full w-1 bg-gray-200 pointer-events-none'></div>
									</div>
									<div className='flex-shrink-0 w-10 h-10 rounded-full bg-primary inline-flex items-center justify-center text-white relative z-10'>
										<svg
											fill='none'
											stroke='currentColor'
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='2'
											className='w-5 h-5'
											viewBox='0 0 24 24'
										>
											<path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'></path>
											<circle cx='12' cy='7' r='4'></circle>
										</svg>
									</div>
									<div className='flex-grow pl-4'>
										<h2 className='font-medium title-font text-sm text-gray-900 mb-1 tracking-wider'>
											Mahsulot va Xizmatlarimiz
										</h2>
										<p className='leading-relaxed'>
											Quyosh elektr stantsiyasi qismlari, Quyosh modullari ,
											Quyosh batareyalari, Inverter stabik , Quyosh suv nasosi,
											Fotovoltak
										</p>
									</div>
								</div>
								<div className='flex relative'>
									<div className='flex-shrink-0 w-10 h-10 rounded-full bg-primary inline-flex items-center justify-center text-white relative z-10'>
										<svg
											fill='none'
											stroke='currentColor'
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='2'
											className='w-5 h-5'
											viewBox='0 0 24 24'
										>
											<path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
											<path d='M22 4L12 14.01l-3-3'></path>
										</svg>
									</div>
									<div className='flex-grow pl-4'>
										<h2 className='font-medium title-font text-sm text-gray-900 mb-1 tracking-wider'>
											Yangiliklar
										</h2>
										<p className='leading-relaxed'>
											BIO sozlamalari ,Tabiat va quyosh stantsiyallari
											kelajakda, Innovatsiyalar perovskitlar va yangi turdagi
											quyosh xujayralari
										</p>
									</div>
								</div>
							</div>
							<img
								className='lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12'
								src='./gallery/engineers.jpg'
								alt='step'
							/>
						</div>
					</div>
				</section>
			</div>
			<div className='space-y-14'>
				<FixedBar />
				<Works />
				<Modules />
				<Numbers />
				<Features />
				<Partner />
				<div className='max-w-7xl mx-auto h-96 card p-10'>
					<div className='flex flex-col gap-4'>
						<span className='max-md:text-2xl text-3xl'>
							Biz bilan bog'laning
						</span>
						<div className='flex gap-10'>
							<Input
								className='h-16 rounded-md outline-none inputglass'
								placeholder='Ismingiz'
							/>
							<Input
								className='h-16 rounded-md outline-none inputglass'
								placeholder='Aloqa raqamingiz'
							/>
						</div>
						<div>
							<Textarea
								className='inputglass min-h-32 max-h-32'
								placeholder='Habaringizni yozing'
							/>
						</div>
						<Button className='right-10 bottom-4 absolute flex items-center gap-2'>
							Yuborish <Send className='size-4' />
						</Button>
					</div>
				</div>
				<ScrollToTop />
			</div>
		</>
	)
}

export default Home
