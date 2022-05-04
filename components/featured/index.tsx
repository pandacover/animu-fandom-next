import Link from 'next/link'
import { wrap } from 'popmotion'
import { HiArrowSmLeft, HiArrowSmRight } from 'react-icons/hi'
import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ComponentProps {
    containerViewScroll: number
}

interface FeatureInterface {
    id: Date,
    type: string,
    title: string,
    excerpt: string,
    author: string,
    link: string
}

type FeatureType = Array<FeatureInterface>

type Props = {
    children: React.ReactNode
}

const excerpt = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae quo eveniet maiores quidem debitis nihil deleniti veniam error quasi omnis! Consequatur dignissimos iusto mollitia cumque totam ab, eos ratione modi.'

const Features: FeatureType = [
    { id: new Date(), type: 'Anime', title: 'Jujutsu Kaisen', excerpt: excerpt, author: 'Autumn', link: '/' },
    { id: new Date(), type: 'Anime', title: 'Jujutsu Kaisen', excerpt: excerpt, author: 'Autumn', link: '/' },
    { id: new Date(), type: 'Anime', title: 'Jujutsu Kaisen', excerpt: excerpt, author: 'Autumn', link: '/' },
    { id: new Date(), type: 'Anime', title: 'Jujutsu Kaisen', excerpt: excerpt, author: 'Autumn', link: '/' },
    { id: new Date(), type: 'Anime', title: 'Jujutsu Kaisen', excerpt: excerpt, author: 'Autumn', link: '/' },
    { id: new Date(), type: 'Anime', title: 'Jujutsu Kaisen', excerpt: excerpt, author: 'Autumn', link: '/' },
]

const variantCarousel = {
    enter: (direction: number) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction: number) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        };
    }
}

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};

const Carousel: React.FC = () => {
    const [[page, direction], setPage] = useState([0, 0])
    const carouselIndex = wrap(0, Features.length, page);

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection])
    }

    return (
        <div className='relative h-full w-full'>
            <motion.div
                key={page}
                variants={variantCarousel}
                custom={direction}
                initial='enter'
                animate='center'
                exit='exit'
                transition={{
                    x: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);

                    if (swipe < -swipeConfidenceThreshold) {
                        paginate(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                        paginate(-1);
                    }
                }}
                className='md:w-9/12 w-11/12 mt-12 mx-auto min-h-full py-4 relative'
            >
                <h5 className='font-bold text-gray-400'>{Features[carouselIndex].type}</h5>
                <h3 className='text-4xl font-extrabold tracking-wide pb-8'>{Features[carouselIndex].title}</h3>
                <p className='h-32'>
                    {Features[carouselIndex].excerpt}
                </p>
                <div className='flex justify-between items-center text-sm font-semibold text-blue-600'>
                    <Link href={Features[carouselIndex].link}>
                        <a className='hover:text-blue-300 transition'>{Features[carouselIndex].author}</a>
                    </Link>
                    <Link href={Features[carouselIndex].link}>
                        <a className='hover:text-blue-300 transition'>Readmore</a>
                    </Link>
                </div>
            </motion.div>
            <button className='hidden md:flex justify-center items-center absolute w-6 h-6 bg-black text-white animate-pulse rounded-full top-[50%] left-0 hover:opacity-40 transition' onClick={() => paginate(-1)}>
                <HiArrowSmLeft />
            </button>
            <button className='hidden md:flex justify-center items-center absolute w-6 h-6 bg-black text-white animate-pulse rounded-full top-[50%] right-0 hover:opacity-40 transition' onClick={() => paginate(1)}>
                <HiArrowSmRight />
            </button>
        </div>
    )
}

const Featured: React.FC<ComponentProps> = ({ containerViewScroll: scrollProgress }) => {
    const containerRef = useRef<HTMLElement>(null)
    const { current: elContainer } = containerRef
    // console.log(scrollProgress)

    return (
        <main ref={containerRef} className='container min-h-9/12 md:h-full mx-auto pt-12 overflow-hidden transition' style={scrollProgress >= -465 ? { transform: 'translateY(0)', opacity: 1 } : { opacity: 0, transform: 'translateY(100%)' }}>
            <h3 className='text-center font-bold text-lg'>Currently Featuring</h3>
            <AnimatePresence>
                <Carousel />
            </AnimatePresence>
        </main>
    )
}

export default Featured