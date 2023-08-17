
import React from 'react'


function Input({ type, show, inputRef, setShow, message, kurt,value,onChange,id}) {
  
    return (
        <div>
            <label className=' relative w-[268px] flex border  bg-zinc-50 h-[38px] focus-within:border-gray-400'>
                <input
                    ref={inputRef}
                    type={type}
                    className='rounded-sm w-full outline-none  px-2 valid:pt-3 peer text-xs bg-transparent text-gray-700'
                    required={true}
                    value={value}
                    onChange={onChange}
                    id={id}

                />
                <small className='absolute pointer-events-none  top-1/2 left-2  text-gray-400 cursor-text transition-all -translate-y-1/2 peer-valid:text-[10px]  peer-valid:top-2.5'>{message}</small>
                {
                    kurt ? <button type='button' onClick={() => setShow(!show)} className='top-2.5 mr-2 hover:text-gray-400 text-sm font-semibold peer-invalid:hidden'>   {show ? 'Göster' : 'Gizle'}  </button> : ' '
                }
            </label>
        </div>
    )
}

export default Input