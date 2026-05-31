<script setup>
const { setLocale, locales, locale } = useI18n()
</script>

<template>
  <UApp>
    <UContainer>
      <div class="py-4">
        <UFieldGroup>
          <UButton
              v-for="_locale of locales"
              :key="_locale.code"
              :label="`${_locale.name} (${_locale.code})`"
              color="neutral"
              :variant="_locale.code === locale ? 'solid' : 'outline'"
              class="px-4"
              @click="setLocale(_locale.code)"
          />
        </UFieldGroup>
      </div>
      <NuxtLoadingIndicator color="#FFF" />
      <NuxtPage />
    </UContainer>
  </UApp>
</template>