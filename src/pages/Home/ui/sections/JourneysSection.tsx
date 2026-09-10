import { useTranslation } from 'react-i18next';
import { Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '../../../../components/layout/Container';
import toursData from '../../../../data/tours.json';
import SectionTitle from '../../../../components/ui/SectionTitle';
import { useLocalizedPath } from '../../../../hooks/useLocalizedPath';

interface TourData {
    id: string;
    show: boolean;
    order: number;
    slug: string;
    image: string;
    duration_hours: number;
    passengers_max: number;
}

interface TourContent {
    price: string;
    title: string;
    description: string;
    duration_hours_text: string;
}

function TourCard({
    tour,
    content,
    href,
}: {
    tour: TourData;
    content: TourContent;
    href: string;
}) {
    const { t } = useTranslation('common');

    return (
        <div className='flex h-full flex-col items-stretch'>
            <Link to={href} className='block aspect-[4/3] overflow-hidden'>
                <img
                    src={tour.image}
                    alt={content.title}
                    className='h-full w-full object-cover transition-transform duration-500 hover:scale-105'
                />
            </Link>

            <p className='mt-6 text-xs font-medium uppercase tracking-[0.15em] text-[#C9A15B]'>
                {t('labels.one_day_tour')}
            </p>

            <h3 className='font-serif text-2xl text-neutral-900'>
                {content.title}
            </h3>

            <p className='mt-3 text-sm leading-relaxed text-neutral-500'>
                {content.description}
            </p>

            <div className='mt-auto flex items-center justify-between pt-5'>
                <div className='flex items-center gap-5 text-sm'>
                    <span className='flex items-center gap-1.5 text-neutral-500'>
                        <Clock className='h-4 w-4' strokeWidth={1.5} />
                        {content.duration_hours_text}
                    </span>
                    <span className='font-medium uppercase text-[#C9A15B]'>
                        {content.price}
                    </span>
                </div>

                <Link
                    to={href}
                    className='group mr-5 flex items-center gap-1 text-sm text-neutral-900'
                >
                    {t('buttons.learn_more')}
                    <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
                </Link>
            </div>
        </div>
    );
}

export const JourneySection = () => {
    const { t } = useTranslation(['home', 'tours', 'common']);
    const localize = useLocalizedPath();

    const featuredTours = Object.values(toursData as Record<string, TourData>)
        .filter((tour) => tour.show)
        .sort((a, b) => a.order - b.order)
        .slice(0, 2);

    return (
        <section id='experiences' className='mt-16'>
            <Container>
                <div className='flex items-end justify-between'>
                    <SectionTitle
                        subtitle={t('featured_experiences.eyebrow', {
                            ns: 'home',
                        })}
                        title={t('featured_experiences.title', {
                            ns: 'home',
                        })}
                        position='left'
                        className='mb-0'
                    />

                    <Link
                        to={localize('/experiences')}
                        className='group hidden items-center gap-1 whitespace-nowrap text-sm font-medium tracking-[0.15em] text-[#C9A15B] md:flex'
                    >
                        {t('buttons.view_all', { ns: 'common' })}
                        <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
                    </Link>
                </div>

                <div className='mt-12 grid grid-cols-1 items-stretch gap-2 md:grid-cols-2'>
                    {featuredTours.map((tour) => (
                        <TourCard
                            key={tour.id}
                            tour={tour}
                            href={localize(`/experiences/${tour.slug}`)}
                            content={
                                t(tour.id, {
                                    ns: 'tours',
                                    returnObjects: true,
                                }) as TourContent
                            }
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
};
