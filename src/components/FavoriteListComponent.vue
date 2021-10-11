<template>
    <div class="favorite-list-wrapper">
        <div class="container p-8">
            <h1 class="font-semibold text-center mb-12 text-2xl">Listas de favoritos</h1>
            <div class="favorite-list-grid">
                <FavoriteCard />
            </div>
        </div>
    </div>
</template>


<script>
import FavoriteCard from '@/components/FavoriteCardComponent'

export default {
    name: 'FavoriteList',
    components: { FavoriteCard },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>