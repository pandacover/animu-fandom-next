import React from 'react'

interface Props {
    children: React.ReactNode
}

interface ScrollValue {
    scrollY: number,
}

export const ScrollContext = React.createContext<ScrollValue>({ scrollY: 0 })

const ScrollObserver: React.FC<Props> = ({ children }) => {

    const [scrollY, setScrollY] = React.useState(0)

    const scrollCallback = React.useCallback(() => {
        setScrollY(window.scrollY)
    }, [])

    React.useEffect(() => {
        document.addEventListener('scroll', scrollCallback, { passive: true })
        return () => document.removeEventListener('scroll', scrollCallback)
    }, [scrollCallback])

    return (
        <ScrollContext.Provider value={{ scrollY }}>
            {children}
        </ScrollContext.Provider>
    )
}

export default ScrollObserver