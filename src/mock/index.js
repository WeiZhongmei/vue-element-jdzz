import Mock from 'mockjs';

require ('./login/login.js');

Mock.setup({
    // 模拟网络延迟，单位 ms，也可以设置成一个固定值
    timeout: 0-500
})