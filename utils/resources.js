
class Resources {
  constructor() {
    this.cache = {};
  }

  async loadImage(path) {
    if (path in this.cache) {
      return Promise.resolve(this.cache[path]);
    }
    return new Promise((res, rej) => {
      const img = new Image();
      img.onload = () => {
        this.cache[path] = img;
        res(img);
      };
      img.src = path;
    });
  }

  async loadImages(paths) {
    return Promise.all(paths.map(path => this.loadImage(path)));
  }

  get(path) {
    return this.cache[path];
  }

}
export default new Resources();
