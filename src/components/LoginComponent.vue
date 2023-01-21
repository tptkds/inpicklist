<template>
    <div>
        <button @click="instagramAuth()">Login as Instagram</button>
    </div>
</template>

<script>    
    import axios from 'axios';

    export default {
        name: 'LoginComponent',

        methods: {
            instagramAuth: function() {
                axios.get('https://api.instagram.com/oauth/authorize', {
                    params: {
                        client_id: '699014145213917',
                        redirect_uri: '/inpicklist/',
                        response_type: 'code',
                        scope: 'user_profile'
                    }
                })
            }
        }
    }


</script>