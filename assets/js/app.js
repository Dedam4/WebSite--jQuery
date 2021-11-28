$(function(){

    let header = $('#header')
    let introH = $('#intro').innerHeight();
    let scrollOffset =  $(window).scrollTop();
    checkScroll(scrollOffset);

    $(window).on('scroll', function(){
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset)
        


    });


    function checkScroll(scrollOffset) {
       
    

        if(scrollOffset >= introH) {

            header.addClass('fixed');
       

        } else {

            header.removeClass('fixed');

        }
        
    }



    $('[data-scroll]').on('click', function(event){
        event.preventDefault();

        let blockId = $(this).data('scroll');
        let blockOffset =$(blockId).offset().top;
        let $this = $(this);

        $('#nav a').removeClass('active');
        $this.addClass('active');

        $('html, body').animate({
            scrollTop: blockOffset
        }, 800)

    });


    $('#nav-toggle').on('click', function(event){
        event.preventDefault();

        $(this).toggleClass('active');
        $('#nav').toggleClass('active');

        $('#nav a').on('click', function(event){
            event.preventDefault();

            $('#nav').removeClass('active');
            $('#nav-toggle').removeClass('active');
        })
    });




    $('[data-collapse]').on('click', function(event){
        event.preventDefault();

        let $this = $(this);
        let blockId = $this.data('collapse');

        $this.toggleClass('active')


        $(blockId).slideToggle();
    



    });



    $('[data-slider]').slick({
        infinity: true,
        fade:false,
        slidesToShow: 1,
        slidesToScroll: 1
    });












});