"use client"
import React, { useState } from 'react'
import SideNav from './_components/SideNav';
import Header from './_components/Header';
import { TotalUsageContext } from '../(context)/TotalUsageContext';
import { UserSubscriptionContext } from '../(context)/UserSubscriptionContext';
import { UpdateCreditUsage } from '../(context)/UpdateCreditUsage';

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {

    const[totalUsage,setTotalUsage]=useState<Number>(0);
    const[userSubscription, setUserSubscription]=useState<boolean>(false);
    const[creditUsage, setCreditUsage]=useState<any>()
  return (
    <UserSubscriptionContext.Provider value={{userSubscription, setUserSubscription}}>
    <TotalUsageContext.Provider value={{totalUsage,setTotalUsage}}>
      <UpdateCreditUsage.Provider value={{creditUsage, setCreditUsage}}>
    <div className='bg-slate-100 h-screen'>
        <div className='md:w-64 hidden md:block fixed'>
            <SideNav/>
        </div>
        <div className='md:ml-64'>
          <Header/>
          {children}
        </div>
    </div>
    </UpdateCreditUsage.Provider>
  </TotalUsageContext.Provider>
  </UserSubscriptionContext.Provider>
  )
}

export default layout