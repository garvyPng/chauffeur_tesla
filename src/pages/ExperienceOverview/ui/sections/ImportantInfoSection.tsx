import { useTranslation } from 'react-i18next';
import { Info, Car, Plane, Tag, CalendarX } from 'lucide-react';
import { Container } from '../../../../components/layout/Container';

interface InfoItem {
    title: string;
    text: string;
}

const icons = [Info, Car, Plane, Tag, CalendarX];

export const ImportantInfoSection = () => {
    const { t } = useTranslation('common');
    const items = t('important_info.items', {
        returnObjects: true,
    }) as InfoItem[];

    return (
        <section className='mt-16'>
            <Container>
                <h2 className='font-serif text-2xl text-neutral-900'>
                    {t('important_info.title')}
                </h2>

                <div className='mt-8 flex flex-col gap-6'>
                    {items.map((item, i) => {
                        const Icon = icons[i] ?? Info;
                        return (
                            <div
                                key={item.title}
                                className='flex items-start gap-4 border-b border-neutral-200 pb-6 last:border-0 last:pb-0'
                            >
                                <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#C9A15B]/40'>
                                    <Icon
                                        className='h-4 w-4 text-[#C9A15B]'
                                        strokeWidth={1.5}
                                    />
                                </div>
                                <div>
                                    <h3 className='font-serif text-base text-neutral-900'>
                                        {item.title}
                                    </h3>
                                    <p className='mt-1 text-sm leading-relaxed text-neutral-500'>
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
};
