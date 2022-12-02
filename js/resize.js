$(document).ready(function(){

    // desktop, mobile 구분
	if($(this).width() < 1418) {
		$("html").removeClass("desktop").addClass("mobile");
	} else {
		$("html").removeClass("mobile").addClass("desktop");
    }

    // 리사이즈 했을 경우
    $(window).resize(function(){
        if(this.resizeTO){
            clearTimeout(this.resizeTO);
        }
        this.resizeTO = setTimeout(function(){
            $(this).trigger('resizeEnd');
        }, 100);
    });

    // 리사이즈가 끝났을 경우
    $(window).on("resizeEnd", function(){
        // desktop, mobile 구분
        if($(this).width() < 1418) {
            $("html").removeClass("desktop").addClass("mobile");
            
        } else {
            $("html").removeClass("mobile").addClass("desktop");
        }
    });

    

})