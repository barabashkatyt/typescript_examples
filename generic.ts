const arrayOfNumbers: Array<number> = [1,2,3,4,5,6]

const arrayOfStrings: Array<string> = ['text','another text']

function reverse<T>(array: T[]): T[]{
  return array.reverse()
}

reverse(arrayOfNumbers)
reverse(arrayOfStrings)