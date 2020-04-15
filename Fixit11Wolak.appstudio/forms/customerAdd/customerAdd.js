customerAdd.onshow=function(){
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
          drpAdd.addItem(results[i][1]) 
        }
    }
  } else
      NSB.MsgBox(`Error: ${req.status}.`)
}
btnAddCus.onclick=function(){
  query = `INSERT INTO customer (name, street, city, state, zipcode) VALUES ("Jesse Antiques", "1113 F St", "Omaha", "NE", "68178")`
  alert(query)
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=rje33080&pass=Bluejays$1!&database=rje33080&query=" + query)
  if (req.status == 200) {
    results = JSON.parse(req.responseText)
    if (req.responseText == 500) {
      NSB.MsgBox(`The customer is added to the database.`)
    } else {
        NSB.MsgBox(`Customer not added.`)
      } 
  } else
      NSB.MsgBox(`: ${req.status}.`)
  query = `SELECT * FROM customer`
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=rje33080&pass=Bluejays$1!&database=rje33080&query=" + query)
  if (req.status == 200) {
    results = JSON.parse(req.responseText)
    console.log(results)
    if (results.length == 0)
      NSB.MsgBox(`No customers.`)
    else {
      let message = ''
      for (i = 0; i <= results.length - 1; i++) {
        message = message + results[i][1] + "\n"
        txtaAdd2.value = message
      }
    }
  } else
      NSB.MsgBox(`Error: ${req.status}.`)
}
btnToUpdate.onclick=function(){
  ChangeForm(customerUpdate)
}