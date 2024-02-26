// Add your code here

//let input = document.querySelector("form");
//fetch("/submit").then((input) => {
function display_personal_info(input) {
  //input.addEventListener("submit", (e) => {
  console.log("Name: " + input.Name.value);
  console.log("Username: " + input.Username.value);
  console.log("Email: " + input.Email.value);
  console.log("Date of Birth: " + input.Date_of_Birth.value);
  let pronums = "Preferred Pronouns: ";
  if (input.Pronouns[0].checked == true) {
    pronums += "She/Her";
  }
  if (input.Pronouns[1].checked == true) {
    pronums += "He/Him";
  }
  if (input.Pronouns[2].checked == true) {
    pronums += "They/Them";
  }
  if (input.Pronouns[3].checked == true) {
    pronums += "unknown";
  }
  //console.log("a " + input.Pronouns[1].checked);
  console.log(pronums);
}
//});

//document.getElementById("submit").onclick = display_personal_info(this.form);
