<template>
  <div>
    <nav>
      <router-link to="/pag1" class="hover:text-green-600">Pag 1</router-link> |
      <router-link to="/pag2" class="hover:text-green-600">Pag 2</router-link> |
      <router-link to="/pag3" class="hover:text-green-600">Pag 3</router-link> |
      <router-link to="/pag4" class="hover:text-green-600">Pag 4</router-link> |
      <router-link to="/pag5" class="hover:text-green-600">Pag 5</router-link> |
      <router-link to="/pag6" class="hover:text-green-600">Pag 6</router-link> |
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>
