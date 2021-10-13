<template>
    <div class="generic-card-wrapper cursor-pointer mx-auto w-full" :title="title">
        <div class="generic-card relative mb-5 w-full flex items-center justify-center rounded-lg">
            <img src="@/assets/img/icon-add.svg" alt="Agregar">
        </div>
        <p class="font-semibold text-lg mb-2 text-center text-lh-sky-blue">{{ title }}</p>
    </div>
</template>

<script>
export default {
    name: 'GenericCard',
    props: ['title']
}
</script>


<style scoped lang="scss">
    .generic-card-wrapper {
        max-width: 292px;
    }
    .generic-card {
        height: 196px;
        background-color: rgba(235, 237, 255, 0.7);
    }
</style>