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


//dynamicConentDiv.appendChild();