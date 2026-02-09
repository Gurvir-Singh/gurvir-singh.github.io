//S = skills, E = Experience, C = Certifications, R = Resume
var dynamicViewState = 'S';

var skillsButton = document.getElementById("SkillsButton");
var expButton = document.getElementById("ExpButton");
var certButton = document.getElementById("CertButton");
var resumeButton = document.getElementById("ResumeButton");

var dynamicConentDiv = document.getElementById("dynamicContent");


var skillsContent = document.getElementById("MySkills");
var expContent = document.getElementById("MyExperience");
var certContent = document.getElementById("MyCertifications");
var resumeConent = document.getElementById("Resume");


skillsContent.style.display = "block";
expContent.style.display = "none";
certContent.style.display = "none";
resumeConent.style.display = "none";

skillsButton.style.cursor="default";
expButton.style.cursor="pointer";
certButton.style.cursor="pointer";
resumeButton.style.cursor="pointer";

function dispSkills() {
    skillsButton.style.cursor="default";
    expButton.style.cursor="pointer";
    certButton.style.cursor="pointer";
    resumeButton.style.cursor="pointer";

    skillsContent.style.display = "block";
    expContent.style.display = "none";
    certContent.style.display = "none";
    resumeConent.style.display = "none";
}

function dispExp() {
    skillsButton.style.cursor="pointer";
    expButton.style.cursor="default";
    certButton.style.cursor="pointer";
    resumeButton.style.cursor="pointer";

    skillsContent.style.display = "none";
    expContent.style.display = "block";
    certContent.style.display = "none";
    resumeConent.style.display = "none";
}

function dispCert() {
    skillsButton.style.cursor="pointer";
    expButton.style.cursor="pointer";
    certButton.style.cursor="default";
    resumeButton.style.cursor="pointer";

    skillsContent.style.display = "none";
    expContent.style.display = "none";
    certContent.style.display = "block";
    resumeConent.style.display = "none";
}

function dispResume() {
    skillsButton.style.cursor="pointer";
    expButton.style.cursor="pointer";
    certButton.style.cursor="pointer";
    resumeButton.style.cursor="default";

    skillsContent.style.display = "none";
    expContent.style.display = "none";
    certContent.style.display = "none";
    resumeConent.style.display = "block";
}

skillsButton.onclick = dispSkills;
expButton.onclick = dispExp;
certButton.onclick = dispCert;
resumeButton.onclick = dispResume;

contactSubmitButton = document.getElementById("submitButton");

function displayWIPPopup() {
    window.alert("This feature is still under development, sorry!")
}

contactSubmitButton.onclick = displayWIPPopup;

//dynamicConentDiv.appendChild();