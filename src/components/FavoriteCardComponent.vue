<template>
    <div class="favorite-card w-full mx-auto cursor-pointer" :title="listData.name">
        <div class="img-wrapper relative flex mb-5 rounded-lg bg-cover bg-no-repeat bg-center" :class="listClass">
            <div v-for="(galleryItem, index) in this.listGallery" 
                :key="index" 
                class="item-img w-full h-full overflow-hidden border-r border-white rounded-lg">
                <img :src="galleryItem.url" 
                        class="w-full h-full object-cover" 
                        :alt="galleryItem.name">
                <p v-if="index >= 2" 
                    class="absolute w-full h-full top-0 flex items-center justify-center text-white pl-3 font-semibold">
                    {{ labelMoreProjects(listData.quantity) }}
                </p>
            </div>
        </div>
        <p class="font-semibold text-lg mb-2">{{ listData.name }}</p>
        <p class="text-sm text-lh-jungle-gren-gray">{{ this.labelSavedProperties }}</p>
    </div>
</template>

<script>
export default {
    name: 'FavoriteCard',
    props: ['favoriteData'],
    methods: {
        labelMoreProjects(quantity) {
            if (isNaN(quantity)) throw new Error('Please provide a valid quantity')
            return `+${quantity - 2}`
        }
    },
    computed: {
        /** 
         * listData()
         * Filter the relevant information to display in the component
            @return {object}
        */
        listData() {
            let {
                attributes: {
                    name,
                    real_estate_ids
                },
                properties
            } = this.favoriteData

            return {
                name,
                quantity: real_estate_ids.length,
                properties
            }
        },
        /** 
         * listGallery()
         * Filter the property name and an image from your gallery
            @return {array}
        */
        listGallery() {
            let result = []
            for (let i = 0; i < this.listData.properties.length; i++) {
                if (i >= 3) break
                const property = this.listData.properties[i];
                if (typeof property.gallery_urls[0] !== 'undefined') {
                    result.push({
                        name: property.name, 
                        url: property.gallery_urls[0]
                    })
                }
            }
            return result
        },
        labelSavedProperties() {
            return this.listData.quantity === 1 ? 
                    `${this.listData.quantity} propiedad guardada` 
                    : `${this.listData.quantity} propiedades guardadas`
        },
        listClass() {
            let listClass = ''
            if (this.listData.quantity >= 2 && this.listData.quantity < 3) {
                listClass = 'img-wrapper-2'
            } else if (this.listData.quantity >= 3) {
                listClass = 'img-wrapper-3'
            } else if (this.listData.quantity === 0) {
                listClass = 'default-bg'
            }
            return listClass
        }
    }
}
</script>

<style scoped lang="scss">
    .favorite-card {
        max-width: 292px;

        .img-wrapper {
            .item-img { position: relative } 
            height: 196px 
        }
        .default-bg {
            background-image: url('~@/assets/img/empty-favorites.svg');
        }

        .img-wrapper-2 {
            .item-img {
                width: 50%;

                &:nth-child(1) { z-index: 2 }
                &:nth-child(2) {
                    width: 70%;
                    position: absolute;
                    right: 0;
                    z-index: 1;
                }
            }
        }

        .img-wrapper-3 {
            .item-img {
                &:nth-child(1) { z-index: 2 }
                &:nth-child(2) { 
                    right: 20%; 
                    z-index: 1;
                }
                &:nth-child(3) {
                    width: 25%;
                    position: absolute;
                    right: 0;
                    p { background: rgba(1, 45, 38, 0.7) }
                }
            }
        }
    }
</style>