import { useTranslation } from 'react-i18next';
import { Container } from '../../../../components/layout/Container';
import SwissIcon from '../../../../components/ui/SwissIcon';

interface TourData {
    id: string;
    image: string;
}

export const HeroSection = ({ tourData }: { tourData: TourData }) => {
    const { t } = useTranslation('tours');

    return (
        <section className='relative h-[500px]'>
            <div className='absolute inset-0 z-0 overflow-hidden'>
                <img
                    className='h-full w-full object-cover object-[center_80%]'
                    src={tourData.image}
                    alt={t(`${tourData.id}.title`)}
                    fetchPriority='high'
                    decoding='async'
                />
                <div
                    className='absolute inset-0'
                    style={{
                        background:
                            'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%)',
                    }}
                />
            </div>

            <SwissIcon className='absolute left-1/2 top-24 z-10 h-10 w-10 -translate-x-1/2 sm:top-28 sm:h-12 sm:w-12' />

            <Container className='relative z-10 flex h-full flex-col items-start justify-end gap-6 pb-20 md:flex-row md:items-end md:justify-between'>
                <div className='font-heading text-white'>
                    <p>
                        {t(`${tourData.id}.id`).charAt(0).toUpperCase() +
                            t(`${tourData.id}.id`).slice(1).replace(/_/g, ' ')}
                    </p>
                    <h1 className='text-2xl leading-tight tracking-tight text-white sm:text-3xl md:text-5xl lg:w-[600px] lg:text-7xl'>
                        {t(`${tourData.id}.title`)}
                    </h1>
                </div>

                <p className='max-w-md text-base text-neutral-300 sm:text-lg'>
                    {t(`${tourData.id}.description`)}
                </p>
            </Container>
        </section>
    );
};
