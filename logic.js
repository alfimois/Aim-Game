$( document ).ready( function () 
{
    var time = +prompt("Delay in ms?") || 700;

    var game  = $("#game"),
        score = $("#score"),
        countScore = 0;
    
    function random( min, max )
    {
      return Math.floor( Math.random() * (max - min + 1) ) + min;
    }

    game.on("click", function (e)
    {
        e.preventDefault();
        e.stopImmediatePropagation();
    });

	function newTarget() 
    {
        var target = $( "<div></div>", { class : "target" } ),
            left   = random( 0, game.width() - target.width() ),
            top    = random( 0, game.height() - target.height() - 20 );

        $( target )
            .appendTo( game )
            .offset({ left : left, top : top })
            .animate({transform : "scale(0.1)"}, 
                     {
                      duration: 4000,
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
