/**
 * Created by ylc on 2017/7/21.
 */

import {regex} from './common'
// export default regex('telphone', /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/)
export default regex('passwordReg',/^(?![0-9]+$)(?![a-zA-Z]+$)(?![`~!@#$%^&*()_+=\\|{}\[\]'":;,.<>/?-]+$)[`~!@#$%^&*()_+=\\|{}\[\]'":;,.<>/?0-9a-zA-Z-]{8,20}$/)


