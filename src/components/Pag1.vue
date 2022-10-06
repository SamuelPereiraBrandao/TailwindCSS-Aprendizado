<template>
  <div
    class="flex items-center justify-center bg-green-600 md:bg-red-600 xl:bg-blue-600 rounded transition-all"
  >
    <div class="py-4">
      <H1 class="md:hidden text-white xl:hidden transition-all">NORMAL</H1>
      <H1 class="hidden md:block xl:hidden md:text-white transition-all">NOTEBOOK ETABLET</H1>
      <H1 class="hidden xl:block xl:text-white transition-all">COMPUTADOR</H1>
    </div>
  </div>
</template>
<script>
export default {
  name: "Pag1Vue",
};
</script>
<style>
*::selection {
  background: rgb(0, 34, 128);
  color: rgb(0, 238, 255);
}
</style>
