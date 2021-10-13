<template>
    <div class="favorite-list-wrapper">
        <div class="container p-8 mx-auto">
            <h1 class="font-semibold text-center mb-12 text-2xl">Listas de favoritos</h1>
            <div class="favorite-list-grid mx-auto grid gap-x-6 gap-y-14
                        md:grid-cols-2 
                        lg:grid-cols-3">
                <FavoriteCard
                    v-for="(favoriteData, index) in processedRealEstates" :key="index"
                    :favoriteData="favoriteData"
                />
                <GenericCard 
                    :title="'Crear una nueva lista'"
                />
            </div>
        </div>
    </div>
</template>


<script>
import FavoriteCard from '@/components/FavoriteCardComponent'
import GenericCard from '@/components/GerenicCardComponent'
import RealEstates from '@/assets/real_estates.json'

export default {
    name: 'FavoriteList',
    components: { 
        FavoriteCard,
        GenericCard
    },
    data() {
        return {
            RealEstates,
            finalRealStates: []
        }
    },
    computed: {
        favoriteLists() {
            return this.RealEstates.data
        },
        favListsAdditionalInfo() {
            return this.RealEstates.included
        },
        /** 
         * processedRealEstates()
         *  Compare the two data arrays and return an array with the filtered results
            @return {array}
        */
        processedRealEstates() {
            let result = { ...this.RealEstates.data }
            // The two arrays are nested with results to search for matches
            this.RealEstates.included.forEach((property) => {
                let propertyId = parseInt(property.id)

                this.RealEstates.data.forEach((list, index) => {
                    let arrayIds = list.attributes.real_estate_ids
                
                    if (arrayIds.includes(propertyId)) {
                        if (typeof result[index].properties === 'undefined') {
                            result[index].properties = []
                        }
                        /**
                         * If the data matches the id, add the property information in a new array
                         * @type {object}
                        */
                        result[index].properties.push({
                            id: property.id,
                            name: property.attributes.name,
                            gallery_urls: property.attributes.gallery_urls
                        })
                    }
                })
            })
  
            return result
        }
    }
}
</script>

<style scoped lang="scss">
    .favorite-list-grid {
        max-width: 950px;
    }
</style>