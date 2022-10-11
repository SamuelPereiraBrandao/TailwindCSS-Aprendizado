<template>
<div>
    <h1 class="text-sm pl-8 font-bold text-green-600">Pags:</h1>
    <nav >
        <router-link to="/pag1" class="hover:text-green-600">Pag 1</router-link> |
        <router-link to="/pag2" class="hover:text-green-600">Pag 2</router-link> |
        <router-link to="/pag3" class="hover:text-green-600">Pag 3</router-link> |
        <router-link to="/pag4" class="hover:text-green-600">Pag 4</router-link> |
      </nav>
      <router-view></router-view>
</div>
</template>

<script>
export default {
    name: 'HomeView',
    components: {
    }
}        
</script>
