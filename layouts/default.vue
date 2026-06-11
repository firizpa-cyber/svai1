<template>
  <div class="min-h-screen flex flex-col bg-white text-[oklch(0.18_0.02_40)]">
    <SiteHeader />
    <main class="flex-1">
      <slot />
    </main>
    <SiteFooter />
    <!-- Toast notifications -->
    <ToastContainer />
    <!-- Floating lead button -->
    <LeadButton />
  </div>
</template>

<script setup lang="ts">
// Inject Schema.org LocalBusiness structured data on every page
useLocalBusinessSchema()
</script>
