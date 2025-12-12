import SignInFormClient from '@/modules/auth/components/sign-in-form-client'
import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <>
    <img src="/login.svg" width="300" height="300" />
    <SignInFormClient/>
    </>
  )
}

export default Page