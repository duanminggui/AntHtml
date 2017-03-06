/**
 * Created by Administrator on 2017/2/8.
 */
$(document).ready(function(){

    $(".sj_foot ul li.fo_active span").css("color","#FF284B");
    $(".sj_foot ul li.fo_active a").css("color","#FF284B");
    $(".sj_foot ul li").click(function(){
        var $foot_li = $(this).index();
        $(".sj_foot ul li.fo_active span").eq($foot_li).css("color","#FF284B").parents().parents().siblings().children().children("span").css("color","#B7BBBF");
        $(".sj_foot ul li.fo_active a").eq($foot_li).css("color","#FF284B").parents().siblings().children("a").css("color","#C3C6C9");
    });

    $(".sj_header ul li.cl_span span").click(function(){
       $(this).addClass("he_active").siblings().removeClass("he_active");
    });
    $(".sj_header ul li.cl_span span.he_one").click(function(){
        swiperH.slideTo(0, 500, false);
    });
    $(".sj_header ul li.cl_span span.he_two").click(function(){
        swiperH.slideTo(1, 500, false);
    });

    $(".tanchukuang").hide();
    $(".add_btn").click(function(){
        $(".tanchukuang").css("top","50px").slideToggle();
    });
    $(".swiper-container-h").click(function(){
        $(".tanchukuang").css("top","50px").slideUp();
    });

    var div=$(".myinfo");
    $(".media").click(function(){
        div.animate({left:'0'},"slow");
    });
    $(".info_cha").click(function(){
        div.animate({left:'-100%'},"slow");
    });
    /* 发布按钮 */
    $(".fabu_btn").click(function(){
        $(".fabu_con").animate({bottom:'0'},"fast");
    });
    $(".fabu_dbclick").click(function(){
        $(".fabu_con").animate({bottom:'-180px'},"fast");
    });
    $(".fabu_cha").click(function(){
        $(".fabu_con").animate({bottom:'-180px'},"fast");
    });

    $(".deatlis").css("display","none");
    $(".drafts_con>ul li .over_zi").click(function(){
        $(".deatlis").css("left","0").slideDown();
    });

    $(".drafts_cha").click(function(){
        window.location.href="my.html";
    });

    $(".deatlis_con ul li i").click(function(){
        $(".deatlis").slideUp();
    });

//--------------------------------- 编辑文章 ---------------------------------*/
    $(".ge_btn").click(function(){
        $(".populic_con").stop().animate({right:'0'},"fast");
    });
    $(".pop_btn").click(function(){
        $(".populic_con").stop().animate({right:'-100%'},"fast");
    });
    $(".popu_list>ul li").click(function(){
        var $po_li = $(this).index();
        $(".popu_list>ul li input").eq($po_li).prop("checked",'checked');
        $(".populic_con").stop().animate({right:'-100%'},"fast");

        if($("input[name=po_radio]:eq(0)").prop("checked")){
            $(".edit_btn .ge_btn a").replaceWith("<a href='#'><span class='glyphicon glyphicon-globe'></span>公开</a>");
        }else if($("input[name=po_radio]:eq(1)").prop("checked")){
            $(".edit_btn .ge_btn a").replaceWith("<a href='#'><img src='img/pyq.png'>好友圈</a>");
        }else if($("input[name=po_radio]:eq(2)").prop("checked")){
            $(".edit_btn .ge_btn a").replaceWith("<a href='#'><img src='img/suo.png'>仅自己可见</a>");
        }
    });
    $(".bianji").click(function(){
        $(".edit_info").css('display','block');
        $(".xiangxi_info").css('display','none');
    });
/*--------------------------------- 编辑资料 ---------------------------------*/
    /* 1.性别 */
    $(".edit_sex").click(function(){
        $(".edit_sex_con").css('display','block');
    });
    $(".edit_btn .quren").click(function(){
        $(".edit_sex_con").css('display','none');
        if($("input[name=sex_radio]:eq(0)").prop("checked")){
            $(".edit_sex span").replaceWith("<span>男</span>");
        }else if($("input[name=sex_radio]:eq(1)").prop("checked")){
            $(".edit_sex span").replaceWith("<span>女</span>");
        }
    });
    $(".edit_btn .quxiao").click(function(){
        $(".edit_sex_con").css('display','none');
    });
    $(".edit_fq").click(function(){
        $(".edit_info").css('display','none');
        $(".xiangxi_info").css('display','block');
    });
    $(".wangcheng").click(function(){
        $(".edit_info").css('display','none');
        $(".xiangxi_info").css('display','block');
    });
    /* 2.职业 */
    $(".zecho_li ul li").click(function(){
        var $zy_index = $(this).index();
        $(".zhiye_info .my_con ul li").eq($zy_index).append('<span class="glyphicon glyphicon-ok"></span>').siblings().children("span").replaceWith('<span></span>');
        $(".zhiye_info .my_con ul li input").eq($zy_index).prop("checked",'checked');

        $(".zecho_li ul li input").each(function(){
            if($(this).prop("checked")){
                s=$("input[name='zy_input']:checked").val();
                $(".zy_show span").html(s);
            }
        });
        $(".edit_info").css('display','block');
        $(".zhiye_info").css('display','none');
    });

    $(".zy_show").click(function(){
        $(".edit_info").css('display','none');
        $(".zhiye_info").css('display','block');
    });
    $(".zy_btn").click(function(){
        $(".zhiye_info").css('display','none');
        $(".edit_info").css('display','block');
    });

/*--------------------------------- 点赞 ---------------------------------*/

    $(function(){
        $(".da_con_bottom p:first-child").click(function(){
            var praise_span = $(this).find($(".span_bg"));
            var text_box = $(this).find($(".add-num"));
            var praise_txt =  $(this).find($(".praise_txt"));
            var num=parseInt(praise_txt.text());
            if(praise_span.attr("color","#999")) {
                $(praise_span).css("color","#EB4F38");
                praise_txt.addClass("hover");
                text_box.show().html("<em class='add-animation'>+1</em>");
                $(".add-animation").addClass("hover");
                num +=1;
                praise_txt.text(num);
            } else {
                $(praise_span).css("color","#999");
                praise_txt.removeClass("hover");
                text_box.show().html("<em class='add-animation'>-1</em>");
                $(".add-animation").removeClass("hover");
                num -=1;
                praise_txt.text(num);
            }
        });
    })
    $(".sj_foot ul li:nth-child(3) .span_bg").click(function(){
        var praise_span = $(this).find($(".span_bg"));
        var text_box = $(this).find($(".add-num"));
        if(praise_span.attr("color","#999")) {
            $(praise_span).css("color","#EB4F38");
            praise_txt.addClass("hover");
            text_box.show().html("<em class='add-animation'>+1</em>");
            $(".add-animation").addClass("hover");
            num +=1;
            praise_txt.text(num);
        } else {
            $(praise_span).css("color","#999");
            praise_txt.removeClass("hover");
            text_box.show().html("<em class='add-animation'>-1</em>");
            $(".add-animation").removeClass("hover");
            num -=1;
            praise_txt.text(num);
        }
    });


/*--------------------------------- 我的相册 ---------------------------------*/
// item selection
    $('.pic_list ul li').click(function () {
        $(this).toggleClass('selected');
        if ($('.pic_list ul li.selected').length == 0)
            $('.select').removeClass('selected');
        else
            $('.select').addClass('selected');
    });

// all item selection
    $('.select_all').click(function () {
        if ($('.pic_list ul li.selected').length == 0) {
            $('.pic_list ul li').addClass('selected');
            $('.select').addClass('selected');
        }
        else {
            $('.pic_list ul li').removeClass('selected');
            $('.select').removeClass('selected');
        }
    });
/*--------------------------------- 久享正文 ---------------------------------*/
    $('.pinlun_tab .pinlun_cli_tab ul li:nth-child(2)').css("color","#34394B");
    $('.pinlun_tab .pinlun_cli_tab ul li').click(function () {
        var $tab_li = $(this).index();
        $(this).addClass("active_li").css("color","#34394B").siblings().removeClass("active_li").css("color","#999");
        $('.pinlun_cli_con>div').eq($tab_li).css("display","block").siblings().css("display","none");
    });






});