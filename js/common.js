common = {
    URL: {
        verifyAuthURL: function(){
            return './common/verifyAuth';
        }
    },
    method: {
        util: {
            getUrlParamValue: function(paramName) {
                var reg = new RegExp("(^|&)" + paramName + "=([^&]*)(&|$)", "i");
                var r = window.location.search.substr(1).match(reg);
                if (r != null){
                    return unescape(r[2]);
                }
                return null;
            }
        },
        verifyAuth: function(){
            $.post(common.URL.verifyAuthURL(),{}, function(result){
                var errorCode = result.errorCode;
                // console.log('errorCode: ' + errorCode);
                /*if(errorCode == 0){
                    // 有权限
                    $('#verify-li').css('display','block');
                    $('#verify-li_pop').css('display','block');
                }else{
                    $('#verify-li').css('display','none');
                    $('#verify-li_pop').css('display','none');
                }*/
                $('#verify-li').css('display','block');
                $('#verify-li_pop').css('display','block');
            });
        }
    }
}