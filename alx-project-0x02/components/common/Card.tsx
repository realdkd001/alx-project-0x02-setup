import React from 'react'
import { type CardProps } from '../../interfaces'

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="card bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
        <h2 className="card-title text-2xl font-semibold mb-2 text-gray-800">{title}</h2>
        <p className="card-content text-gray-600">{content}</p>
    </div>
  )
}

export default Card