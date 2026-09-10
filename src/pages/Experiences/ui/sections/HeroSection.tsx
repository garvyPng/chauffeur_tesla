import { useTranslation } from 'react-i18next';
import { Container } from '../../../../components/layout/Container';
import SwissIcon from '../../../../components/ui/SwissIcon';

export const HeroSection = () => {
    const { t } = useTranslation('experiences');
    return (
        <section className='relative h-[500px]'>
            <div className='absolute inset-0 z-0 overflow-hidden'>
                <img
                    className='h-full w-full object-cover object-[center_80%]'
                    src='/images/cars/vehicle.png'
                    alt='mercedes'
                    fetchPriority='high'
                    decoding='async'
                />
                <div
                    className='absolute inset-0'
                    style={{
                        background: 'rgba(0,0,0,0.2)',
                    }}
                />
            </div>

            <SwissIcon className='absolute left-1/2 top-24 z-10 h-10 w-10 -translate-x-1/2 sm:top-28 sm:h-12 sm:w-12' />

            <Container className='relative z-10 flex h-full flex-col items-start justify-end space-y-5 pb-20 md:flex-row md:items-end md:justify-between md:space-x-10 md:space-y-0'>
                <div className='font-heading text-white'>
                    <p>{t('hero.eyebrow')}</p>
                    <h1 className='text-2xl leading-tight tracking-tight text-white sm:w-auto sm:text-3xl md:text-5xl lg:w-[500px] lg:text-7xl'>
                        {t('hero.title')}
                        <span className='italic'>
                            {' '}
                            {t('hero.title-secondary')}
                        </span>
                    </h1>
                </div>
                <p className='text-base text-neutral-300 sm:text-lg'>
                    {t('hero.text')}
                </p>
            </Container>
        </section>
    );
};
