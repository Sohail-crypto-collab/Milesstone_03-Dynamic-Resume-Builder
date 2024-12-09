var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var country = document.getElementById('country').value;
    var area = document.getElementById('area').value;
    var currentJob = document.getElementById('currentJob').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    var education = document.getElementById('education').value;
    // Generate resume content
    var resumeContent = "\n        <h2>".concat(name, "</h2>\n        <p>Email: ").concat(email, "</p>\n        <p>Phone: ").concat(phone, "</p>\n        <p>Address: ").concat(address, "</p>\n        <p>City: ").concat(city, "</p>\n        <p>Country: ").concat(country, "</p>\n        <p>Area: ").concat(area, "</p>\n        <p>Currently Working: ").concat(currentJob, "</p>\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n        <h3>Experience</h3>\n        <p>").concat(experience, "</p>\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n    ");
    // Display generated resume
    var resumeOutput = document.getElementById('resumeOutput');
    if (resumeOutput) {
        resumeOutput.innerHTML = resumeContent;
    }
});
