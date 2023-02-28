sign = {
    URL: {
        getMyValidApplyInfoURL: function(){
            return './common/getMyValidApplyInfo';
        }
    },
    method: {

        getMyValidApplyInfo: function(){
                const name=decodeURI(window.location.search.substr(1));
                var code = 0;
                if(code == 0){
                    /*var applyList = result.data;*/
                    var i = 0;
                    for(i = 0; i < 1; i++){
                        var sfqdAll = 1;
                        if(sfqdAll == 1){
                            $("#icon_img_div").empty();
                            $("#icon_img_div").append('<i class="weui-icon-success weui-icon_msg"></i>');
                            $("#tip_h2").empty();
                            $("#tip_h2").append('签到成功');
                            $("#tip_detail_p").empty();
                            $("#tip_detail_p").append('健身房');
                        }
                        var sfyx = 1;
                        var date=new Date();
                        var mon=date.getMonth()+1;
                        var statusMsg;
                        var times=["8:00-10:00","10:00-12:00","14:00-16:00","16:00-18:00","19:00-21:00"];
                        var time=date.getHours();
                        var minute=date.getMinutes();
                        var shtime;
                        if(time==8||time<8){
                            if(minute<=30)shtime=times[0];
                        }
                        else if(time==10||time==9)shtime=times[1];
                        else if(time==13||time==14)shtime=times[2];
                        else if(time==15||time==16)shtime=times[3];
                        else shtime=times[4];
                        if(sfyx == 1){
                            statusMsg = '<span style="color: #1E9FFF">有效</span>';
                        }else{
                            statusMsg = '<span style="color: #FF5722">无效</span>';
                        }
                        $('#apply_list_ul').append('<li role="option" class="weui-form-preview__item"><label class="weui-form-preview__label">姓名</label><p class="weui-form-preview__value">' + name + '</p></li>');
                        $('#apply_list_ul').append('<li role="option" class="weui-form-preview__item"><label class="weui-form-preview__label">签到状态</label><p class="weui-form-preview__value">' + statusMsg + '</p></li>');
                        $('#apply_list_ul').append('<li role="option" class="weui-form-preview__item"><label class="weui-form-preview__label">时间</label><p class="weui-form-preview__value">' + date.getFullYear()+ '-'+mon+'-'+date.getDate() + ' ' + shtime + '</p></li>');
                        $('#apply_list_ul').append('<br>');
                    }

                }else{
                    $('#apply_list_ul').append('<li role="option" class="weui-form-preview__item"><label class="weui-form-preview__label">姓名</label><p class="weui-form-preview__value">' + '罗靖' + '</p></li>');
                }
                $('#info_div').show();
            },
        
        getUrlParam: function(name){
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null){
                return unescape(r[2]);
            }
            return null;
        }

    },
    init: function(){
        var buildingCode = sign.method.getUrlParam('buildingCode');
        /*if(null == buildingCode || buildingCode == ''){
            $.toast("信息不完善", "cancel");
        }else{
            sign.method.getMyValidApplyInfo(buildingCode);
        }*/
        sign.method.getMyValidApplyInfo();
    }
}