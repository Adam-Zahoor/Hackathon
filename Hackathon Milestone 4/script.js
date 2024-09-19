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
    var resume = "\n    <h1><b>Editable Resume</b></h1>\n    <br>\n    <h2>Personal Information</h2>\n    <p><b>Name: </b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Age: </b><span contenteditable=\"true\">").concat(age, "</span></p>\n    <p><b>Email: </b><span contenteditable=\"true\">").concat(email, "</span></p>\n\n    <h2>Education:</h2>\n    <p contenteditable=\"true\">").concat(edu, "</p>\n\n    <h2>Experience:</h2>\n    <p contenteditable=\"true\">").concat(exp, "</p>\n\n    <h2>Skills:</h2>\n    <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resume;
    }
    else {
        console.error('The resume display element is missing');
    }
    ;
});
