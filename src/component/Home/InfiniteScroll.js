import { useState, useEffect } from 'react';

// return isFetching and setFetching state
export default function InfiniteScroll(getData, loading, error) {
    const [isFetching, setIsFetching] = useState(true)

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) {
            return
        } else {
            setIsFetching(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
            if (!isFetching) {
                return
            }

            if (loading) {
                console.log('Loading...')
            }

            if (error) {
                console.log('Error: '+error.message)
            }

            if (!loading && !error) {
                getData()
            }
    }, [isFetching, loading, error])

    return [isFetching, setIsFetching]
}