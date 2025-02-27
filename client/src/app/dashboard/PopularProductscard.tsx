"use client";
import { useGetDashboardMetricsQuery } from '@/src/state/api'
import { ShoppingBag } from 'lucide-react';
import React from 'react'
import Rating from '../(components)/Rating';


const PopularProductscard = () => {
    const { isLoading, data: DashboardMetrics } = useGetDashboardMetricsQuery()
    return (
        <div className='row-span-3 xl:row-span-6 bg-white h-full overflow-auto w-full border-[1.5px] border-neutral-300 rounded-md shadow-md'>
            <div className='flex flex-col items-start justify-center w-full '>
                {isLoading ? <div className='text-xl'>Loading...</div> : (
                    <>
                        <h2 className='font-semibold text-xl mb-3 pl-4 text-black pt-3'>Popular Products</h2>
                        <hr className='w-full bg-black my-1' />
                        <div className='h-full w-full'>
                            {DashboardMetrics && DashboardMetrics.popularProducts.map((product, index) => {
                                return (<div key={product.productId} className='flex flex-col items-center justify-center border-b-[0.5px] border-neutral-300 px-4 py-3 w-full'>
                                    <div className='flex items-center w-full'>
                                        <div className='text-xs pr-2'>image</div>
                                        <div className='flex items-center justify-between w-full'>
                                            <div className='flex flex-col gap-[1.5px] text-base'>
                                                <h2 className='font-bold text-black'>{product.name}</h2>
                                                <div className='flex flex-row items-center gap-x-2'>
                                                    <span className='text-xs font-bold text-blue-600'>${product.price}</span>
                                                    <span className='text-xs'>|</span>
                                                    <Rating rating={product.rating || 0} />
                                                </div>
                                            </div>
                                            <div className='flex items-center justify-center gap-2'>
                                                <ShoppingBag color='blue' size={20} />
                                                <span className='text-xs font-semibold'>{product.stockQuantity / 1000}k Qty.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            })}
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default PopularProductscard