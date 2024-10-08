const form = document.getElementById('detailsForm') as HTMLFormElement;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  

  const firstName = (document.getElementById('firstName') as HTMLInputElement).value;
  const lastName = (document.getElementById('lastName') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const contact = (document.getElementById('contact') as HTMLInputElement).value;
  const education1 = (document.getElementById('education1') as HTMLInputElement).value;
  const education2 = (document.getElementById('education2') as HTMLInputElement).value;
  const experience1 = (document.getElementById('experience1') as HTMLInputElement).value;
  const experience2 = (document.getElementById('experience2') as HTMLInputElement).value;
  const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

  const userDetails = {
    firstName,
    lastName,
    email,
    contact,
    education: [education1, education2],
    experience: [experience1, experience2],
    skills,
  };

 
  localStorage.setItem('userDetails', JSON.stringify(userDetails));

  window.location.href = "main.html";
});
