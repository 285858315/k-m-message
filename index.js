/**
 * Created by cc on 14-5-13.
 */
'use strict';
//    "message":"Validation failed",
//    "name":"ValidationError",
//    "errors":{
//        "key":{
//            "message":"Path `key` is required.",
//            "name":"ValidatorError",
//            "path":"key",
//            "type":"required"
//        }
//    }
var getMessage = function(key,message,data,act){
    var info_code = "";
    var info = message[key];
    if(typeof message[key] == "object"){
        info_code = message[key]["code"];
        info = message[key]["info"];
    }
    var msg = {key:key + 1,message:info,msg:{key:key + 1,title:info},info:info,info_code:info_code,data: data  ? data : ""};
    if(act){
        msg["act"] = act.replace("/","");
    }
    return msg;
}
module.exports = {
    getMessage:getMessage
}
