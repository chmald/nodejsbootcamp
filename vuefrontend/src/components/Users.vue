<template>
    <div>
        <li :key="user.user" v-for="user in users">
            {{ user.user }} - {{ user.job }}
        </li>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            users: []
        }
    },
    mounted() {
        axios.get('http://localhost:3000/users').then(
            res => {
                this.users = res.data;
        });
    }
}
</script>

<style>
</style>
