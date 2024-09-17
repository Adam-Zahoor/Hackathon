var form = document.getElementById('myForm');
var resumeDisplay = document.getElementById('displayingResume');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var edu = document.getElementById('edu').value;
    var exp = document.getElementById('exp').value;
    var skills = document.getElementById('skills').value;
    // generating the resume
    var resume = "\n    <h1><b>Resume</b></h1>\n    <br>\n    <h2>Personal Information</h2>\n    <p><b>Name: </b>".concat(name, "</p>\n    <p><b>Age: </b>").concat(age, "</p>\n    <p><b>Email: </b>").concat(email, "</p>\n\n    <h2>Education:</h2>\n    <p>").concat(edu, "</p>\n\n    <h2>Experience:</h2>\n    <p>").concat(exp, "</p>\n\n    <h2>Skills:</h2>\n    <p>").concat(skills, "</p>\n    ");
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resume;
    }
    else {
        console.error('The resume display element is missing');
    }
    ;
});
