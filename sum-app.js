class SumApp {
  constructor() {
    this.numbers = [];
  }
  addNumber(n) {
    this.numbers.push(n);
  }
  getSum() {
    let x = 0;
    this.numbers.forEach((number) => (x += number));
    return x;
  }
  reset() {
    this.numbers = [];
  }
}
