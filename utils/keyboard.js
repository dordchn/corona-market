class Keyboard {
  constructor() {
    this.pressed = {};
    this.recentPressed = null;

    document.addEventListener('keydown', evt => {
      if (evt.repeat) return;
      this.pressed[evt.code] = true;
      this.recentPressed = evt.code;
    });

    document.addEventListener('keyup', evt => {
      delete this.pressed[evt.code];
      if (evt.code == this.recentPressed) {
        this.recentPressed = null;
      }
    });

    window.addEventListener('blur', evt => {
      this.pressed = {};
      this.recentPressed = null;
    });
  }

  isDown(key) {
    return key in this.pressed;
  }

  getRecentDown() {
    return this.recentPressed;
  }
}

export default new Keyboard();
