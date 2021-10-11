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
  }
}
</script>
