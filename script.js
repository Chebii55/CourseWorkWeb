function validateForm() {
    var x = document.forms["email"]["text"].value;
    if (x == "") {
      alert("Fill in text or email address!");
      return false;
    }
  }
