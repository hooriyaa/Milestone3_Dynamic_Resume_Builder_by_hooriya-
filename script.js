var _a;
(_a = document
    .getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    //type assertion
    var nameEle = document.getElementById("name");
    var emailEle = document.getElementById("email");
    var contactNoEle = document.getElementById("contactNo");
    var educationEle = document.getElementById("education");
    var experienceEle = document.getElementById("experience");
    var skillsEle = document.getElementById("skills");
    if (nameEle &&
        emailEle &&
        contactNoEle &&
        educationEle &&
        experienceEle &&
        skillsEle) {
        var name_1 = nameEle.value;
        var email = emailEle.value;
        var contactNo = contactNoEle.value;
        var education = educationEle.value;
        var experience = experienceEle.value;
        var skills = skillsEle.value;
        var resumeOutput = "\n<h1>Resume</h1>\n<p><b>Name:</b>".concat(name_1, "\n<p><b>Email:</b>").concat(email, "\n<p><b>Contact No:</b>").concat(contactNo, "\n\n<h3>Education:</h3>\n<p>").concat(education, " </p>\n\n<h3>Experience:</h3>\n<p>").concat(experience, " </p>\n\n<h3>Skills:</h3>\n<p>").concat(skills, " </p>\n");
        var outputElement = document.getElementById("resumeOutput");
        if (outputElement) {
            outputElement.innerHTML = resumeOutput;
        }
        else {
            console.error("Unable to display the resume. The output element is missing.");
        }
    }
    else {
        console.error("Error: Please fill out all the required fields. ");
    }
});
