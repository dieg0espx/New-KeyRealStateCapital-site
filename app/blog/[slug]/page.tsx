"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, User, Tag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { useBlog } from "@/contexts/blog-context"
import { useRouter } from "next/navigation"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { getPostBySlug, getRecentPosts } = useBlog()
  const router = useRouter()
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    notFound()
  }

  const relatedPosts = getRecentPosts(3).filter(p => p.id !== post.id)

  // Handle navigation with scroll position preservation
  const handleRelatedPostClick = (e: React.MouseEvent, slug: string) => {
    e.preventDefault()
    e.stopPropagation()
    
    // Store current scroll position
    const currentScrollY = window.scrollY
    
    // Navigate to the new post
    router.push(`/blog/${slug}`)
    
    // Restore scroll position after navigation
    setTimeout(() => {
      window.scrollTo(0, currentScrollY)
    }, 100)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  }

  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="max-w-5xl mx-auto px-2 sm:px-6 lg:px-8 py-16">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Button 
            variant="ghost" 
            className="mb-8 text-light-green hover:text-perry font-light"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              
              // Store current scroll position
              const currentScrollY = window.scrollY
              
              // Navigate back to blog
              router.push('/blog')
              
              // Restore scroll position after navigation
              setTimeout(() => {
                window.scrollTo(0, currentScrollY)
              }, 100)
            }}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </motion.div>

        {/* Article Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <Badge variant="secondary" className="bg-light-green/10 text-light-green mb-4">
              {post.category}
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-6">
              {post.title}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 font-light mb-8">
              {post.excerpt}
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {post.date}
              </div>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div 
            variants={itemVariants}
            className="mb-12"
          >
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={800}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Article Content */}
          <motion.div 
            variants={itemVariants}
            className="mb-12"
          >
            <div 
              className="text-gray-700 font-light leading-relaxed text-base sm:text-lg max-w-none w-full"
              dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>') }}
            >
            </div>
          </motion.div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <motion.div 
              variants={itemVariants}
              className="mb-12"
            >
              <div className="flex items-center mb-4">
                <Tag className="h-4 w-4 mr-2 text-gray-500" />
                <span className="text-sm text-gray-500">Tags:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-xs border-light-green text-light-green hover:bg-light-green/10">
                    {tag}
                  </Badge>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-16 pt-12 border-t border-gray-200"
          >
            <h2 className="text-2xl font-light text-gray-900 mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <motion.div
                  key={relatedPost.id}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.4 }}
                >
                  <div 
                    className="group cursor-pointer"
                    onClick={(e) => handleRelatedPostClick(e, relatedPost.slug)}
                  >
                    <div className="aspect-video overflow-hidden rounded-lg mb-4">
                      <Image
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        width={300}
                        height={200}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-gray-600 font-light line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
} 