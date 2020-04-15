let query = ''
let req = ''
let results = ''
let customerData = []
customerSelect.onshow=function(){
  query = `SELECT * FROM customer`
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=rje33080&pass=Bluejays$1!&database=rje33080&query=" + query)
  if (req.status == 200) {
    results = JSON.parse(req.responseText)
    console.log(results)
    customerData = results
  
    if (results.length == 0)
      NSB.MsgBox(`No customers returned`)
    else {
      console.log(`Parsed JSON is ${results}.`)
      console.log(`The first row: ${results[0]}.`)
      let message = ""
        for (i = 0; i <= results.length - 1; i++) {
      drpSelect.addItem(results[i][1]) }
    }
  } else
      NSB.MsgBox(`Error: ${req.status}.`)
}
drpSelect.onclick=function(s){
  let name = ''
  let state = ''
  let returnedNames = []
  if (typeof (s) == 'object') {
    return
  } else {
      drpSelect.value = s
      name = drpSelect.selection
      for (i = 0; i <= customerData.length - 1; i++) {
        if (name == customerData[i][1]) {
          state = customerData[i][4]
          break
        }
      }
      for (i = 0; i <= customerData.length - 1; i++) {
        if (state == customerData[i][4])
          returnedNames.push(customerData[i][1])
      } 
          query = `SELECT name FROM customer WHERE state = "${state}"`
          req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=rje33080&pass=Bluejays$1!&database=rje33080&query=" + query)
          if (req.status == 200) {
            results = JSON.parse(req.responseText)
            if (results.length == 0)
              NSB.MsgBox(`There are no customers.`)
            else {
              let message = ""
                for (i = 0; i <= results.length - 1; i++) {
                  message = message + results[i][0] + "\n"
              txtaNames.value = message }
            }
          } else
              NSB.MsgBox(`Error code: ${req.status}.`)
    }
}
btnDelete.onclick=function(){
  ChangeForm(customerDelete)
}