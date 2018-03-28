$(document).ready(() => {
  const timeOfLifeTarget = Number(
    prompt(
      `Введите время в миллисекундах.\n
       1000 миллисекунд равняется 1 секунде.\n
       Стандартное значение равняется 1 секунде.\n
       Чтобы включить режим на весь экран: нажмите F12`
    )
  ) || 1e3;
  const gameWindow       = $(".gameWindow");
  const scoreWindow      = $(".scoreWindow");
  let countScore         = 0;

  const random = (min, max) => {
    return Math.floor( Math.random() * (max - min + 1) ) + min;
  };

  const newTarget => {
    const target = $("<div></div>", { class : "target" });
    const left   = random(0, gameWindow.width()  - target.width()  - 65);
    const top    = random(0, gameWindow.height() - target.height() - 65);

    $(target).appendTo(gameWindow);

    target.offset({ left, top })
      .animate({transform : "scale(0.1)"}, {
        duration: 4e3,
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
