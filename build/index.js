class UsedClass {}

class UnusedClass {
  constructor() {
    Object.defineProperty(this, 'test', { value: true });
  }
}


const unusedVariable = new UnusedClass();

console.log(UsedClass);
