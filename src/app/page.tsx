import WrapButton from '@/components/ui/wrap-button'
import { ArrowBigDownDash, Globe } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div>
      <WrapButton className="mt-10" href="/docs/components/card-carousel" >
            <Globe className="animate-spin " />
            Get started
            <ArrowBigDownDash className=" animate-bounce "  />
        </WrapButton>
    </div>
  )
}

export default page