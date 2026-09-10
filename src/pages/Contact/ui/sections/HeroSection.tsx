import { useTranslation } from 'react-i18next';
import { Container } from '../../../../components/layout/Container';
import SwissIcon from '../../../../components/ui/SwissIcon';

export const HeroSection = () => {
    const { t } = useTranslation('contact');
    return (
        <section className='bg-black pb-20 pt-36 md:pb-28 md:pt-40'>
            <Container className='text-center'>
                <SwissIcon className='absolute left-1/2 top-24 z-10 h-10 w-10 -translate-x-1/2 sm:top-28 sm:h-12 sm:w-12' />

                <p className='text-sm font-heading font-medium tracking-[0.25em] text-[#C9A15B]'>
                    {t('eyebrow')}
                </p>
                <h1 className='mx-auto mt-4 max-w-2xl font-heading text-4xl leading-tight text-white sm:text-5xl md:text-6xl'>
                    {t('title')}{' '}
                    <span className='italic'>{t('title_accent')}</span>
                </h1>
                <p className='mx-auto mt-6 max-w-lg text-sm leading-relaxed text-neutral-400 md:text-base'>
                    {t('description')}
                </p>
            </Container>
        </section>
    );
};
