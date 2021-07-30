export class Utils {
  random(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
  }
}