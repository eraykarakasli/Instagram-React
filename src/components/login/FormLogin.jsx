import React, { useEffect, useRef, useState } from 'react'
import { AiFillFacebook } from 'react-icons/ai'
import Input from './Input.jsx'
import { Formik } from 'formik'
import * as Yup from 'yup'

function FormLogin() {
    const inputRef = useRef();
    const [type, setType] = useState('password')
    const [show, setShow] = useState(false);
    let text1 = "Telefon numarası, kullanıcı adı veya e-posta";
    let text2 = "Password";
    let text = "text";

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

                <Formik
                    initialValues={{
                        username: "",
                        password: "",

                    }}

                    /* ///////// YUP VALIDATION //////// */
                    validationSchema={
                        Yup.object({
                            username: Yup.string().required("E-posta adresinizi veya kullanıcı adınızı girin."),
                            password: Yup.string().required("Şifrenizi girin."),
                        })}

                    /*  /////////// ON SUBMIT //////////// */
                    onSubmit={(values, { resetForm, setSubmitting }) => {
                        console.log(values)
                        setTimeout(() => {
                            resetForm();
                            setSubmitting(false);

                        }, 2000)
                    }}
                >


                    {({ values, errors, handleSubmit, handleReset, handleChange, dirty, isSubmitting, touched }) => (
                        <form onSubmit={handleSubmit} className='gap-y-2 grid'>

                            <Input
                                id="username"
                                type={text}
                                message={text1}
                                kurt={false}
                                value={values.username}
                                onChange={handleChange}
                            />

                            <Input
                                id='password'
                                type={type}
                                show={show}
                                kurt={true}
                                inputRef={inputRef}
                                setShow={setShow}
                                message={text2}

                                onChange={handleChange}
                                value={values.password}
                            />



                            <button
                                className='bg-brand text-white rounded-md h-8 mt-2  font-semibold hover:bg-blue-500'
                                type="submit"
                                disabled={!dirty || isSubmitting}
                            >Giriş Yap</button>

                        </form>
                    )}
                </Formik>
                <div className='grid grid-flow-col items-center  text-lg mt-3'>
                    <span><hr /> </span>
                    <span className='justify-center flex text-xs font-semibold text-gray-1000'>YA DA</span>
                    <span><hr /> </span>
                </div>

                <a href='' className='flex gap-1 items-center text-sm text-facebook font-semibold mt-5 justify-center'>
                    <AiFillFacebook size={20} /> Facebook ile Giriş Yap
                </a>
                <a href="" className='flex text-xs items-center justify-center text-forget my-3'>Şifreni mi unuttun?</a>


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