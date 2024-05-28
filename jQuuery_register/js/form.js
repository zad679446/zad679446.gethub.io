(function(){
    var hintText={
        user_email:{
            hint:"请输入有效的邮箱地址",
            right:"邮箱地址格式正确",
            wrong:"邮箱地址格式错误"
        },
        user_name:{
            hint:"请输入用户名，长度为3-12个字符",
            right:"用户名格式正确",
            wrong:"用户名格式错误"
        },
        name:{
            hint:"请输入姓名，长度为3-12个字符",
            right:"姓名格式正确",
            wrong:"姓名格式错误"
        },
        address:{
            hint:"请输入地址，长度为6-16个字符",
            right:"地址格式正确",
            wrong:"地址格式错误"
        },
        weight:{
            hint:"请输入体重，数字范围为1-4位",
            right:"体重格式正确",
            wrong:"体重格式错误"
        },
        phone:{
            hint:"请输入手机号，格式为11位数字",
            right:"手机号格式正确",
            wrong:"手机号格式错误"
        },
        id_card:{
            hint:"请输入身份证号，共18位数字",
            right:"身份证号格式正确",
            wrong:"身份证号格式错误"
        },
        password:{
            hint:"请输入密码，长度为6-16个字符",
            right:"密码格式正确",
            wrong:"密码格式错误"
        },
        repassword:{
            hint:"请再次输入密码，与上一次输入一致",
            right:"两次密码输入一致",
            wrong:"两次密码输入不一致"
        }
    };
    var regEvent=function(node, event, func){
        if (node.addEventListener)
            node.addEventListener(event, func);
        else if (node.attachEvent)
            node.attachEvent("on" + event, func);
        else
            node["on" + event] = func;
    };
    function regValue(id,i){
        var flag=false,
        input=document.getElementById(id),
        value=input.value;
        switch (id){
            case "user_name":
            case "login_user_name":
            case "info_user_name":
                flag=/^[a-zA-Z0-9_]{4,16}$/.test(value.replace(/[\u0391-\uFFE5]/g,"nn"));
                id="user_name";
                break;
            case "name":
            case "send_to_name":
            case "send_from_name":
                flag=/^[a-zA-Z ]{1,20}$/.test(value.replace(/[\u0391-\uFFE5]/g,"nn"));
                id="name";
                break;
            case "send_from_address":
            case "send_to_address":
                flag=/^\S{6,16}$/.test(value.replace(/[\u0391-\uFFE5]/g,"nn"));
                id="address";
                break;
            case "password":
            case "login_password":
            case "info_password":
                flag=/^\S{6,16}$/.test(value);
                id="password";
                break;
            case "repassword":
                flag=document.getElementById("password").value==value && value !="" && value !=null && (/^\S{6,16}$/.test(value));
                break;
            case "info_repassword":
                flag=document.getElementById("info_password").value==value && value !="" && value !=null && (/^\S{6,16}$/.test(value));
                id="repassword";
                break;
            case "user_email":
            case "forget_user_email":
            case "info_user_email":
                                flag=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}/.test(value);
                                id="user_email";
                                break;
                            case "phone":
                            case "info_phone":
                            case "send_to_phone":
                            case "send_from_phone":
                                flag=/^((\(\d{2,3}\))|(\d{3}\-))?1[3,8,5]{1}\d{9}$/.test(value);
                                id="phone";
                                break;
                            case "id_card":
                                flag=/^\S{18}$/.test(value);
                                break;
                            case "weight":
                                flag=/^\d{1,4}$/.test(value);
                                break;
                            default:
                                break;
                        }
                        if(flag) {
                            index=0;
                            input.className="right input";
                            hint[i].className="hint hint_right";
                            hint[i].innerHTML=hintText[id].right;
                        }else{
                            input.className="wrong input";
                            hint[i].className="hint hint_wrong";
                            hint[i].innerHTML=hintText[id].wrong;
                            index=1;
                        }
                    };
                    var inputs=document.getElementsByClassName("input"),
                    id,
                    hint=document.getElementsByClassName("hint"),
                    index=0;
                    for(var j=0;j<inputs.length;j++){
                        (function(i){
                            regEvent(inputs[i],"focus",function(){
                                hint[i].style.visibility="visible";
                                id=inputs[i].id;
                            });
                            regEvent(inputs[i],"blur",function(){
                               regValue(id,i);
                            });
                        })(j)
                    }
                    regEvent(document.getElementById("submit"),"click",function(e){
                        if(index!==0){
                            alert("请检查输入信息");
                            e.preventDefault();
                            return false;
                        }  
                    });  
                    regEvent(document.getElementById("button"),"click",function(e){
                        if(index!==0){
                            e.preventDefault();
                            alert("请检查用户名或密码");
                            return false;
                        }  
                    });  
                })();
