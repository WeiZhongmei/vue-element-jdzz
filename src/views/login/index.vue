<template>
    <!-- 登陆 -->
    <div id="login-wrapper">
        <!-- 表单 -->
        <div id="login-form">
            登录
        </div>

        <!-- 验证 -->
        <div id="login-verify">

        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {

            }
        },

        methods: {
            
        },

        created () {
            this.$rest('login', null, {
                username: 'zz',
                password: '123'
            }).then(res => {
                console.log(1111, res);
            }).catch(err => {
                console.log(err);
            })
        }
    }
</script>