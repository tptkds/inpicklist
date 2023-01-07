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
                        
                    }
                })
            }
        }
    }


</script>