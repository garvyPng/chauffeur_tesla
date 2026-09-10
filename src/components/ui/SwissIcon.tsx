interface SwissIconProps {
    className?: string;
}

export default function SwissIcon({ className = '' }: SwissIconProps) {
    return (
        <div className={`w-full flex flex-col items-center ${className}`}>
            <img
                className='w-10 h-10 m:w-20 m:h-20'
                src='/images/swiss_icon.png'
                alt='swiss icon'
            />
            {/* <img className='w-10' src='/images/swiss.svg' alt='' /> */}
            {/* <div className='h-[1px] w-14 bg-white'></div> */}
        </div>
    );
}
