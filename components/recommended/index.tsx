import React from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

interface FeatureInterface {
    id: Date,
    type: string,
    title: string,
    excerpt: string,
    author: string,
    link: string
}

type FeatureType = Array<FeatureInterface>

const excerpt = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae quo eveniet maiores quidem debitis nihil deleniti veniam error quasi omnis! Consequatur dignissimos iusto mollitia cumque totam ab, eos ratione modi.'

const Features: FeatureType = [
    { id: new Date(), type: 'Anime', title: 'Jujutsu Kaisen', excerpt: excerpt, author: 'Autumn', link: '/' },
    { id: new Date(), type: 'Anime', title: 'Jujutsu Kaisen', excerpt: excerpt, author: 'Autumn', link: '/' },
    { id: new Date(), type: 'Anime', title: 'Jujutsu Kaisen', excerpt: excerpt, author: 'Autumn', link: '/' },
    { id: new Date(), type: 'Anime', title: 'Jujutsu Kaisen', excerpt: excerpt, author: 'Autumn', link: '/' },
    { id: new Date(), type: 'Anime', title: 'Jujutsu Kaisen', excerpt: excerpt, author: 'Autumn', link: '/' },
    { id: new Date(), type: 'Anime', title: 'Jujutsu Kaisen', excerpt: excerpt, author: 'Autumn', link: '/' },
]

const RecommendedCard: React.FC<{ feature: FeatureInterface }> = ({ feature: { type, title, excerpt, author, link } }) => {
    return (
        <motion.div className='mb-12 p-2 md:p-4 shadow-lg shadow-gray-400/20'>
            <h5 className='font-bold text-gray-400'>{type}</h5>
            <h3 className='text-4xl font-black tracking-wide pb-4'>{title}</h3>
            <p className='pb-10'>{excerpt}</p>
            <div className='flex justify-between text-blue-500 pr-3'>
                <Link href={link}>
                    <a className='hover:text-blue-300 transition'>{author}</a>
                </Link>
                <Link href={link}>
                    <a className='hover:text-blue-300 transition'>Readmore</a>
                </Link>
            </div>
        </motion.div>
    )
}

const Recommended: React.FC = () => {
    return (
        <motion.main className='container mx-auto md:pt-20 md:px-4 px-2 pt-10'>
            <h3 className='text-center font-bold text-lg'>Recommended</h3>
            <div className='w-full h-full md:pt-20 grid md:grid-cols-3 gap-6 grid-cols-1'>
                {Features.map((feature: FeatureInterface, idx: number) => (
                    <RecommendedCard key={idx} feature={feature} />
                ))}
            </div>
        </motion.main>
    )
}

export default Recommended