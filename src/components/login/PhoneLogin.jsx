import React, { useEffect, useRef } from 'react'


function PhoneLogin() {
    const ref = useRef();
    useEffect(() => {
        let images = ref.current.querySelectorAll('img'),
            total = images.length,
            current = 0
        const imageSlider = () => {
            if (current > 0) {
                images[current - 1].classList.add('opacity-0')
            } else {
                images[total - 1].classList.add('opacity-0')
            }
            images[current].classList.remove('opacity-0')
            if (current === total - 1) {
                current = 0
            } else {
                current += 1
            }
        }
        imageSlider();
        let interval = setInterval(imageSlider, 3000)
        return () => {
            clearInterval(interval)
        }
    }, [ref])

    return (

        <div className='relative w-[380px] h-[581px] bg-phone-pattern bg-[top_left_-46px] bg-[length:468.32px_634.15px] mb-3 mr-8'>
            <div className='w-[250px] h-[538.84px] top-[27px] right-4 absolute' ref={ref}>
                <img className='w-full h-full absolute top-0 left-0 transition-opacity opacity-0 duration-1000 ease-linear' src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1-2x.png/cfd999368de3.png" />
                <img className='w-full h-full absolute top-0 left-0 transition-opacity opacity-0 duration-1000 ease-linear' src="https://www.instagram.com/static/images/homepage/screenshots/screenshot2-2x.png/80b8aebdea57.png" />
                <img className='w-full h-full absolute top-0 left-0 transition-opacity opacity-0 duration-1000 ease-linear' src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3-2x.png/fe2540684ab2.png" />
                <img className='w-full h-full absolute top-0 left-0 transition-opacity opacity-0 duration-1000 ease-linear' src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4-2x.png/8e9224a71939.png" />
            </div>
        </div>

    )
}

export default PhoneLogin