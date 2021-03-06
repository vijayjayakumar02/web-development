const signUp = (e) => {
  let formData = JSON.parse(sessionStorage.getItem("formData")) || [];
  let exist =
    formData.length &&
    JSON.parse(sessionStorage.getItem("formData")).some(
      (data) =>
        data.fname.toLowerCase() ==
          document.getElementById("fname").value.toLowerCase() &&
        data.lname.toLowerCase() ==
          document.getElementById("lname").value.toLowerCase()
    );
  if (!exist && error_fname != false) {
    formData.push({
      fname: document.getElementById("fname").value,
      lname: document.getElementById("lname").value,
      email: document.getElementById("email").value,
      pwd: document.getElementById("password").value,
      dept: document.getElementById("dept").value,
    });
    sessionStorage.setItem("formData", JSON.stringify(formData));
    console.log(sessionStorage.getItem("formData"));
    disdata();
    document.querySelector("form").reset();
    document.getElementById("fname").focus();
  } else {
    alert("Sorry you have registered already...");
  }
  e.preventDefault();
};
function disdata() {
  console.log(sessionStorage.getItem("formData"));
  if (sessionStorage.getItem("formData")) {
    var output = document.querySelector("tbody");
    output.innerHTML = " ";
    JSON.parse(sessionStorage.getItem("formData")).forEach((data, index) => {
      data.fname = "Invalid";
      output.innerHTML += `
          <tr>
              <td>${data.fname}</td>
              <td>${data.lname}</td>
              <td>${data.email}</td>
              <td>${data.pwd}</td>
              <td>${data.dept}</td>
              <span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span>
          </tr>     
        `;
    });
  }
}
disdata();
