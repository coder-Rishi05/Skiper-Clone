"use client"

import Example from '@/components/Example'
import ShareButton from '@/components/ui/share-button'
import FlipLink from '@/components/ui/text-effect-flipper'
import WrapButton from '@/components/ui/wrap-button'
import { ArrowBigDownDash, Banana, Globe, Linkedin, LucideLinkedin, Twitch } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div className='flex items-center justify-center h-screen' >
     <FlipLink href='https://x.com/guri_who' >LinkedIn </FlipLink>
     <FlipLink href='https://x.com/guri_who' >Insta </FlipLink>
           
           
    </div>
  )
}

export default page;