function display() {
    fetch('http://localhost:3000/employees')
        .then(response => {
            console.log(response);
            return response.json()
        })
        .then((data) => {
            let tableBody = document.querySelector('#table_data');
            data.forEach(element => {
                tableBody.innerHTML += `<tr>
             <td style="padding-left: 10px;">
                 <img class="profile" src="${element.pic}" alt="Profile Pic">
             </td>
             <td>${element.name}</td>
             <td>${element.gender}</td>
             <td>${element.departments.map(dept => `<span class="department">${dept}</span>`).join('')}
             </td>
             <td>&#8377 ${element.salary}</td>
             <td>${element.startDate}</td>
             <td>
                 <button class="button" ><i class="fa-solid fa-trash-can" onclick="DeleteEmp(${element.id})"></i></button>
                 <button class="button"><i class="fa-solid fa-pen" onclick="EditEmp(${element.id})"></i></button>
             </td>
         </tr>`;

            });



        })
        .catch((error) => {
            console.error('Error:', error);
        });
}
document.addEventListener('DOMContentLoaded', () => {
    display();
})


function DeleteEmp(id) {

    fetch('http://localhost:3000/employees/' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .catch(error => console.error(error));


}

function EditEmp(id) {
    window.location = `./AddEmployeePage.html?id=${id}`;
}


