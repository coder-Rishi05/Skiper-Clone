"use client"

import ShareButton from '@/components/ui/share-button'
import WrapButton from '@/components/ui/wrap-button'
import { ArrowBigDownDash, Banana, Globe, Linkedin, Twitch } from 'lucide-react'
import React from 'react'

const Example = () => {
  return (
    <div>
      <WrapButton className="mt-10" href="/docs/components/card-carousel" >
            <Banana className="animate-spin " />
            Get started
            <ArrowBigDownDash className=" animate-bounce "  />
        </WrapButton>

        <ShareButton links={[{icon:Globe}, {icon:Linkedin}, {icon:Twitch}]} >
          Share
        </ShareButton>
        {/* <SharedArrayBuffer /> */}

        {/* </SharedArrayBuffer> */}
    </div>
  )
}

export default Example;