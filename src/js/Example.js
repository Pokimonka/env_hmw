export default class Example {
  constructor(el) {
    this.el = el;
  }

  change(text) {
    setTimeout(() => {
      this.el.textContent = text;
    }, 8000);
  }
}
