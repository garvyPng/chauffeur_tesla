import { Phone } from 'lucide-react';

// const PHONE_DISPLAY = '+41 79 123 45 67';
const PHONE_LINK = '+41762943588';

export function FloatingPhone() {
    return (
        //     <a
        //         href={`tel:${PHONE_LINK}`}
        //         className='
        //     fixed top-1/2 -translate-y-1/2 z-40
        //     left-0 sm:left-auto sm:right-0
        //     group
        //   '
        //         aria-label='Call chauffeur'
        //     >
        //         <div
        //             className='
        //       flex items-center gap-3
        //       rounded-r-2xl sm:rounded-r-none sm:rounded-l-2xl
        //       bg-black/90 backdrop-blur-md
        //       border border-[#C6A15B]/40
        //       px-4 py-3
        //       shadow-xl
        //       transition-all duration-300
        //       group-hover:bg-black
        //       group-hover:translate-x-0
        //       left-0
        //       sm:translate-x-6
        //       sm:group-hover:translate-x-0
        //     '
        //         >
        //             <Phone className='text-[#C6A15B]' size={20} />

        //             <span className='text-white font-medium tracking-wide whitespace-nowrap'>
        //                 {PHONE_DISPLAY}
        //             </span>
        //         </div>
        //     </a>
        <a
            href={`tel:${PHONE_LINK}`}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Call chauffeur'
            className='fixed bottom-6 left-6 right-auto md:left-auto md:right-24 z-50 group'
        >
            <div className='relative'>
                <span className='absolute inset-0 rounded-full bg-[#C6A15B]/30 blur-md scale-110 group-hover:scale-125 transition-transform duration-500' />

                <div className='relative flex h-16 w-16 items-center justify-center rounded-full bg-[#C6A15B] text-black shadow-2xl transition-all duration-300 group-hover:scale-110 animate-float'>
                    <Phone size={32} strokeWidth={1.5} />
                </div>
            </div>
        </a>
    );
}
