<template>
  <div id="app">
      <NavigationBar />
    <router-view/>
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBarComponent'
export default {
    components: {
      NavigationBar
    }
}
</script>
