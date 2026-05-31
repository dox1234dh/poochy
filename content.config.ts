import { defineContentConfig, defineCollection, property } from '@nuxt/content'
import { z } from 'zod'

const commonSchema = z.object({
  // validate
  title: z.string(),
  description: z.string().optional(),
  updatedAt: z.date(),
  draft: z.boolean().optional(),
  tags: z.array(z.string()).optional(),
  hero: z.object({
    image: property(z.string()).editor({ input: 'media' }),
    caption: z.string().optional()
  }),
  // component
  // Reuse props from a dependency (path is resolved like an import)
  button: property(z.object({})).inherit('@nuxt/ui/components/Button.vue'),
})

export default defineContentConfig({
  collections: {
    // English content collection
    content_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/**',
        prefix: '',
      },
      schema: commonSchema,
    }),
    // French content collection
    content_fr: defineCollection({
      type: 'page',
      source: {
        include: 'fr/**',
        prefix: '',
      },
      schema: commonSchema,
    }),
    // Farsi content collection
    content_fa: defineCollection({
      type: 'page',
      source: {
        include: 'fa/**',
        prefix: '',
      },
      schema: commonSchema,
    }),
  },
})
