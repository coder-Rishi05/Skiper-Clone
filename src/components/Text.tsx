import React from 'react'

import Example from '@/components/Example'
import ShareButton from '@/components/ui/share-button'
import FlipLink from '@/components/ui/text-effect-flipper'
import WrapButton from '@/components/ui/wrap-button'
import { ArrowBigDownDash, Banana, Globe, Linkedin, LucideLinkedin, Twitch } from 'lucide-react'
import { TextScroll } from '@/components/ui/text-scroll'

const Text = () => {
  return (
     <>
     <div className='flex items-center justify-center h-screen' >
     <FlipLink href='https://x.com/guri_who' >LinkedIn </FlipLink>
     <FlipLink href='https://x.com/guri_who' >Insta </FlipLink>
    </div>
    <div className="h-screen border-t-2"></div>
      <div className="h-screen border-t-2">
        <TextScroll default_velocity={-10} text='Rishi' className='text-5xl font-bold' >
          {/* default_velocity={-10} : used to control direction and speed of the text. */}
        </TextScroll>
      </div>
      <div className="h-screen border-t-2"></div>
     </>
      
  )
}

export default Text
