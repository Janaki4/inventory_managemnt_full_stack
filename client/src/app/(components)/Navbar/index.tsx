"use client";
import { Bell, Menu, Moon, Settings, Sun } from 'lucide-react'
import Link from 'next/link';
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../redux';
import { setIsDarkMode, setIsSidebarCollapsed } from '@/src/state';

type Props = {}

const Navbar = (props: Props) => {
    const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed)
    const isDarkMode = useAppSelector((state) => state.global.isDarkMode)
    const appDispatch = useAppDispatch()

    const toggelSidebar = () => {
        appDispatch(setIsSidebarCollapsed(!isSidebarCollapsed))
    }

    const toggleTheme = () => {
        appDispatch(setIsDarkMode(!isDarkMode))
    }

    const sidebarclassNames = `flex flex-col ${isSidebarCollapsed ? "w-0 md:w-16" : " w-72 md:w-64"} bg-white h-full overflow-hidde transition-all duration-300`

    return (
        <div className='w-full py-3'>
            <div className='flex items-center justify-between w-full'>
                <div className='flex items-center justify-between gap-x-4'>
                    <div>
                        <button className='' onClick={toggelSidebar}>
                            <Menu />
                        </button>
                    </div>
                    <div className='relative'>
                        <div>
                            <input
                                type='search'
                                placeholder='Search products & groups'
                                className='pl-10 pr-4 py-2 w-50 md:w-60 border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500' />
                        </div>
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Bell className="text-gray-500" size={20} />
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-end gap-4 w-full ml-4'>
                    <div className='hidden md:flex items-center justify-end gap-8 w-full'>
                        <div className=' cursor-pointer'>
                            {
                                isDarkMode ?
                                    <Sun size={24} onClick={toggleTheme} />
                                    :
                                    <Moon size={24} onClick={toggleTheme} />

                            }
                        </div>
                        <div className='relative'>
                            <Bell className='cursor-pointer text-gray-500' size={24} />
                            <span className='absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 bg-red-400 rounded-full'>3</span>
                        </div>
                        <hr className='w-0 h-7 border-[1.5px] border-solid border-neutral-400 ' />
                        <div className='flex items-center text-neutral-600 gap-4'>
                            <div>image</div>
                            <div>J4</div>
                        </div>
                    </div>
                    <Link href={'/setting'} className='cursor-pointer'>
                        <Settings size={24} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar