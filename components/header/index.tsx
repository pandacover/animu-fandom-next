import React, { useEffect, useLayoutEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const variantHeader = {
    hidden: {
        y: "100%",
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
    }
}

const variantAnchor = {
    hidden: {
        scale: 0,
        opacity: 0,
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            delay: 0.4,
            scale: { duration: 0.6 },
            opacity: { duration: 0.4 }
        }
    }
}

interface Props {
    setHeaderSize: React.Dispatch<React.SetStateAction<number>>
}

const Main: React.FC = () => {
    return (
        <main className='relative z-20 container mx-auto md:pt-32 lg:px-48 pt-28 px-8 text-white'>
            <motion.div transition={{ delay: 0.3 }} variants={variantHeader} initial='hidden' animate='visible' className='text-2xl md:text-3xl font-bold'>Animu is a collection of many and various anime fandom blogs, posts, etc. We are a big and wholesome community of anime lovers and enthusiasts. Join us and lets start our own journey in the anime world together!</motion.div>
            <motion.form transition={{ delay: 0.6 }} variants={variantHeader} initial='hidden' animate='visible' action="GET" className='w-full min-h-full md:pt-28 pt-20' onSubmit={() => null}>
                <label htmlFor="search-fandom" className='sr-only'>Search Fandom</label>
                <motion.input whileFocus={{ scale: 1.1, y: -10 }} name='search-fandom' id='search-fandom' type="text" aria-label='text'
                    className='appearance-none w-full h-12 rounded-3xl bg-[#fff2] placeholder:text-gray-400 focus:placeholder:text-white text-white outline-none px-4 py-2 transition-color select-all' placeholder='Type something...' aria-placeholder='Type something...' />
            </motion.form>
            <motion.div transition={{ delay: 0.9 }} variants={variantHeader} initial='hidden' animate='visible' className='pt-10 w-full flex justify-center'>
                <motion.button whileHover={{ scale: 1.1, y: -10 }}
                    className='px-6 py-3 rounded-full font-semibold bg-white text-black shadow-lg shadow-[#fff2]'>JOIN US</motion.button>
            </motion.div>
        </main>
    )
}

const Header: React.FC = () => {
    return (
        <header className='max-w-full h-screen relative bg-[url("/headerBG.avif")] bg-no-repeat bg-center bg-cover'>
            <div className='absolute left-0 top-0 w-full h-screen bg-[#0008] backdrop-blur-md z-10' />
            <nav className='container mx-auto text-4xl font-black text-gray-400 relative z-20 px-8 md:px-0'>
                <Link href='/' passHref>
                    <motion.a variants={variantAnchor} initial='hidden' animate='visible'>Animu</motion.a>
                </Link>
            </nav>
            <Main />
        </header>
    )
}


export default Header