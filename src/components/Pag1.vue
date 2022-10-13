<template>
  <div
    class="h-screen flex items-center justify-center bg-green-600 md:bg-red-600 xl:bg-blue-600 rounded transition-all"
  >
    <div class="">
      <H1 class="md:hidden text-white xl:hidden transition-all">CELULAR</H1>
      <H1 class="hidden md:block xl:hidden md:text-white transition-all"
        >NOTEBOOK E TABLET</H1
      >
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
  background: #d1d5db;
  color: #42b983;
}
</style>
