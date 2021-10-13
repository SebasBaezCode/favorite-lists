<template>
  <div class="home">
      <FavoriteList />
  </div>
</template>

<script>
// @ is an alias to /src
import FavoriteList from '@/components/FavoriteListComponent'

export default {
  name: 'Home',
  components: {
    FavoriteList
  },
  metaInfo: {
    title: 'Lista de favoritos - Prueba técnica',
    description: 'Prueba técnica - Maquetacion para La Haus'
  }
}
</script>
