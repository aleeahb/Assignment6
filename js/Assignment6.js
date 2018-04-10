function CreateCustomer()
{
 var objRequest = new XMLHttpRequest();
 var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/CreateCustomer";

 //Collect Customer data from web page
 var customerid = document.getElementById("custid").value;
 var customername = document.getElementById("custname").value;
 var customercity = document.getElementById("custcity").value;

 //Create the parameter string
 var newcustomer = '{"CustomerID":"' + customerid + '","CompanyName":"' + customername + '","City":"' + customercity +'"}';

 //Checking for AJAx operation return
 objRequest.onreadystatechange = function()
 {
 if (objRequest.readyState == 4 && objRequest.status == 200)
 {
 var result = JSON.parse(objRequest.responseText);
 OperationResult1(result);
 }
 }

 //Start AJAX request
 objRequest.open("POST", url, true);
 objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
 objRequest.send(newcustomer);

}
function OperationResult1(output)
{
 if (output.WasSuccessful == 1)
 {
 document.getElementById("result").innerHTML = "The operation was successful!"
 }
 else
 {
 document.getElementById("result").innerHTML = "The operation was not successful!" + "<br>" + output.Exception;
 }
}

function MenuChoice()
{
 if (document.getElementById("menu").value == "Display Section 1")
 {
 document.getElementById("section1").style.visibility = "visible";
 document.getElementById("section2").style.visibility = "hidden";
 document.getElementById("section3").style.visibility = "hidden";
 }
 else if (document.getElementById("menu").value == "Display Section 2")
 {
 document.getElementById("section1").style.visibility = "hidden";
 document.getElementById("section2").style.visibility = "visible";
 document.getElementById("section3").style.visibility = "hidden";
 }
 else if (document.getElementById("menu").value == "Display Section 3")
 {
 document.getElementById("section1").style.visibility = "hidden";
 document.getElementById("section2").style.visibility = "hidden";
 document.getElementById("section3").style.visibility = "visible";
 }
 else 
 {
 document.getElementById("section1").style.visibility = "hidden";
 document.getElementById("section2").style.visibility = "hidden";
 document.getElementById("section3").style.visibility = "hidden";
 }
}

function UpdateAddress()
{
 var objRequest = new XMLHttpRequest();
 var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/updateOrderAddress";

 //Collect Customer data from web page
 var orderid = document.getElementById("ordernumber").value;
 var name = document.getElementById("shipname").value;
 var city = document.getElementById("shipcity").value;
 var address = document.getElementById("shipaddress").value;
 var code = document.getElementById("shipcode").value;

 //Create the parameter string
 var newaddress = '{"OrderID":' + orderid + '"ShipName":"' + name + '"ShipAddress":"'+ address +'"ShipCity":"' + city + '"ShipPostcode":"' + code +'"}';

 //Checking for AJAx operation return
 objRequest.onreadystatechange = function()
 {
 if (objRequest.readyState == 4 && objRequest.status == 200)
 {
 var result = JSON.parse(objRequest.responseText);
 OperationResult2(result);
 }
 }

 //Start AJAX request
 objRequest.open("POST", url, true);
 objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
 objRequest.send(newaddress);
}
function OperationResult2(output2)
{
 if (output2.WasSuccessful == 1)
 {
 document.getElementById("statuscode").innerHTML = "The operation was successful!";
 }
 else
 {
 document.getElementById("statuscode").innerHTML = "The operation was not successful!";
 }
}

function DeleteCustomer()
{
 var objRequest = new XMLHttpRequest();
 var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/deleteCustomer/";
 url +=document.getElementById("customerdel").value;
 var delcust = document.getElementById("customerdel").value;


 //Checking for AJAx operation return
 objRequest.onreadystatechange = function()
 {
 if (objRequest.readyState == 4 && objRequest.status == 200)
 {
 var result3 = JSON.parse(objRequest.responseText);
 OperationResult3(result3);
 }
 }

 //Start AJAX request
 objRequest.open("GET", url, true);
 objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
 objRequest.send(delcust);

}
function OperationResult3(output3)
{
 if (output3.WasSuccessful == 1)
 {
 document.getElementById("delresult").innerHTML = "The operation was successful!";
 }
 else (output3.WasSuccessful == 0)
 {
  document.getElementById("delresult").innerHTML = "The operation was successful!";
 }
}
 

