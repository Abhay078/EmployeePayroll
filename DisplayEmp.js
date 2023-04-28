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
    DeleteEmp(id);
    window.location = `./AddEmployeePage.html`;
    const submitButton = document.querySelector('button[type="submit"]');
    let name = document.getElementById('name').value
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let salary = document.getElementById('salary').value;
    let profilepic = document.querySelector('input[name="profile"]:checked').value;
    let day = document.getElementById('day').value;
    let month = document.getElementById('month').value;
    let year = document.getElementById('year').value;
    let note = document.getElementById('notes').value;
    let departments = document.querySelectorAll('input[name="checkbox"]:checked');
    var department = [];
    for (var i = 0; i < departments.length; i++) {
        department.push(departments[i].value);
    }
    submitButton.addEventListener('click', event => {
        event.preventDefault();
    })
    let updatedData = {
        'name': name,
        'gender': gender,
        'pic': profilepic,
        'salary': salary,
        'departments': department,
        'startDate': `${day} ${month} ${year}`,
        'note': document.getElementById('notes').value
    }
    sub
    fetch('http://localhost:3000/employees/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData)
    })

}


