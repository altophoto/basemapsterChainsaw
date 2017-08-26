<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <school-list></school-list>
            <servers></servers>
            <router-view></router-view>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './components/Shared/Header.vue';
    import Footer from './components/Shared/Footer.vue';
    import SchoolList from './components/Server/SchoolList.vue';
    import Servers from './components/Server/Servers.vue';
    import ServerDetails from './components/Server/ServerDetails.vue';

    export default {
        components: {
            appHeader: Header,
            'school-list': SchoolList,
            Servers,
            'app-server-details': ServerDetails,
            'app-footer': Footer
        }
    }
</script>

<style>

</style>
