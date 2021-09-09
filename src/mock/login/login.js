import Mock from 'mockjs'
let user = [
    {
        username: 'admin',
        password: '123'
    },
    {
        username: 'zz',
        password: '123'
    }
]

Mock.mock('/login', 'post', (req) => {
    let body = JSON.parse(req.body),
        username = body.username,
        password = body.password;

    let curUser = user.filter(u => u.username === username);
    if (curUser.length) {
        if (curUser[0].password === password) {
            return {
                code: 2000,
                msg: '登陆成功！'
            }
        } else {
            return {
                code: 2001,
                msg: '密码错误，请重新登陆！'
            }
        }
    } else {
        return {
            code: 2001,
            msg: '当前用户不存在！'
        }
    }
})