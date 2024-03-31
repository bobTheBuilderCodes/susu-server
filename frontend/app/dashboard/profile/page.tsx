import AppButton from '@/components/ui/Button'
import Link from 'next/link'
import React from 'react'

const ProfileTab = () => {
  return (
    <div className='flex bg-gray-100 justify-center items-center flex-col h-screen'>
      <h1 className='text-2xl font-bold text-gray-700'>Manage Profile Here</h1>
      <p>Philomena Potinge 🚀 </p>

      <Link href={'/'} className='bg-black text-white mt-8 py-5 rounded-lg px-12'>Back to Home Page</Link>
    </div>
  )
}

export default ProfileTab