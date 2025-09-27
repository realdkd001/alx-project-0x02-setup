import Header from '@/components/layout/Header'
import React from 'react'
import PostCard from '@/components/common/PostCard'
import { type PostProps} from '@/interfaces'

const Posts: React.FC<{ posts: PostProps[] }> = ({ posts }) => {
  return (
    <div>
        <Header />
        {posts.map(post => (
          <PostCard key={post.userId} title={post.title} content={post.body} userId={post.userId} />
        ))}
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch("http://jsonplaceholder.typicode.com/posts")
  const posts = await res.json()

  return {
    props: { posts },
  }
}

export default Posts