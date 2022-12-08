/* nav */
$(function(){
    $('nav .depth1 > li').hover(
        function(){
            $(this).children().addClass('show');
        },
        function(){
            $(this).children().removeClass('show');
        }
    );
});
/* sitemap(pc) */
$(function(){
        $('#btn-toggle').on('click', function(){
            $('#sitemap').toggleClass('show');
        });
    
        $('#site-menu-close').on('click', function(){
            $('#sitemap').removeClass('show');
        });
});
/* main-banner */
$(function(){
    setInterval(function(){
        $('.slide div:first-child')
        .fadeIn(1000)
        .next('div')
        .fadeOut(1000)
        .end()
        .appendTo('.slide')
    },5000);
});

$(function(){
    $('#btn-toggle-m').on('click', function(){
        $('#sitemap').toggleClass('show');
    });

    $('#site-menu-close').on('click', function(){
        $('#sitemap').removeClass('show');
    });
});

/* mobile gnb */
$(function(){
    $('#sitemap .depth1 > li > a')
    .on('click',function(event){
        //클릭한 버튼의 다음형제(next)depth2에 toggle기능 추가
        $(this).next().toggleClass('show');
        event.preventDefault();
    })
   
});