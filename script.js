document.addEventListener("DOMContentLoaded", function() {
  const lightningContainer = document.querySelector('.lightning-container');
  const boomContainer = document.querySelector('.boom-container');
  const boomContainerSecond = document.querySelector('.boom-container.second');

  function createLightning() {
    const lightning = document.createElement('div');
    lightning.classList.add('lightning', 'white');
    lightningContainer.appendChild(lightning);

    const redLightning = document.createElement('div');
    redLightning.classList.add('lightning', 'red');
    lightningContainer.appendChild(redLightning);
  }

  function createShapes(container) {
    const shapes = ['circle big white', 'circle white', 'triangle big yellow', 'disc white', 'triangle blue'];
    shapes.forEach(shape => {
      const newShape = document.createElement('div');
      newShape.classList.add('shape', ...shape.split(' '));
      container.appendChild(newShape);
    });
  }

  createLightning();
  createShapes(boomContainer);
  createShapes(boomContainerSecond);
});
