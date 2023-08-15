import React from 'react'

function Footer() {
    return (
        <div>
            <div className='flex justify-center gap-4 '>
                <a className='hover:underline text-xs text-gray-500' href="">Meta</a>
                <a className='hover:underline text-xs text-gray-500' href="">Hakkında</a>
                <a className='hover:underline text-xs text-gray-500' href="">Blog</a>
                <a className='hover:underline text-xs text-gray-500' href="">İş Fırsatları</a>
                <a className='hover:underline text-xs text-gray-500' href="">Yardım</a>
                <a className='hover:underline text-xs text-gray-500' href="">API</a>
                <a className='hover:underline text-xs text-gray-500' href="">Gizlilik</a>
                <a className='hover:underline text-xs text-gray-500' href="">Koşullar</a>
                <a className='hover:underline text-xs text-gray-500' href="">Başlıca Hesaplar</a>
                <a className='hover:underline text-xs text-gray-500' href="">Konumlar</a>
                <a className='hover:underline text-xs text-gray-500' href="">Instagram Lite</a>
                <a className='hover:underline text-xs text-gray-500' href="">Threads</a>
                <a className='hover:underline text-xs text-gray-500' href="">Kişi Yükleme ve Hesabı Olmayan Kişiler</a>
                <a className='hover:underline text-xs text-gray-500' href="">Meta Verified</a>
            </div>

            <div className='flex justify-center text-gray-500 text-xs  mt-4'>&copy; 2023 Instagram from Meta</div>

        </div>
    )
}

export default Footer