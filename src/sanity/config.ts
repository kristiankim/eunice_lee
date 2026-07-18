export const sanityProjectId =
  import.meta.env.PUBLIC_SANITY_PROJECT_ID?.trim() || 'cubrqt5i'
export const sanityDataset = import.meta.env.PUBLIC_SANITY_DATASET?.trim() || 'production'
export const sanityApiVersion = '2026-07-18'

export const isSanityConfigured = Boolean(sanityProjectId && sanityDataset)
