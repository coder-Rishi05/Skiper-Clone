import React from 'react'
import ThemeToggleButton from './ui/theme-toggle-button'

const Themes = () => {
  return (
    <div>
        <ThemeToggleButton variant='gif' url='https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHpod21rM2htd3h0YjJrYmxldm5uYjM4Y3NyZmFpbnNrdW55Y282ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/YiHfUCv6h3GLKkqyKw/giphy.gif' />
        <ThemeToggleButton variant="circle" start='center' />
    </div>
  )
}

export default Themes