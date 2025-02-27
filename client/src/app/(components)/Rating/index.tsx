import { Star } from 'lucide-react'
import React from 'react'

type Props = {
    rating: number
}

const Rating = (props: Props) => {
    return (
        <div className='flex'>{[1, 2, 3, 4, 5].map((index: number) => {
            return <Star 
            key={index} 
            color={index <= props.rating ? "#FFC107" : "#ADD8E6"} 
            className='w-4 h-4'
            />

        })}</div>
    )
}

export default Rating