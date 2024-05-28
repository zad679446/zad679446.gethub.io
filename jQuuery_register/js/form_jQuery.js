(function(){
    var hintText = {
        user_email: {
            hint: "请输入有效的邮箱地址",
            right: "邮箱地址格式正确",
            wrong: "邮箱地址格式错误"
        },
        user_name: {
            hint: "请输入用户名，长度为3-12个字符",
            right: "用户名格式正确",
            wrong: "用户名格式错误"
        },
        name: {
            hint: "请输入姓名，长度为3-12个字符",
            right: "姓名格式正确",
            wrong: "姓名格式错误"
        },
        address: {
            hint: "请输入地址，长度为6-16个字符",
            right: "地址格式正确",
            wrong: "地址格式错误"
        },
        weight: {
            hint: "请输入体重，数字范围为1-4位",
            right: "体重格式正确",
            wrong: "体重格式错误"
        },
        phone: {
            hint: "请输入手机号，格式为11位数字",
            right: "手机号格式正确",
            wrong: "手机号格式错误"
        },
        id_card: {
            hint: "请输入身份证号，共18位数字",
            right: "身份证号格式正确",
            wrong: "身份证号格式错误"
        },
        password: {
            hint: "请输入密码，长度为6-16个字符",
            right: "密码格式正确",
            wrong: "密码格式错误"
        },
        repassword: {
            hint: "请再次输入密码，与上一次输入一致",
            right: "两次密码输入一致",
            wrong: "两次密码输入不一致"
        }
    };

    $(function(){
        $("#submit").click(function(event){
            var data = {
                username: $("#user_name").val(),
                useremail: $("#user_email").val(),
                phone: $("#phone").val(),
                password: $("#password").val()
            };
            $.post(rurl, data, function(data){
                if(data.success){
                    location.href = "menu.html";
                }else{
                    alert("注册失败，请检查输入信息。");
                }
            }, "json");
        });
    });

    $(function(){
        $("#button").click(function(event){
            var data = {
                username: $("#login_user_name").val(),
                password: $("#login_password").val()
            };
            $.post(lurl, data, function(data){
                if (data.success) {
                    location.href = "menu.html";
                } else {
                    alert("登录失败，请检查用户名或密码。");
                }
            }, "json");
        });
    });
})();
