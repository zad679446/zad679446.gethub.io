$(function(){
    $("#submit").click(function(event){
        $.post(rurl,{
            username: $("#user_name").val(),
            useremail: $("#user_email").val(),
            phone: $("#phone").val(),
            password: $("#password").val()
        },function(data){
            if(data.success){
                location.href = "menu.html";
            }else{
                alert("注册失败，请检查输入信息。");
            }
        },
        "json")
    })
})
$(function(){
    $("#button").click(function(event){
        $.post(lurl,{
            username: $("#login_user_name").val(),
            password: $("#login_password").val()
        },function(data){
            if (data.success) {
                location.href = "menu.html"
            }
            else{
                alert("登录失败，请检查用户名或密码。");
            }
        },
        "json")
    })
})
