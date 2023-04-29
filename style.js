const submitButton = document.querySelector('button[type="submit"]');

submitButton.addEventListener('click', submitForm);

function submitForm() {
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
    let data = {
        'name': name,
        'gender': gender,
        'pic': profilepic,
        'salary': salary,
        'departments': department,
        'startDate': `${day} ${month} ${year}`,
        'note': document.getElementById('notes').value
    }
    var url_str = window.location.href;
    let url = new URL(url_str);
    let parameter = url.searchParams;
    let id = parameter.get('id');

    //update part if id available
    if (id >= 1) {
        fetch('http://localhost:3000/employees/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
    //it will add data if id not available
    else {
        fetch('http://localhost:3000/employees', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())

            .catch((error) => {
                console.error('Error:', error);
            });

    }


}



