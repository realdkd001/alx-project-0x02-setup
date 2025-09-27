import React from 'react'
import { type ButtonProps } from '@/interfaces'

const Button: React.FC<ButtonProps> = ({ size, shape }) => {
    const sizeClasses = {
        'small': 'px-2 py-1 text-sm',
        'medium': 'px-4 py-2 text-md',
        'large': 'px-6 py-3 text-lg',
    }

    const shapeClasses = {
        'rounded-sm': 'rounded-sm',
        'rounded-md': 'rounded-md',
        'rounded-full': 'rounded-full',
    }

  return (
    <button className={`border ${sizeClasses[size]} ${shapeClasses[shape]}`}>Button</button>
  )
}

export default Button