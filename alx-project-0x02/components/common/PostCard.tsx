import React from 'react'
import { type PostCardProps } from '@/interfaces'

const PostCard: React.FC<PostCardProps> = ({ title, content, userId }) => {
  return (
    <div className="border p-4 rounded shadow-sm hover:shadow-md transition-shadow duration-300">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{content}</p>
      <p className="text-sm text-gray-500">User ID: {userId}</p>
    </div>
  )
}

export default PostCard