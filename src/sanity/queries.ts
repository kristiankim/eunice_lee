import { defineQuery } from 'groq'
import { sanityClient } from './client'

export interface BlogPostSummary {
  _id: string
  title: string
  slug: string
  excerpt?: string
  publishedAt: string
  mainImage?: {
    alt?: string
    asset?: {
      url?: string
      metadata?: {
        lqip?: string
        dimensions?: {
          width: number
          height: number
          aspectRatio: number
        }
      }
    }
  }
  author?: {
    name?: string
  }
  categories?: Array<{
    _id: string
    title: string
  }>
}

export interface BlogPost extends BlogPostSummary {
  body?: Array<Record<string, unknown>>
  seo?: {
    metaTitle?: string
    metaDescription?: string
  }
}

const postProjection = `{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  mainImage {
    alt,
    asset->{
      url,
      metadata {
        lqip,
        dimensions
      }
    }
  },
  author->{name},
  categories[]->{_id, title}
}`

export const BLOG_POSTS_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current) && defined(publishedAt)]
  | order(publishedAt desc) ${postProjection}
`)

export const BLOG_POST_PATHS_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current) && defined(publishedAt)]
  | order(publishedAt desc) {
    ${postProjection.slice(1, -1)},
    body,
    seo
  }
`)

export async function getBlogPosts(): Promise<BlogPostSummary[]> {
  if (!sanityClient) return []
  return sanityClient.fetch(BLOG_POSTS_QUERY)
}

export async function getBlogPostPaths(): Promise<BlogPost[]> {
  if (!sanityClient) return []
  return sanityClient.fetch(BLOG_POST_PATHS_QUERY)
}
