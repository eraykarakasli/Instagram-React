import React, { useEffect, useRef, useState } from 'react'
import { AiFillFacebook } from 'react-icons/ai'

function FormLogin() {
    const inputRef = useRef();
    const [type, setType] = useState('password')
    const [show, setShow] = useState(false);
    useEffect(() => {
        if (show) {
            setType('text')
            inputRef.current.focus()
        } else {
            setType('password')
            inputRef.current.focus()
        }
    }, [show])
    return (
        <div className='w-[350px] pt-10'>
            <div className=' bg-white border px-[40px] pt-10 pb-2 rounded-sm'>
                <a className='flex justify-center mb-8' href=""> <img className='h-[50px]' src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png" /></a>
                <form className='gap-y-2 grid'>

                    <label className='block relative w-[268px]'>
                        <input
                            type="text"
                            className=' border rounded-sm w-full bg-zinc-50 h-[38px] outline-none focus:border-gray-400 px-2 valid:pt-3 peer text-xs text-gray-700'
                            required={true}
                        />
                        <small className='absolute pointer-events-none  top-1/2 left-2  text-gray-400 cursor-text transition-all -translate-y-1/2 peer-valid:text-[10px]  peer-valid:top-2.5'>Telefon numarası, kullanıcı adı veya e-posta</small>
                    </label>

                    <label className=' relative w-[268px] flex border  bg-zinc-50 h-[38px] focus-within:border-gray-400'>
                        <input
                            ref={inputRef}
                            type={type}
                            className='rounded-sm w-full outline-none  px-2 valid:pt-3 peer text-xs bg-transparent text-gray-700'
                            required={true}
                        />
                        <small className='absolute pointer-events-none  top-1/2 left-2  text-gray-400 cursor-text transition-all -translate-y-1/2 peer-valid:text-[10px]  peer-valid:top-2.5'>Password</small>
                        <button type='button' onClick={() => setShow(!show)} className='top-2.5 mr-2 hover:text-gray-400 text-sm font-semibold peer-invalid:hidden'>
                            {show ? 'Göster' : 'Gizle'}
                        </button>
                    </label>

                    <button
                        disabled={true}
                        className='bg-brand text-white rounded-md h-8 mt-2  font-semibold hover:bg-blue-500'
                        type="submit">Giriş Yap</button>

                    <div className='grid grid-flow-col items-center  text-lg mt-3'>
                        <span><hr /> </span>
                        <span className='justify-center flex text-xs font-semibold text-gray-1000'>YA DA</span>
                        <span><hr /> </span>
                    </div>

                    <a href='' className='flex gap-1 items-center text-sm text-facebook font-semibold mt-5 justify-center'>
                        <AiFillFacebook size={20} /> Facebook ile Giriş Yap
                    </a>
                    <a href="" className='flex text-xs items-center justify-center text-forget my-3'>Şifreni mi unuttun?</a>
                </form>

            </div>

            <div className='flex justify-center items-center border bg-white w-[350px] h-[63px] mt-2.5 text-sm'>
                Hesabın yok mu? <a className='text-brand font-semibold ' href="">&nbsp; Kaydol</a>
            </div>

            <div className='flex justify-center my-4 text-sm'>Uygulamayı indir</div>
            <div className='flex h-10 gap-2 justify-center cursor-pointer'>
                <img src="https://static.cdninstagram.com/rsrc.php/v3/yp/r/XUCupIzGmzB.png" alt="" />
                <img src="https://static.cdninstagram.com/rsrc.php/v3/yf/r/BFthdeAc5KC.png" alt="" />
            </div>

        </div>
    )
}

export default FormLogin