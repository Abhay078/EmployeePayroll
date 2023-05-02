
var url_str = window.location.href;
let url = new URL(url_str);
let parameter = url.searchParams;
let id = parameter.get('id');
if (id >= 1) {
    fetch('http://localhost:3000/employees/' + id)
        .then(response => {
            console.log(response);
            return response.json()
        })
        .then(data => {
            document.getElementById('name').value = data.name
            const profileValue = data.pic;
            const profileButton = document.querySelector(`input[name="profile"][value="${profileValue}"]`);
            if (profileButton) {
                profileButton.checked = true;
            }
            else {
                console.log(profileValue);
            }

            const genderValue = data.gender;
            const genderCheckbox = document.querySelector(`input[name="gender"][value=${genderValue}]`);
            if (genderCheckbox) {
                genderCheckbox.checked = true;
            }

            document.getElementById('salary').value = data.salary;

            const departmentValue = data.departments;
            const departmentCheckboxes = document.querySelectorAll('input[name="checkbox"]')
            departmentCheckboxes.forEach(element => {
                if (departmentValue.includes(element.value)) {
                    element.checked = true;
                }
            });

            document.getElementById('day').value = data.startDate.slice(0, 2)
            if (data.startDate.includes('March') || data.startDate.includes('April')) {
                document.getElementById('month').value = data.startDate.slice(3, 8)
                document.getElementById('year').value = data.startDate.slice(9)
            }
            else if (data.startDate.includes('June') || data.startDate.includes('July') || data.startDate.includes('Sept')) {
                document.getElementById('month').value = data.startDate.slice(3, 7)
                document.getElementById('year').value = data.startDate.slice(8)
            }
            else {
                document.getElementById('month').value = data.startDate.slice(3, 6)
                document.getElementById('year').value = data.startDate.slice(7)

            }

            document.getElementById('notes').value = data.note




        })
        .catch(error => console.error(error));
    }

    const submitButton = document.querySelector('button[type="submit"]');

    submitButton.addEventListener('click', submitForm);

    function submitForm() {
        var url_str = window.location.href;
        let url = new URL(url_str);
        let parameter = url.searchParams;
        let id = parameter.get('id');
        


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



