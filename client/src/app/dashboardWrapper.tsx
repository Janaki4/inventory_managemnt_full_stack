"use client";
import React, { useEffect } from 'react'
import Navbar from './(components)/Navbar'
import Sidebar from './(components)/Sidebar'
import StoreProvider, { useAppSelector } from './redux'

type Props = {
    children: React.ReactNode
}

const DashboardLayout = (props: Props) => {
    const isDarkMode = useAppSelector((state)=>state.global.isDarkMode)
    console.log(isDarkMode);
    
    useEffect(()=>{
        if(isDarkMode){
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.add("light")
        }
    },[])

    return (
        <div className={`h-screen w-full flex bg-gray-200 text-gray-800 ${isDarkMode ? "dark": "light"} overflow-y-scroll`}>
            <Sidebar />
            <div className='flex flex-col w-screen h-screen px-10 py-9'>
                <Navbar />
                {props.children}
            </div>
        </div>
    )
}

const DashboardWrapper = (props: Props) => {
    return (
        <StoreProvider>
            <DashboardLayout>
                {props.children}
            </DashboardLayout>
        </StoreProvider>
    )
}

export default DashboardWrapper