$(document).ready( function() {
  const timeOfLifeTarget = Number( prompt("Time of appearance of the new target(ms). For example, you write: 1000. It`s equals 1000ms or 1 second. Default value equals 700ms. Enjoy :)") ) || 700;
  const gameWindow       = $(".gameWindow");
  const scoreWindow      = $(".scoreWindow");
  let countScore         = 0;

  function random(min, max) {
    return Math.floor( Math.random() * (max - min + 1) ) + min;
  };

  function newTarget() {
    let target = $("<div></div>", { class : "target" });
    let left   = random(0, gameWindow.width()  - target.width()  - 65);
    let top    = random(0, gameWindow.height() - target.height() - 65);

    $(target).appendTo(gameWindow);

    target.offset({ left : left, top : top })
      .animate({transform : "scale(0.1)"}, {
        duration: 4000,
        easing  : "linear",
        complete: () => target.remove()
      })
      .on("mousedown", () => {
        target.remove();
        scoreWindow.text(++countScore);
      });
  };

  setInterval(newTarget, timeOfLifeTarget);
});
