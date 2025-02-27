"use client";
import { Menu, HeartIcon, LucideIcon, DatabaseIcon, Layout, Clipboard, Archive, User, Settings, CircleArrowDownIcon, CircleDollarSign } from 'lucide-react';
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../redux';
import { setIsSidebarCollapsed } from '@/src/state';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface SidebarLinkType {
    href: string,
    icon: LucideIcon,
    label: string,
    isCollapsed: boolean
}

const SidebarLink = ({ href, icon: Icon, isCollapsed, label }: SidebarLinkType) => {
    const pathname = usePathname()
    const isActive = pathname === href || (pathname == "/" && href == "/dashboard")
    return <Link href={href} className={`flex items-center justify-start gap-4 py-3 px-8 md:px-10 hover:bg-blue-100/70 ${(isActive && !isCollapsed) && "bg-blue-200/70"} transition-colors duration-300 ${isCollapsed && "justify-center"}`}>
        <div className={`${isCollapsed ? "bg-none" : "flex bg-none"} gap-3 items-center`}>
            <Icon />
        </div>
        <div className={`${isCollapsed ? "hidden" : "flex"} gap-3 items-center`}>
            {label}
        </div>
    </Link>
}

const Sidebar = () => {
    const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed)
    const appDispatch = useAppDispatch()

    const toggelSidebar = () => {
        appDispatch(setIsSidebarCollapsed(!isSidebarCollapsed))
    }

    const sidebarclassNames = `flex flex-col ${isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"} bg-white overflow-hidden transition-all duration-300 items-center justify-between h-full`

    return (
        <div className={sidebarclassNames}>
            <div className={`flex flex-col items-center justify-start gap-y-10 max-h-full`}>
                <div className={`flex text-lg gap-3 items-center justify-between md:justify-start mt-14 px-8 md:px-6 ${ isSidebarCollapsed && "hidden md:block" }`}>
                    <div className={``}><HeartIcon /></div>
                    <div className={`font-extrabold ${isSidebarCollapsed ? "hidden" : "block"}`}>JRSTOCK</div>
                    <div className={`cursor-pointer ${isSidebarCollapsed ? "hidden" : "block"}`} onClick={toggelSidebar}>
                        <Menu size={16} />
                    </div>
                </div>
                {/* LINKS */}
                <div className={`flex flex-col gap-4 ${isSidebarCollapsed && "hidden md:flex"}`}>
                    <SidebarLink href='/dashboard' icon={Layout} isCollapsed={isSidebarCollapsed} label='Dashboard' />
                    <SidebarLink href='/inventory' icon={Archive} isCollapsed={isSidebarCollapsed} label='Inventory' />
                    <SidebarLink href='/clipboard' icon={Clipboard} isCollapsed={isSidebarCollapsed} label='Clipboard' />
                    <SidebarLink href='/users' icon={User} isCollapsed={isSidebarCollapsed} label='Users' />
                    <SidebarLink href='/settings' icon={Settings} isCollapsed={isSidebarCollapsed} label='Settings' />
                    <SidebarLink href='/expenses' icon={CircleDollarSign} isCollapsed={isSidebarCollapsed} label='Expenses' />
                </div>
            </div>
            {/* FOOTER */}
            <div className='mb-6'>
                <p className={`font-normal text-sm ${isSidebarCollapsed ? "hidden" : "block"}`}>&copy; 2025 JRSTOCK</p>
            </div>
        </div>
    )
}

export default Sidebar;