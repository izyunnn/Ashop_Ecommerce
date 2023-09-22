//用戶名匹配
export function nameRule(rule, value, callback) {
    let reg = /(^[a-zA-Z0-9]{4,10}$)/
    if(value === '') {
        callback(new Error('請輸入用戶名'))
    } else if (!reg.test(value)) {
        callback(new Error('請輸入4-10位用戶名'))
    } else {
        callback()
    }
}

export function passwordRule(rule, value, callback) {
    let pass = /^\S*(?=\S{6,12})(?=\S*\d)(?=\S*[A-Z])$/
    if(value === '') {
        callback(new Error('請輸入密碼'))
    } else if (!pass.test(value)) {
        callback(new Error('6-12位密碼需要包含大小寫字母和數字及特殊符號'))
    } else {
        callback()
    }
}