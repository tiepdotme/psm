<template>
  <saber-link class="block Block-lg-b text-center Nav-link Meta" to="/">
    <!-- <div class="container container--text">
      <hr class="border-t border-text pt-4">
      <div class="">
        <p class="s-2h Link">
          Ps.
          <template v-if="$route.path !== '/about'">
            bạn đang tới thăm <saber-link to="/about">Tiếp adsense website.</saber-link> He
          </template>
          <template v-else>
            Callum
          </template>
          also writes a bi-monthly email letter about design, UX and the web through the lens of people and attention.
          <saber-link to="/about">Here's the archives.</saber-link>
          Since you made it this far, you should probably sign up:
        </p>
        <FormNewsletter />
      </div>
    </div> -->
    <span class="inline-block mr-1 mb-px">&#8592;</span>
    <!-- <span style="text-transform:initial">Tiếp Adsense</span> -->
    <span style="text-transform:initial">Kdo</span>
  </saber-link>
</template>

<script>
import FormNewsletter from "./FormNewsletter";

export default {
  components: {
    FormNewsletter,
  },
};
</script>

<style lang="postcss" scoped>
/* .Card {
  @apply overflow-hidden;
  @apply border border-text rounded-lg;
} */
</style>
