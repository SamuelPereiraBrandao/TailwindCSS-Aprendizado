<template>
<div>
    <nav >
        <router-link to="/pag1" class="hover:text-green-500">Pag 1</router-link> |
        <router-link to="/pag2" class="hover:text-green-500">Pag 2</router-link> |
        <router-link to="/pag3" class="hover:text-green-500">Pag 3</router-link> |
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
