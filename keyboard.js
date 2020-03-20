class Keyboard {
  constructor() {
    this.pressed = {};

    document.addEventListener('keydown', evt => {
      this.pressed[evt.code] = true;
    });

    document.addEventListener('keyup', evt => {
      delete this.pressed[evt.code];
    });

    window.addEventListener('blur', evt => {
      this.pressed = {};
    });
  }

  isDown(key) {
    return key in this.pressed;
  }
}

export default new Keyboard();
