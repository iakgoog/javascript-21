(() => {
  const KONAMI_CODE = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a',
  ];

  let index = 0;

  function onKeyDown(event) {
    event.key === KONAMI_CODE[index] ? index++ : (index = 0);
    if (KONAMI_CODE.length === index) {
      console.log('TADA');
      startSnowing();
    }
  }

  function run() {
    document.addEventListener('keydown', onKeyDown);
  }

  run();
})();
