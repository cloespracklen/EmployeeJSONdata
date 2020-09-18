var shortListpromise = d3.json("employee.json")

var setBanner = function(message)
{
    d3.select("#banner")
.text(message);
}

var drawTable =function(employees)
{
  var rows= d3.select("#employeesTable tbody")
                      .selectAll("tr")
  .data(employees)
  .enter()
  .append("tr")
  
  rows.append("td")
    .classed("one",true)
    .text(function(employees)
          {
      return employees.bio;
      
              });
rows.append("td")
    .classed("two",true)
.text(function(employees)
      { 
return employees.email
});
rows.append("td")
    .classed("three",true)
.text(function(employees)
      { 
return employees.firstName
    });
    rows.append("td")
    .classed("four",true)
.text(function(employees)
      { 
return employees.lastName
    });
rows.append("td")
    .classed("five",true)
.text(function(employees)
      { 
return employees.phone
});
   rows.append("td")
    .classed("six",true)
.text(function(employees)
      { 
return employees.title
});
rows.append("td")
    .classed("seven",true)
.text(function(employees)
      { 
return employees.unit
});
rows.append("td")
    .append("img")
    .attr("src", function(employees)
         {
    return employees.photo;
});}
    
   
   







var succFCN= function(employees)


{
    var shortList=employees.slice(0,2);
    console.log("employees", shortList);
    setBanner("Information About Employees is on its way!");
    drawTable(employees);
}

var failFCN= function(err)

{ 
console.log("did not find file",err);
    setBanner("Employees are gone!");
}

shortListpromise.then(succFCN, failFCN)
