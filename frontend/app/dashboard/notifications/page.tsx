import AppButton from '@/components/ui/Button'
import Link from 'next/link'
import React from 'react'

const NotificationsTab = () => {
  return (
    <div className='flex bg-gray-100 justify-center items-center flex-col h-screen'>
      <h1 className='text-2xl font-bold text-gray-700'>No Notifications</h1>
      <p>For now, let's partyyy 🚀 </p>

      <Link href={'/'} className='bg-black text-white mt-8 py-5 rounded-lg px-12'>Back to Home Page</Link>
    </div>
  )
}

export default NotificationsTab