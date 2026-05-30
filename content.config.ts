import { defineContentConfig, defineCollection, property } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**',
      schema: z.object({
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
        button: property(z.object({})).inherit('@nuxt/ui/components/Button.vue')
      })
    }),
  },
})
