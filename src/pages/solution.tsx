import { useTranslation } from 'react-i18next'

function Solution() {
	const { t } = useTranslation()
	return (
		<div>
			<section className='text-gray-600 body-font'>
				<div className='container px-5 py-24 mx-auto'>
					<div className='flex flex-col text-center w-full mb-20'>
						<h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
							{t('advantages')}
						</h1>
						<p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
							{t('description')}
						</p>
					</div>
					<div className='flex flex-wrap -m-2'>
						<div className='p-2 lg:w-1/3 md:w-1/2 w-full'>
							<div className='h-full flex items-center border-gray-200 border p-4 rounded-lg'>
								<img
									alt='team'
									className='w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4'
									src={'./avatar.jpg'}
								/>
								<div className='flex-grow'>
									<h2 className='text-gray-900 title-font font-medium'>
										{t('ground')}
									</h2>
									<p className='text-gray-500'>{t('groundDesc')}</p>
								</div>
							</div>
						</div>
						<div className='p-2 lg:w-1/3 md:w-1/2 w-full'>
							<div className='h-full flex items-center border-gray-200 border p-4 rounded-lg'>
								<img
									alt='team'
									className='w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4'
									src={'./avatar.jpg'}
								/>
								<div className='flex-grow'>
									<h2 className='text-gray-900 title-font font-medium'>
										{t('roof')}
									</h2>
									<p className='text-gray-500'>{t('roofDesc')}</p>
								</div>
							</div>
						</div>
						<div className='p-2 lg:w-1/3 md:w-1/2 w-full'>
							<div className='h-full flex items-center border-gray-200 border p-4 rounded-lg'>
								<img
									alt='team'
									className='w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4'
									src={'./avatar.jpg'}
								/>
								<div className='flex-grow'>
									<h2 className='text-gray-900 title-font font-medium'>
										{t('water')}
									</h2>
									<p className='text-gray-500'>{t('waterDesc')}</p>
								</div>
							</div>
						</div>
						<div className='p-2 lg:w-1/3 md:w-1/2 w-full'>
							<div className='h-full flex items-center border-gray-200 border p-4 rounded-lg'>
								<img
									alt='team'
									className='w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4'
									src={'./avatar.jpg'}
								/>
								<div className='flex-grow'>
									<h2 className='text-gray-900 title-font font-medium'>
										{t('mobile')}
									</h2>
									<p className='text-gray-500'>{t('mobileDesc')}</p>
								</div>
							</div>
						</div>
						<div className='p-2 lg:w-1/3 md:w-1/2 w-full'>
							<div className='h-full flex items-center border-gray-200 border p-4 rounded-lg'>
								<img
									alt='team'
									className='w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4'
									src={'./avatar.jpg'}
								/>
								<div className='flex-grow'>
									<h2 className='text-gray-900 title-font font-medium'>
										{t('special')}
									</h2>
									<p className='text-gray-500'>{t('specialDesc')}</p>
								</div>
							</div>
						</div>
						<div className='p-2 lg:w-1/3 md:w-1/2 w-full'>
							<div className='h-full flex items-center border-gray-200 border p-4 rounded-lg'>
								<img
									alt='team'
									className='w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4'
									src={'./avatar.jpg'}
								/>
								<div className='flex-grow'>
									<h2 className='text-gray-900 title-font font-medium'>
										{t('price')}
									</h2>
									<p className='text-gray-500'>{t('priceDesc')}</p>
								</div>
							</div>
						</div>
						<div className='p-2 lg:w-1/3 md:w-1/2 w-full'>
							<div className='h-full flex items-center border-gray-200 border p-4 rounded-lg'>
								<img
									alt='team'
									className='w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4'
									src={'./avatar.jpg'}
								/>
								<div className='flex-grow'>
									<h2 className='text-gray-900 title-font font-medium'>
										{t('own')}
									</h2>
									<p className='text-gray-500'>{t('ownDesc')}</p>
								</div>
							</div>
						</div>
						<div className='p-2 lg:w-1/3 md:w-1/2 w-full'>
							<div className='h-full flex items-center border-gray-200 border p-4 rounded-lg'>
								<img
									alt='team'
									className='w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4'
									src={'./avatar.jpg'}
								/>
								<div className='flex-grow'>
									<h2 className='text-gray-900 title-font font-medium'>
										{t('ability')}
									</h2>
									<p className='text-gray-500'>{t('abilityDesc')}</p>
								</div>
							</div>
						</div>
						<div className='p-2 lg:w-1/3 md:w-1/2 w-full'>
							<div className='h-full flex items-center border-gray-200 border p-4 rounded-lg'>
								<img
									alt='team'
									className='w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4'
									src={'./avatar.jpg'}
								/>
								<div className='flex-grow'>
									<h2 className='text-gray-900 title-font font-medium'>
										{t('network')}
									</h2>
									<p className='text-gray-500'>{t('networkDesc')}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Solution
