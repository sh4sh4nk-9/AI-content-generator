import { UserProfile } from '@clerk/nextjs'
import React from 'react'

function Profile() {
  return (
    <div className='flex items-center justify-center h-full p-20'>
        <UserProfile routing="hash"/>
    </div>
  )
}

export default Profile