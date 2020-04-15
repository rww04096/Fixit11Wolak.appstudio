customerUpdate.onshow=function(){
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
          drpUpdate.addItem(results[i][1]) 
        }
    }
  } else
      NSB.MsgBox(`Error: ${req.status}.`)
}
btnUpdate.onclick=function(){
    let name1 = inptUpdate.value
    let name2 = drpUpdate.selection
    query = "UPDATE customer SET name =" + '"' + name1 + '"' + " WHERE name = " + '"' + name2 + '"'
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ksw80857&pass=VTEHome8-5!&database=ksw80857&query=" + query)
        if (req.responseText == 500) {
          NSB.MsgBox("Name updated")
      } else {
          NSB.MsgBox("There was a problem updating the name.")
          }
      if (req.status == 200) {
    results = JSON.parse(req.responseText)
    console.log(results)
        if (results.length == 0) {
          NSB.MsgBox(`No customers.`)
      } else {
          for (i = 0; i <= results.length - 1; i++) {
            message = message + results[i][1] + "\n"
            txtaUpdate.value = message
          }
      }
    } else {
      NSB.MsgBox("Error")
    }
}
 
 