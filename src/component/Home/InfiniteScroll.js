import { useState, useEffect } from 'react';

// return isFetching and setFetching state
export default function InfiniteScroll(getData, loading, error) {
    const [isFetching, setIsFetching] = useState(true)

    const handleScroll = () => {
        // -100 as a solution to infinite scroll event not triggered in mobile
        if ((window.innerHeight + window.scrollY) < document.body.offsetHeight - 100) {
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