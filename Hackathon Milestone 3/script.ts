const form = document.getElementById('myForm')as HTMLFormElement;
const resumeDisplay = document.getElementById('displayingResume') as HTMLDivElement;

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value
    const age = (document.getElementById('age') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const contact = (document.getElementById('contact') as HTMLInputElement).value
    const edu = (document.getElementById('edu') as HTMLInputElement).value
    const exp = (document.getElementById('exp') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

    // generating the resume

    const resume = `
    <h1><b>Resume</b></h1>
    <br>
    <h2>Personal Information</h2>
    <p><b>Name: </b>${name}</p>
    <p><b>Age: </b>${age}</p>
    <p><b>Email: </b>${email}</p>

    <h2>Education:</h2>
    <p>${edu}</p>

    <h2>Experience:</h2>
    <p>${exp}</p>

    <h2>Skills:</h2>
    <p>${skills}</p>
    `;

    if(resumeDisplay){
        resumeDisplay.innerHTML = resume;
    } else {
        console.error('The resume display element is missing');
    };
});