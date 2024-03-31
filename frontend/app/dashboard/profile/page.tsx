import IncompleteProfileBanner from '@/components/feature/IncompleteProfileBanner'
import Profile from '@/components/feature/MobileProfileBanner'
import ProfileAccordion from '@/components/feature/ProfileAccordion'
import AppButton from '@/components/ui/Button'
import Link from 'next/link'
import React from 'react'

const ProfileTab = () => {
  return (
    <div className='flex bg-gray-100 justify-start items-center flex-col h-screen'>
     
      <Profile name="Philomena Potinge" email="johndoe@example.com" imageUrl="/path/to/image.jpg" />
      <IncompleteProfileBanner body='Your profile is not complete. Update your profile so you will be trusted by other people' />
      <ProfileAccordion title='Personal Info'  body='Manage your personal information'/>
      <ProfileAccordion title='My Transactions'  body='Keep track of all transactions here'/>
      <ProfileAccordion title='My Rewards'  body='All rewards are kept safe here'/>
      <Link className='mt-6 bg-red-50 text-red-500 p-3 px-12 rounded-lg font-semibold' href={'/'}>Log out</Link>
    </div>
  )
}

export default ProfileTab