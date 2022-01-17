$("input[name='delivery']").on("click", function () {
  $(".deladdress").toggle(this.value == "50" && this.checked);
});

let price = function (size, crust, toppings, quantity, deliver) {
  return ((size + crust + toppings) * quantity) + deliver
};

let toppingsPrice = function checkTotal() {
  document.form.total.value = '';
  var sum = 0;
  for (i = 0; i < document.orderform.toppings.length; i++) {
    if (document.orderform.toppings[i].checked) {
      sum = sum + parseInt(document.orderform.toppings[i].value);
    }
  }
  document.orderform.total.value = sum;
}

function totalprice(form) {
  let fname = document.forms["orderform"]["fname"].value;
  if (fname == "") {
    alert("First name must be filled out");
    return false;
  }
  let lname = document.forms["orderform"]["lname"].value;
  if (lname == "") {
    alert("Last name must be filled");
    return false;
  }
  let crust = parseInt(document.forms["orderform"]["crust"].value);
  if (crust == "") {
    alert("Crust must be filled");
    return false;
  }
  let size = parseInt(document.forms["orderform"]["sizes"].value);
  if (size == "") {
    alert("size must be filled");
    return false;
  }
  
  let quantity = parseInt(document.forms["orderform"]["quantity"].value);
  if (quantity == "") {
    alert("Quantity must be filled");
    return false;
  }
  let toppings = parseInt(document.getElementById("total").value);
  if (toppings == "") {
    alert("Toppings must be filled");
    return false;
  }
  
  let deliver = parseInt(document.querySelector('input[name="delivery"]:checked').value);

  let result = price(size, crust, toppings, quantity, deliver);
  alert(result);


  let fullName = fname + (" ") + lname;
  document.getElementById("custname").innerHTML = ("Name: ") + fullName;
  document.getElementById("output").innerHTML = ("Total order is = ") + result + (" KSH");
}