<template>
    <header id="ls-main-header" class="border-b">
        <nav id="lh-main-navigation-bar" class="container m-auto lg:flex lg:justify-between lg:items-center lg:pt-1 lg:pb-1">
            <div class="logo-wrapper p-3 pl-8 pr-8
                        lg:p-0">
                <router-link to="/">
                    <img src="@/assets/img/logo.svg" title="La Haus" class="hidden" alt="La Haus logo">
                    <div class="flex">
                        <button type="button" class="mr-2 lg:hidden" @click="toggleMobileMenu()">
                            <img src="@/assets/img/bars.svg" alt="La Haus open menu">
                        </button>
                        <img src="@/assets/img/logo-mobile.svg" title="La Haus" alt="La Haus logo">
                    </div>
                </router-link>
            </div>
            <div class="content-wrapper bg-white w-10/12 fixed top-0 bottom-0 -left-full transition-left transition-background-color duration-300
                       lg:relative lg:w-auto lg:left-0 lg:transition-none" 
                    :class="{ 'show-mobile-menu': showMobileMenu }">
                <div class="mobile-top-menu lg:hidden border-b p-3 pl-8 pr-8 flex">
                    <button type="button" class="mr-2" @click="toggleMobileMenu()">
                        <img src="@/assets/img/bars.svg" title="La Haus" alt="La Haus close menu">
                    </button>
                    <router-link to="/">
                        <img src="@/assets/img/logo-mobile.svg" title="La Haus" alt="La Haus logo">
                    </router-link>
                </div>
                <div class="menus-wrapper flex flex-col-reverse
                            lg:flex-row lg:items-center">
                    <ul class="menu py-4 px-4 
                              lg:flex lg:p-0">
                        <li>Cundinamarca</li>
                        <li>Antioquia</li>
                        <li>Recursos</li>
                    </ul>
                    <ul class="menu menu-profile border-b py-4 px-4
                              lg:border-b-0 lg:p-0">
                        <span class="cursor-pointer hidden lg:block">Mi perfil</span>
                        <ul class="lg:hidden">
                            <li>Para ti</li>
                            <li>Guardados</li>
                            <li>Mi perfil</li>
                            <li>Cerrar sesión</li>
                        </ul>
                    </ul>   
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped lang="scss">

</style>

<script>
export default {
    name: 'NavigationBar',
    data() {
        return {
            showMobileMenu: false
        }
    },
    methods: {
        toggleMobileMenu() { 
            this.showMobileMenu = !this.showMobileMenu
        }
    }
}
</script>

<style scoped lang="scss">
    .content-wrapper {
        &:before {
            content: '';
            width: 20%;
            position: absolute;
            top: 0;
            bottom: 0;
            right: -200%;
            transition: background-color 0.3s;
            transition-delay: 0.3s;
        }
    }

    .show-mobile-menu { 
        left: 0%;
        &:before {
            content: '';
            right: -20%;
            background-color: rgba(0,0,0,.6);
        }
    }

    .menus-wrapper {
        li { padding: 0.75rem 2rem; cursor: pointer; }
    }

    @media (min-width: 1024px) {
        .content-wrapper {
            &:before { display: none }
        }
        .menus-wrapper {
            .menu-profile {
                padding: 0px 0rem 0px 2rem;
                text-align: right;
            }
            li { text-align: right }
        }
    }
</style>