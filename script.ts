// Add an event listener to the resume form to handle submission
document
  .getElementById("resumeForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();

    //type assertion
    const nameEle = document.getElementById("name") as HTMLInputElement;
    const emailEle = document.getElementById("email") as HTMLInputElement;
    const contactNoEle = document.getElementById(
      "contactNo"
    ) as HTMLInputElement;
    const educationEle = document.getElementById(
      "education"
    ) as HTMLInputElement;
    const experienceEle = document.getElementById(
      "experience"
    ) as HTMLInputElement;
    const skillsEle = document.getElementById("skills") as HTMLInputElement;

    // Retrieve the values from the form elements
    if (
      nameEle &&
      emailEle &&
      contactNoEle &&
      educationEle &&
      experienceEle &&
      skillsEle
    ) {
      // Retrieve the values from the form elements
      const name = nameEle.value;
      const email = emailEle.value;
      const contactNo = contactNoEle.value;
      const education = educationEle.value;
      const experience = experienceEle.value;
      const skills = skillsEle.value;

      // Construct the resume output using a template literal
      const resumeOutput = `
<h1>Resume</h1>
<p><b>Name:</b> ${name}
<p><b>Email:</b> ${email}
<p><b>Contact No:</b> ${contactNo}

<h3>Education:</h3>
<p>${education} </p>

<h3>Experience:</h3>
<p>${experience} </p>

<h3>Skills:</h3>
<p>${skills} </p>
`;
      const outputElement = document.getElementById("resumeOutput");
      if (outputElement) {
        outputElement.innerHTML = resumeOutput;
      } else {
        console.error(
          "Unable to display the resume. The output element is missing."
        );
      }
    } else {
      console.error("Error: Please fill out all the required fields. ");
    }
  });
