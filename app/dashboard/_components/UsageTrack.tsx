"use client"
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db'
import { AIOutput, UserSubscription } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm'
import React, { useContext, useEffect, useState } from 'react'
import { HistoryRecord } from '../history/page'
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext'
import { UpdateCreditUsage } from '@/app/(context)/UpdateCreditUsage'
import { useRouter } from "next/navigation";

export function UsageTrack() {
    const router = useRouter();
    const { user } = useUser();
    const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
    const { userSubscription, setUserSubscription } = useContext(UserSubscriptionContext);
    const [maxWords, setMaxWords] = useState(10000);
    const { creditUsage, setCreditUsage } = useContext(UpdateCreditUsage);

    useEffect(() => {
        if (user) {
            GetData();
            IsUserSubscribed();
        }
    }, [user]); 

    useEffect(() => {
        if (user) {
            GetData();
        }
    }, [creditUsage, user]); 

    const GetData = async () => {
        if (!user || !user.primaryEmailAddress?.emailAddress) return;

        const userEmail = user.primaryEmailAddress.emailAddress;

        const result = await db.select().from(AIOutput)
            .where(eq(AIOutput.createdBy, userEmail));

        const formattedResult: HistoryRecord[] = result.map((item) => ({
            id: item.id,
            formData: item.FormData,
            aiResponse: item.aiResponse || "",
            templateSlug: item.templateSlug,
            createdBy: item.createdBy,
            createdAt: item.createdAt || "",
        }));

        GetTotalUsage(formattedResult);
    };

    const IsUserSubscribed = async () => {
        if (!user || !user.primaryEmailAddress?.emailAddress) return;

        const result = await db.select().from(UserSubscription)
            .where(eq(UserSubscription.email, user.primaryEmailAddress.emailAddress));

        if (result.length > 0) { 
            setUserSubscription(true);
            setMaxWords(100000);
        }
    };

    const GetTotalUsage = (result: HistoryRecord[]) => {
        let total = result.reduce((acc, item) => acc + (item.aiResponse?.length || 0), 0);
        console.log("Total Usage:", total);
        setTotalUsage(total);
    };

    return (
        <div className='m-5'>
            <div className='bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md p-3'>
                <h2 className='font-medium'>Credits</h2>
                <div className='h-2 bg-[#998159] w-full rounded-full mt-2'>
                    <div className='h-2 bg-white rounded-full' style={{ width: (totalUsage / maxWords) * 100 + "%" }}></div>
                </div>
                <h2 className='text-sm my-2'>{totalUsage}/{maxWords}</h2>
            </div>
            <Button variant="secondary" className="my-3 p-5 w-full text-primary" onClick={() => router.push("/dashboard/billing")}>
                Upgrade
            </Button>
        </div>
    );
}

export default UsageTrack;