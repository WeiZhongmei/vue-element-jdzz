import {Message} from 'element-ui';

function alertMssage (type, options) {
    if (document.getElementsByClassName("el-message").length === 0) {
        Message({
            message: options ? options : "失败",
            type: type,
            center: true,
            duration: 2000
        });
    }
}

export default {
    alertSuccess(options) {
        alertMssage("success", options)
    },
    alertWarning(options) {
        alertMssage("warning", options)
    },
    alertError(options) {
        alertMssage("error", options)
    }
}