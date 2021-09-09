<template>
    <!-- 登陆 -->
    <div id="login-wrapper">
        <div id="login-content" class="w400 h600 p30">
            <!-- 顶部 -->
            <div id="login-header">
                <img src="../../assets/imgs/svg/logo.svg">
                <h1>WELLCOME</h1>
            </div>

            <!-- 表单 -->
            <div id="login-form" class="pt50">
                <el-form>
                    <!-- 帐号 -->
                    <el-form-item>
                        <el-input 
                            prefix-icon="el-icon-user"
                            placeholder="帐号"
                            v-model="userInfo.username"
                            @keyup.native="removeBlank"
                            @keyup.native.enter="handleLogin"
                        >
                        </el-input>
                    </el-form-item>

                    <!-- 密码 -->
                    <el-form-item>
                        <el-input 
                            prefix-icon="el-icon-lock"
                            type="password"
                            placeholder="密码"
                            v-model="userInfo.password"
                            @keyup.native.enter="handleLogin"
                        >
                        </el-input>
                    </el-form-item>

                    <!-- 按钮 -->
                    <el-button 
                        size="middle" 
                        type="primary" 
                        class="w mt50" 
                        @click="handleLogin"
                        :loading="loginLoading"
                    >
                        登录
                    </el-button>
                    <el-button 
                        type="text" 
                        class="w mt30" 
                        @click="defaultLogin"
                        :loading="loginLoading"
                    >
                        默认帐号一键登录
                    </el-button>
                </el-form>
            </div>
        </div>

        <!-- 验证 -->
        <div id="login-verify">
            <slider-verify
                :show="true"
            />
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                userInfo: {
                    username: '',
                    password: ''
                },

                defaultUser: {
                    username: 'admin',
                    password: '123'
                },
                loginLoading: false
            }
        },

        methods: {
            removeBlank (ho) {
                var str = ho.target.value,
                whitespace = ' \n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000';
                for (var i = 0,len = str.length; i < len; i++) {
                    if (whitespace.indexOf(str.charAt(i)) === -1) {
                    str = str.substring(i);
                    break;
                    }
                }
                for (i = str.length - 1; i >= 0; i--) {
                    if (whitespace.indexOf(str.charAt(i)) === -1) {
                    str = str.substring(0, i + 1);
                    break;
                    }
                }
                ho.target.value = whitespace.indexOf(str.charAt(0)) === -1 ? str : '';
            },

            // 登录
            handleLogin () {
                this.loginLoading = true;
                this.$rest('login', null, {
                    username: this.userInfo.username,
                    password: this.userInfo.password
                }).then(res => {
                    this.alertSuccess('成功')
                    console.log(1111, res);
                    this.loginLoading = false;
                }).catch(err => {
                    console.log(err);
                    this.loginLoading = false;
                })
            },

            defaultLogin () {
                this.userInfo = this.defaultUser;
                this.handleLogin();
            }
        },

        created () {
            
        }
    }
</script>

<style lang="scss" scoped>
    #login-wrapper {
        height: 100vh;
        width: 100vw;
        background-image: url('../../assets/imgs/login_bg.jpg');
        background-size: 1920px 1080px;
        background-position: -500px 100%;
        display: flex;

        #login-header {
            height: 180px;
            display: flex;
            flex-direction: column;
            justify-content: center;

            h1 {
                margin: 10px 0 0 0;
            }
        }
        
        #login-content {
            background-color: #FFF;
            box-shadow: 0px 7px 25px 0px rgba(0, 0, 0, 0.08);
            opacity: .8;
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            top: 50%;
            left: 55%;
            transform: translateY( -50%);
        }

        #login-form {
            .el-form-item {
                border-bottom: 1px solid rgba(0, 0, 0, 0.09);
            }

            /deep/ .el-input .el-input__inner{
                border: none;
                width: 280px;
            }

            .el-button--text {
                margin-left: 0;
            }
        }

        #login-verify {
            // position: relative;
            // width: 340px;
            // height: 230px;
        }
    }

    @media screen and (max-width: 1260px) {
        #login-wrapper {
            background-position: -700px 100%;
        }
    }
</style>