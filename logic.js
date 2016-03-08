$( document ).ready( function () 
{
    var time = +prompt("Delay in ms?") || 700;

    var game  = $("#game"),
        score = $("#score"),
        countScore = 0;
    console.log( game.width() );
    
    function random( min, max )
    {
        return Math.floor( Math.random() * (max - min + 1) ) + min;
    }

    game.on("click", function (e)
    {   
        e.preventDefault();
        e.stopImmediatePropagation();
        game.addClass("cursorView");
        setTimeout(function ()
        {
            game.removeClass("cursorView");
        }, 70);
    });


	function newTarget() 
    {
        
        var target = $( "<div></div>", { class : "target" } );

        $( target ).appendTo( game );


        var left   = random( 0, game.width() - target.width() ),
            top    = random( 0, game.height() - target.height() - 20 );

        target.offset({ left : left, top : top })
        .animate({transform : "scale(0.1)"}, 
        {
          duration: 6000,
          easing: "linear",
          complete: function () 
          {
            target.addClass("remove");
            target.remove();
        } 
    })
        .on("mousedown", function  () 
        {
            target.addClass("remove");
            target.remove();
            score.text( ++countScore );
        });


    };
    setInterval( newTarget, time );

} );
