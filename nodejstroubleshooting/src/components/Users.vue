<template>
    <div>
        <li :key="user.user" v-for="user in users">
            {{ user.user }} - {{ user.job }}
        </li>
    </div>
</template>

<script>

export default {
    data() {
        return {
            users: []
        }
    },
    mounted() {
        axios.get('https://nodejsbootcampapi.azurewebsites.net/users').then(
            res => {
                this.users = res.data;
        });
    }
}
</script>

<style>
</style>
