import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaInstagram, FaTwitter, FaDiscord, FaReddit } from 'react-icons/fa'

const variantButton = {
    hover: {
        opacity: 0.8,
        y: -10,
    }
}


const Footer: React.FC = () => {
    return (
        <footer className='mt-12 h-full bg-gray-900 text-white py-8 px-4'>
            <h1 className='text-center text-4xl font-black tracking-wider'>Animu</h1>
            <div className='container mx-auto flex flex-col items-center space-y-6'>
                <h2 className='text-2xl font-bold text-gray-600'>So, are you up for an isekai journey?</h2>
                <motion.button variants={variantButton} whileHover='hover' className='font-semibold tracking-wide px-6 py-2 bg-black rounded-full'>Join Us</motion.button>
            </div>
            <div className='pt-8 flex justify-between container mx-auto text-gray-600 font-semibold tracking-wide uppercase'>
                <p>Animu 2022. All rights reserved</p>
                <div className='flex gap-6'>
                    <Link href='/'>
                        <a className='hover:scale-110 hover:text-white opacity-95 transition'><FaInstagram /></a>
                    </Link>
                    <Link href='/'>
                        <a className='hover:scale-110 hover:text-white opacity-95 transition'><FaTwitter /></a>
                    </Link>
                    <Link href='/'>
                        <a className='hover:scale-110 hover:text-white opacity-95 transition'><FaDiscord /></a>
                    </Link>
                    <Link href='/'>
                        <a className='hover:scale-110 hover:text-white opacity-95 transition'><FaReddit /></a>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer