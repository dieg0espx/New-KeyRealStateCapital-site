"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useBlog } from "@/contexts/blog-context"
import { useAnimationControl } from "@/hooks/use-mobile"

interface BlogPreviewSectionProps {
  title?: string
  description?: string
  limit?: number
  featured?: boolean
}

export function BlogPreviewSection({
  title = "Latest Insights",
  description = "Stay informed with our latest market insights and investment strategies",
  limit = 3,
  featured = true
}: BlogPreviewSectionProps) {
  const { ref, isInView } = useScrollAnimation()
  const { getFeaturedPosts, getRecentPosts } = useBlog()
  const { disableOnMobile } = useAnimationControl()
  
  const posts = featured ? getFeaturedPosts(limit) : getRecentPosts(limit)

  const containerVariants = disableOnMobile({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.25
      }
    }
  })

  const cardVariants = disableOnMobile({
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  })

  const titleAnimationProps = disableOnMobile({
    initial: { opacity: 0, y: 30 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    transition: { duration: 0.6 }
  })

  const cardHoverVariants = disableOnMobile({
    y: -3,
    transition: { duration: 0.4 }
  })

  const imageHoverVariants = disableOnMobile({
    scale: 1.01,
    transition: { duration: 0.4 }
  })

  const arrowHoverVariants = disableOnMobile({
    x: 3,
    transition: { duration: 0.4 }
  })

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          ref={ref}
          {...titleAnimationProps}
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">{title}</h2>
          <p className="text-xl text-gray-600 font-light">
            {description}
          </p>
        </motion.div>
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              variants={cardVariants}
              whileHover={cardHoverVariants}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white overflow-hidden h-full">
                <motion.div 
                  className="aspect-video overflow-hidden"
                  whileHover={imageHoverVariants}
                >
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-sky-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link href={`/blog/${post.slug}`}>
                    <motion.div
                      className="inline-flex items-center text-sky-600 hover:text-sky-700 font-medium"
                      whileHover={arrowHoverVariants}
                    >
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.div>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 