import Notification from '@/components/shared/Notification'
import AppButton from '@/components/ui/Button'
import Link from 'next/link'
import React from 'react'

const NotificationsTab = () => {
  return (
    <div className='flex bg-gray-100 justify-start items-center flex-col h-screen'>

      <Notification title="New Message" body="You have received a new message from Jane Doe." />
      <Notification title="New Message" body="You have received a new message from Jane Doe." />
      <Notification title="New Message" body="You have received a new message from Jane Doe." />
      <Notification title="New Message" body="You have received a new message from Jane Doe." />
      <Notification title="New Message" body="You have received a new message from Jane Doe." />
      <Notification title="New Message" body="You have received a new message from Jane Doe." />
      <Notification title="New Message" body="You have received a new message from Jane Doe." />
      <Notification title="New Message" body="You have received a new message from Jane Doe." />

      <Link href={'/'} className='bg-black text-white mt-8 py-5 rounded-lg px-12'>Back to Home Page</Link>
    </div>
  )
}

export default NotificationsTab