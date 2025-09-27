import React from 'react'
import { type PostModalProps } from '@/interfaces'

const PostModal: React.FC<PostModalProps> = ({ title, content, onClose, isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700">{content}</p>
        <form>
            <input type="text" placeholder="Your comment" className="w-full mt-4 p-2 border rounded" />
            <button type="submit" className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Submit</button>
        </form>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  )
}

export default PostModal