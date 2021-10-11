<template>
    <div>
        <div class="favorite-card">
            <div class="img-wrapper mb-5 rounded-lg bg-cover bg-no-repeat bg-center">

            </div>
            <p class="font-semibold text-lg mb-2">Mis favoritos</p>
            <p class="text-sm color-lh-jungle-gren-gray">0 propiedades guardadas</p>
        </div>
        <div class="favorite-card">
            <div class="img-wrapper relative flex mb-5 rounded-lg bg-cover bg-no-repeat bg-center">
                <div class="item-img rounded-lg"></div>
                <div class="item-img rounded-lg"></div>
            </div>
            <p class="font-semibold text-lg mb-2">Mis favoritos</p>
            <p class="text-sm color-lh-jungle-gren-gray">0 propiedades guardadas</p>
        </div>

        <div class="favorite-card">
            <div class="img-wrapper img-wrapper-3 relative flex mb-5 rounded-lg bg-cover bg-no-repeat bg-center">
                <div class="item-img rounded-lg"></div>
                <div class="item-img rounded-lg"></div>
                <div class="item-img rounded-lg font-semibold text-white">+20</div>
            </div>
            <p class="font-semibold text-lg mb-2">Mis favoritos</p>
            <p class="text-sm color-lh-jungle-gren-gray">0 propiedades guardadas</p>
        </div>
    </div>
</template>

<script>
import emptyImg from '@/assets/img/empty-favorites.svg' 

export default {
    name: 'FavoriteCard',
    data() {
        return {
            ss: emptyImg
        }
    }
}
</script>

<style scoped lang="scss">
    .favorite-card {
        max-width: 292px;
        
        .img-wrapper {
            background-image: url('~@/assets/img/empty-favorites.svg');
            height: 196px;
        }
    }

    .favorite-card {
        .img-wrapper {
            .item-img {
                width: 50%;
                height: 100%;
                background-image: url('~@/assets/img/empty-favorites.svg');

                &:nth-child(1) { z-index: 2; }
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
                &:nth-child(2) { right: 20%; }
                &:nth-child(3) {
                    width: 25%;
                    position: absolute;
                    background: rgba(1, 45, 38, 0.7);
                    right: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding-left: 10px;
                }
            }
        }
    }
</style>