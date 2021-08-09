// var output;
// fetch("https://reqres.in/api/users?page=2")
//   .then((res) => res.json())
//   .then((res) => {
//     output = document.querySelector("tbody");
//     res.data.map((user) => {
//       output.innerHTML += `
//         <tr>
//           <td>${user.first_name}</td>
//           <td>${user.last_name}</td>
//           <td>${user.email}</td>
//           <td><a href = "personal_info.html" onclick = "fetchDetails(${user.id})"><img src = ${user.avatar}  /></a></td>
//         </tr>
//         `;
//     });
//   });
// async function fetchDetails(data) {
//   const response = fetch("GET", `https://reqres.in/api/users/${data}`);
//   const parseddata = response.json();
//   if (response.status == 200) {
//     showUserData(parseddata.data);
//   }
// }
// function showUserData(data) {
//   console.log(data.email);
// }
// function fetchDetails(data) {
//   fetch(`https://reqres.in/api/users/${data}`)
//     .then((res) => res.json())
//     .then((res) => {
//       var out = document.querySelector("p");
//       out.innerHTML = res.data.email;
//     });
// }
const request = new XMLHttpRequest();
const output = document.querySelector("tbody");
request.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    const data = JSON.parse(this.responseText);
    data.data.map((user) => {
      output.innerHTML += `
            <tr>
                <td>${user.first_name}</td>
                <td>${user.last_name}</td>
                <td>${user.email}</td>
                <td><a href="personal_info.html"><img src = ${user.avatar} /></a></td>
            </tr>
        `;
    });
  }
};
request.open("GET", "https://reqres.in/api/users?page=2");
request.send();
