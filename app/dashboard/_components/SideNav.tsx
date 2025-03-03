"use client"
import React from 'react';
import Image from 'next/image';
import { History, CreditCard, User, HomeIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import UsageTrack from './UsageTrack';

function SideNav(){
  const MenuList = [
    {
      name: 'Home',
      icon: HomeIcon,
      path: '/dashboard'
    },
    {
      name: 'History',
      icon: History,
      path: '/dashboard/history'
    },
    {
      name: 'Billing',
      icon: CreditCard,
      path: '/dashboard/billing'
    },
    {
      name: 'Profile',
      icon: User,
      path: '/dashboard/profile'
    },
  ];

  const path = usePathname();

  return (
    <motion.div 
      className='h-screen p-5 bg-white shadow-sm border relative'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className='flex justify-center'>
        <motion.div 
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <Image src={'/logo.svg'} alt='logo' width={120} height={120}/> 
        </motion.div>
      </div>
      <hr className='my-10 border'/>


      <div className='mt-3'>
        {MenuList.map((menu) => (
          <Link key={menu.path} href={menu.path} className="block">
            <motion.div 
              className={`flex gap-2 mb-2 p-3 rounded-lg cursor-pointer items-center
                hover:bg-gradient-to-r from-blue-500 to-purple-500 hover:text-white transition-all duration-200
                ${path === menu.path ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' : 'text-gray-800'}
              `}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <menu.icon className='w-6 h-6'/>
              <motion.h2 
                className='text-lg'
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {menu.name}
              </motion.h2>
            </motion.div>
          </Link>
        ))}
      </div>
      
      <motion.div 
        className='absolute bottom-10 left-0 w-full'
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <UsageTrack />
      </motion.div>
    </motion.div>
  )
}

export default SideNav;