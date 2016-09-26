$(function(){
//    var audio = $('audio');
//    var music = $('.music > img').eq(1);
//    var music = $('.music > img').eq(1).hammer(); 
//    music.on('tap',function(){
//        if(audio.paused){
//            audio.play();
//        }else{
//           audio.pause();
//        }
//    })
    var music = document.getElementById("music");
    var audio = document.getElementsByTagName("audio")[0];
    var page1 = $("#page1").hammer();
    music.onclick = function(){
        if(audio.paused){
            audio.play();
            $(".music > img").eq(1).addClass("play")
//            this.style.animationPlayState = "running"
        }else{
           audio.pause();
            $(".music > img").eq(1).removeClass("play")
//            this.style.animationPlayState = "paused"
        }  
    }
    
    //音乐结束事件
    audio.addEventListener("ended",function(){
        $(".music > img").eq(1).removeClass("play");
    });
    
    //翻页事件
    page1.on("tap",function(){
//        alert(1)
        $(this).css("display","none");
        $("#page3").show();
        $(this).next().fadeIn(400);
        setTimeout(function(){
            $("#page2").addClass("fadeOut");
            $("#page3").addClass("fadeIn");
        },5500)
        
    })
})