function strip(x: string | number){
  if (typeof x === 'number'){
    return x.toFixed(2)
  }
  return x.trim()
}

class MyResponce {
  header = 'resp header'
  result = 'resp result'
}

class MyError {
  header = 'error header'
  message = 'error message'
}

function handle(res: MyResponce | MyError) {
  if (res instanceof MyResponce) {
    return {
      info: res.header + res.result
    }
  } else {
    return {
      info: res.header + res.message
    }
  }
}

//================================

type AlertType  = 'success' | 'danger' | 'warning'

function setAlertType(type: AlertType) {
  //...
}

setAlertType('success')