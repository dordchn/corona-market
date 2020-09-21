import { isMobile } from '../utils/utils.js';

const KeysMap = {
  'up': 'ArrowUp',
  'down': 'ArrowDown',
  'left': 'ArrowLeft',
  'right': 'ArrowRight',
};

class Controller {
  constructor() {
    this.pressed = new Set();
    this.recentPressed = null;

    this.isJoystick = isMobile;
    this.enabled = false;

    if (!this.isJoystick) this._initKeyboard();
  }

  start() {
    if (this.enabled) return;
    if (this.isJoystick) this._initJoystick();
    this.enabled = true;

  }

  stop() {
    if (!this.enabled) return;
    if (this.isJoystick) this.joystick.destroy();
    this.enabled = false;
    this.pressed.clear();
    this.recentPressed = null;
  }

  isDown(key) {
    return this.pressed.has(key);
  }

  getRecentDown() {
    return this.recentPressed;
  }

  _initJoystick() {
    this.joystick = nipplejs.create({
      zone: document.querySelector('body'),
      color: 'gray'
    });
    this.joystick.on('dir', (evt, nipple) => {
      const keyName = KeysMap[nipple.direction.angle];
      this.pressed.add(keyName);
      this.recentPressed = keyName;
    });

    this.joystick.on('end', (evt, nipple) => {
      this.pressed.clear();
      this.recentPressed = null;
    });
  }

  _initKeyboard() {
    document.addEventListener('keydown', evt => {
      if (!this.enabled) return;
      if (evt.key.startsWith("Arrow") || evt.key == ' ') evt.preventDefault();
      if (evt.repeat) return;
      this.pressed.add(evt.code)
      this.recentPressed = evt.code;
    });

    document.addEventListener('keyup', evt => {
      if (!this.enabled) return;
      this.pressed.delete(evt.code)
      if (evt.code == this.recentPressed) {
        this.recentPressed = null;
      }
    });

    window.addEventListener('blur', evt => {
      if (!this.enabled) return;
      this.pressed.clear()
      this.recentPressed = null;
    });
  }
}

export default new Controller();
