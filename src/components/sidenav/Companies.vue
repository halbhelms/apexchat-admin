<template>
    <div class="sidebar-nav-element" v-bind:class="{active: $store.state.active === 'support'}" @click="setActiveNav('companies')">
        <img class="customer-icon" src="./customer.png" alt="" width="64">

        <div class="label">Companies</div>
    </div>
</template>

<script>
export default {
    name: 'Companies',
    props: {},
    data() {
        return {}
    },
    methods: {
        setActiveNav(navElement) {
            this.$store.dispatch('set_active_nav', navElement)
        }
    }
}
</script>





<style scoped>
    .active {
        background-color: rgb(79,185,255);
        border-left: 5px solid white;
    }

    .sidebar-nav-element {
        display: grid;
        grid-template-columns: 20px auto;
        color: white;
        font-weight: bold;
        text-align: left;
        padding-left: 24px;
        padding-top: 12px;
        cursor: pointer;
    }

    .customer-icon {
        position: relative;
        top: -20px;
    }

    .label {
        padding-left: 38px;
    }

    /* svg styles */
    .st0{fill:none;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
</style>