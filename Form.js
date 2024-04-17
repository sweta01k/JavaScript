function myFun() {
    var Fname = document.getElementById('Fname').value;
    var Lname = document.getElementById('Lname').value;
    var date = document.getElementById('birth').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var stream = document.getElementById('stream').value;
    var time = document.getElementById('time').value;
    var email = document.getElementById('mail').value;
    var phoneNumber = document.getElementById('mobile').value;
    var collegeUrl = document.getElementById('college').value;
    var hobbies = document.querySelectorAll('input[name="box"]:checked');

    var hobbiesArray = [];
    hobbies.forEach(function (hobby) {
        hobbiesArray.push(hobby.value);
    });

    if(Fname && Lname && date && gender && stream && time && email && phoneNumber && collegeUrl && hobbiesArray){
    var object = `
    First Name: ${Fname}
    Last Name: ${Lname}
    Date of Birth: ${date}
    Gender: ${gender}
    Stream: ${stream}
    Birth Time: ${time}
    Email: ${email}
    Phone Number: ${phoneNumber}
    College URL: ${collegeUrl}
    Hobbies: ${hobbiesArray}`;

    console.log(object);
    alert(object);

    var result = {
        FirstName: Fname,
        LastName: Lname,
        DateofBirth: date,
        Gender: gender,
        Stream: stream,
        BirthTime: time,
        Email: email,
        PhoneNumber: phoneNumber,
        CollegeURL: collegeUrl,
        Hobbies: hobbiesArray.join(", ")
    };

    var formDetail = JSON.parse(localStorage.getItem("Details")) || [];
    formDetail.push(result);
    localStorage.setItem("Details", JSON.stringify(formDetail));

    document.getElementById('form').reset();

    displayFormData();
    }else{
        alert("Please fill the all fields");
    }
}

function displayFormData() {
    var formDetail = JSON.parse(localStorage.getItem("Details")) || [];
    var tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";

    formDetail.forEach(function (data, index) {
        var tableRow = document.createElement("tr");

        var indexCell = document.createElement("td");
        indexCell.innerText = index + 1;
        tableRow.appendChild(indexCell);

        var firstName = document.createElement("td");
        firstName.innerText = data.FirstName;
        tableRow.appendChild(firstName);

        var lastName = document.createElement("td");
        lastName.innerText = data.LastName;
        tableRow.appendChild(lastName);

        var dateOfBirth = document.createElement("td");
        dateOfBirth.innerText = data.DateofBirth;
        tableRow.appendChild(dateOfBirth);

        var genderCell = document.createElement("td");
        genderCell.innerText = data.Gender;
        tableRow.appendChild(genderCell);

        var streamCell = document.createElement("td");
        streamCell.innerText = data.Stream;
        tableRow.appendChild(streamCell);

        var birthTime = document.createElement("td");
        birthTime.innerText = data.BirthTime;
        tableRow.appendChild(birthTime);

        var eMail = document.createElement("td");
        eMail.innerText = data.Email;
        tableRow.appendChild(eMail);

        var hobbiesCell = document.createElement("td");
        hobbiesCell.innerText = data.Hobbies;
        tableRow.appendChild(hobbiesCell);

        var mobileNumber = document.createElement("td");
        mobileNumber.innerText = data.PhoneNumber;
        tableRow.appendChild(mobileNumber);

        var collegeURLCell = document.createElement("td");
        collegeURLCell.innerText = data.CollegeURL;
        tableRow.appendChild(collegeURLCell);

        var edit = document.createElement("td");
        var editButton = document.createElement("button");
        editButton.innerText = "Edit";
        editButton.addEventListener("click", function () {
            editItem(index);
        });
        edit.appendChild(editButton);
        tableRow.appendChild(edit);

        var deletes = document.createElement("td");
        var deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.addEventListener("click", function () {
            deleteItem(index);
        });
        deletes.appendChild(deleteButton);
        tableRow.appendChild(deletes);

        tableBody.appendChild(tableRow);
    });
}

function deleteItem(index) {
    var formDelete = confirm("Are you sure to delete this data !");
    if (formDelete) {
        var formDetail = JSON.parse(localStorage.getItem("Details")) || [];
        formDetail.splice(index, 1);
        localStorage.setItem("Details", JSON.stringify(formDetail));
        displayFormData();
    }
}

function editItem(index) {
    var formDetail = JSON.parse(localStorage.getItem("Details")) || [];
    var selectedData = formDetail[index];

    document.getElementById('Fname').value = selectedData.FirstName;
    document.getElementById('Lname').value = selectedData.LastName;
    document.getElementById('birth').value = selectedData.DateofBirth;

    if (selectedData.Gender === "Men") {
        document.getElementById('male').checked = true;
    } else {
        document.getElementById('female').checked = true;
    }

    document.getElementById('stream').value = selectedData.Stream;
    document.getElementById('time').value = selectedData.BirthTime;
    document.getElementById('mail').value = selectedData.Email;
    document.getElementById('mobile').value = selectedData.PhoneNumber;
    document.getElementById('college').value = selectedData.CollegeURL;

    var hobbies = document.querySelectorAll('input[name="box"]');
    hobbies.forEach(function (hobby) {
        if (selectedData.Hobbies.includes(hobby.value)) {
            hobby.checked = true;
        } else {
            hobby.checked = false;
        }
    });

    var submit= document.querySelector('button[type="button"]');
    submit.textContent = "Update";
    submit.onclick = function(){
        console.log("submit");
        updateData(index);
    };

}

function updateData(index) {
    console.log("update");
    var formDetails = JSON.parse(localStorage.getItem("Details")) || [];

    formDetails[index].FirstName = document.getElementById('Fname').value;
    formDetails[index].LastName = document.getElementById('Lname').value;
    formDetails[index].DateofBirth = document.getElementById('birth').value;
    formDetails[index].Gender = document.querySelector('input[name="gender"]:checked').value;
    formDetails[index].Stream = document.getElementById('stream').value;
    formDetails[index].BirthTime = document.getElementById('time').value;
    formDetails[index].Email = document.getElementById('mail').value;
    formDetails[index].PhoneNumber = document.getElementById('mobile').value;
    formDetails[index].CollegeURL = document.getElementById('college').value;
    formDetails[index].hobbies = document.querySelectorAll('input[name="box"]:checked').value;
    console.log("checkbox");

    localStorage.setItem("Details", JSON.stringify(formDetails));

    displayFormData();
}

window.onload = function () {
    displayFormData();
};