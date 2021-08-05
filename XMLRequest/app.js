// fetch("https://reqres.in/api/users?page=2")
//   .then((res) => res.json())
//   .then((res) => {
//     var output = document.querySelector("tbody");
//     res.data.map((user) => {
//       output.innerHTML += `
//         <tr>
//         <td>${user.first_name}</td>
//         <td>${user.last_name}</td>
//         <td>${user.email}</td>
//         <img src = ${user.avatar} />
//     </tr>
//         `;
//     });
//   });
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
                <td><img src = ${user.avatar} /></td>
            </tr>
        `;
    });
  }
};
request.open("GET", "https://reqres.in/api/users?page=2");
request.send();
