import { MessageCircle } from 'lucide-react';

const PHONE = '41762943588';

export function FloatingWhatsApp() {
    return (
        <a
            href={`https://wa.me/${PHONE}`}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Chat on WhatsApp'
            className='fixed bottom-6 right-6 z-50 group'
        >
            <div className='relative'>
                <span className='absolute inset-0 rounded-full bg-[#C6A15B]/30 blur-md scale-110 group-hover:scale-125 transition-transform duration-500' />

                <div className='relative flex h-16 w-16 items-center justify-center rounded-full bg-[#C6A15B] text-black shadow-2xl transition-all duration-300 group-hover:scale-110 animate-float'>
                    <MessageCircle size={32} strokeWidth={1.5} />
                </div>
            </div>
        </a>
    );
}
