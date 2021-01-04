class Typescript {
  version: string

  constructor(version: string){
    this.version = version
  }

  info(name: string) {
    return `[${name}]: Typescript version is ${this.version}`
  }
}

class Cat {
  readonly numberOfLegs: number = 4
  constructor(readonly name: string){}
}

//========================

class Animal {
  protected voice: string = ''
  public color: string = 'black'
  
  constructor(){
    this.go()
  }

  private go(){
    console.log('Go!')
  }
}

class Dog extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice
  }
}

const dog = new Dog()
dog.setVoice('test')
console.log(dog.color)

//===========
abstract class Component{
  abstract render(): void
  abstract info(): string
}

class App extends Component{
  render(): void{
    console.log('Component on render')
  }

  info(): string{
    return 'This is info'
  }
}