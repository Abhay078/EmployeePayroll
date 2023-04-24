function submitForm(){
    event.preventDefault();
    let name=document.getElementById('name').value;
    let gender=document.getElementById('gender').value;
    let salary=document.getElementById('salary').value;
    let profilepic=document.getElementById('image1').value;
    let day=document.getElementById('day').value;
    let month=document.getElementById('month').value;
    let year=document.getElementById('year').value;
    let note=document.getElementById('notes').value;
    let departments=document.querySelectorAll('input[name="checkbox"]:checked');
    var department=[];
    for(var i=0;i<departments.length;i++){
        department.push(departments[i].value);
    }


    console.log(
    `    Name:- ${name} 
    Profile-pic:- ${profilepic}
    Gender:- ${gender}
    Department:- ${department}
    Salary:- ${salary}
    Start Date:- ${day}-${month}-${year}
    Note:- ${note}`);

}
