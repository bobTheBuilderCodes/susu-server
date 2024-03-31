import Notification from '@/components/shared/Notification'
import AppButton from '@/components/ui/Button'
import Link from 'next/link'
import React from 'react'

const NotificationsTab = () => {
  return (
    <div className='flex bg-gray-100 justify-start items-center flex-col pb-24'>

      <Notification title="New Message" body="You have received a new message from Jane Doe." />
      <Notification title="New Message" body="You have received a new message from Jane Doe." />
      <Notification title="New Message" body="You have received a new message from Jane Doe." />
      <Notification title="New Message" body="You have received a new message from Jane Doe." />
      <Notification title="New Message" body="You have received a new message from Jane Doe." />
      <Notification title="New Message" body="You have received a new message from Jane Doe." />
      <Notification title="New Message" body="You have received a new message from Jane Doe." />
      <Notification title="New Message" body="You have received a new message from Jane Doe." />

    </div>
  )
}

export default NotificationsTab