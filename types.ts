const str: string = 'Hello'
console.log(str)

const isFetchind: boolean = true
const isLoading: boolean = false

const int: number = 345
const float: number = 2.45
const num: number = 2e34

const message: string = 'Text'

const numberArray: number[] = [1,1,2,3,5,8,13]
const numberArray2: Array<number> = [1,1,2,3,5,8,13]

const words: Array<string> = ['text1','text2','text3']

//Tuple
const contacts: [string,number] = ['Text', 123456]

//Any
let variable: any = 234
variable = 'Now text'

//
function sayMyName(name: string): void{
  console.log(name)
}

sayMyName('Olivia')

//Never 

function throwError(message: string): never{
  throw new Error(message)
}

// Type
type Login = string

const login: Login = 'login'

type ID = string | number

const id1: ID = 1242
const id2: ID = 'id2'