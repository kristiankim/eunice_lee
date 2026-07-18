import { createClient } from '@sanity/client'
import {
  isSanityConfigured,
  sanityApiVersion,
  sanityDataset,
  sanityProjectId,
} from './config'

export const sanityClient = isSanityConfigured
  ? createClient({
      projectId: sanityProjectId,
      dataset: sanityDataset,
      apiVersion: sanityApiVersion,
      useCdn: false,
      perspective: 'published',
    })
  : null
