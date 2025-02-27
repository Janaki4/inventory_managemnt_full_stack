"use client";
import { useGetDashboardMetricsQuery } from '@/src/state/api'
import { TrendingDown, TrendingUp } from 'lucide-react';
import numeral from 'numeral';
import React from 'react'
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

type Props = {}

const PurchaseHistoryCard = (props: Props) => {
    const { isLoading, data: DashboardMetrics } = useGetDashboardMetricsQuery()
    const purchaseSummary = DashboardMetrics?.purchaseSummary || []
    const lastDataPoint = purchaseSummary[purchaseSummary?.length! - 1]
    console.log(lastDataPoint);

    return (
        <div className='row-span-3 xl:row-span-6 bg-white w-full h-full rounded-md shadow-md'>
            {isLoading ? (<div className='text-xl font-semibold'>Loading...</div>) : (
                <>
                    <div className='flex flex-col gap-y-3 pt-3 h-full'>
                        <h2 className='text-xl font-semibold pl-3'>Purchased Summary</h2>
                        <hr className='w-full my-1' />
                        <div className='flex flex-col items-start justify-center gap-2 py-3 w-full h-full'>
                            <span className='text-neutral-400 text-xl pl-3'>Purchased</span>
                            <div className='flex gap-4 pl-3 w-full'>
                                <p className='font-bold text-2xl'>{lastDataPoint ? numeral(lastDataPoint.totalPurchased).format("$0.00a") : "0"}</p>
                                <div className={`${lastDataPoint.changePercentage >= 0 ? "text-green-400" : "text-red-500"} flex gap-1 items-center justify-center text-base`}>
                                    <span className=''>{lastDataPoint.changePercentage >= 0 ? <TrendingUp size={25} className='w-6 h-6' /> : <TrendingDown size={25} className='w-6 h-6' />}</span>
                                    <span>{Math.abs(lastDataPoint.changePercentage)}%</span>
                                </div>
                            </div>
                            {/* CHART */}
                            <ResponsiveContainer width="100%" height="100%" className="p-2">
                                <AreaChart
                                    data={purchaseSummary}
                                    margin={{ top: 0, right: 0, left: -50, bottom: 45 }}
                                >
                                    <XAxis dataKey="date" tick={false} axisLine={false} />
                                    <YAxis tickLine={false} tick={false} axisLine={false} />
                                    <Tooltip
                                        formatter={(value: number) => [
                                            `$${value.toLocaleString("en")}`,
                                        ]}
                                        labelFormatter={(label) => {
                                            const date = new Date(label);
                                            return date.toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                            });
                                        }}
                                    />
                                    <Area
                                        type="linear"
                                        dataKey="totalPurchased"
                                        stroke="#8884d8"
                                        fill="#8884d8"
                                        dot={true}
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default PurchaseHistoryCard