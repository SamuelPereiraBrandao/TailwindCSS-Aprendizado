<template>
<div>
    <nav>
        <router-link to="/pag1">Pag 1</router-link> |
        <router-link to="/pag2">Pag 2</router-link> |
        <router-link to="/pag3">Pag 3</router-link> |
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
