customerDelete.onshow=function(){
  query = `SELECT * FROM customer`
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=rje33080&pass=Bluejays$1!&database=rje33080&query=" + query)
  if (req.status == 200) {
    results = JSON.parse(req.responseText)
    console.log(results)
    if (results.length == 0)
      NSB.MsgBox(`No customers.`)
    else {
      console.log(`Parsed JSON: ${results}.`)
        for (i = 0; i <= results.length - 1; i++) {
          drpDel.addItem(results[i][1]) 
        }
    }
  } else
      NSB.MsgBox(`Error: ${req.status}.`)
}
drpDel.onclick=function(s){
   if (typeof (s) == 'object') {
    return
  } else {
      drpDel.value = s
      customerName = drpDel.selection
      console.log(name)
      query = `DELETE FROM customer WHERE name = "${name}"`
      alert(query)
      req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=rje33080&pass=Bluejays$1!&database=rje33080&query=" + query)
      if (req.status == 200) {
        results = JSON.parse(req.responseText)
        if (req.responseText == 500) {
          NSB.MsgBox(`Customer deleted`)
          }
          else {
            NSB.MsgBox(`Customer was not deleted`)
          }
        } else
            NSB.MsgBox(`Error: ${req.status}.`)
      }
  query = `SELECT * FROM customer`
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=rje33080&pass=Bluejays$1!&database=rje33080&query=" + query)
  if (req.status == 200) {
    results = JSON.parse(req.responseText)
    console.log(results)
    if (results.length == 0)
      NSB.MsgBox(`There are no customers.`)
    else {
        let message = ''
        for (i = 0; i <= results.length - 1; i++) {
          message = message + results[i][1] + "\n"
          txtaDelete.value = message
        }
    }
  }
}
btnAdd.onclick=function(){
  ChangeForm(customerAdd)
}