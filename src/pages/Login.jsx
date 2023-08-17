import React from 'react'
import PhoneLogin from '../components/login/PhoneLogin'
import FormLogin from '../components/login/FormLogin'
import Footer from '../components/footer/Footer'

function Login() {
    return (
        <div className='grid place-items-center h-screen '>
            <div className='flex justify-center items-center  w-full gap-x-1'>
                <PhoneLogin />
                <FormLogin />

            </div>
            <div>
                <Footer />
            </div>

        </div>
    )
}

export default Login