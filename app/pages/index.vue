<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const { locale, localeProperties } = useI18n()

const { data: page } = await useAsyncData(
    `page-index-${locale.value}`,
    async () => {
      const collection = `content_${locale.value}` as keyof Collections
      let content = await queryCollection(collection).path('/').first()

      // Fallback về locale mặc định
      if (!content && locale.value !== 'en') {
        content = await queryCollection('content_en' as keyof Collections).path('/').first()
      }

      return content
    },
    { watch: [locale] }
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta(page.value.seo)
</script>

<template>
  <ContentRenderer
      v-if="page"
      :dir="localeProperties?.dir ?? 'ltr'"
      :value="page"
  />
</template>