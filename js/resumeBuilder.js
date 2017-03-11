/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var bio = {
    "name": "John doe",
    "role": "Web Developer",
    "biopic": "images/fry.jpg",
    "skills": ["HTML", "Python","JavaScript","CSS"],
    "welcomeMessage": "Please enjoy my resume",
    "contacts":{
        "location": "Seattle, WA",
        "mobile": "111-222-333",
        "email": "mail@mail.com",
        "github": "http://github.com",
    },
};


var work = {
    "jobs":[
        {
            "title": "Web Developer",
            "employer": "Best Web",
            "dates": "2010 - 2017",
            "location": "Seattle, WA",
            "description": "Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text",
        },
        {
            "position": "Consultant",
            "employer": "Nice Web",
            "dates": "2005- 2009",
            "location": "NYC, NY",
            "description": "Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text",
        },
    ]
};

var education =
 {
    "schools": [
        {
            "name": "Udacity",
            "location": "Mountain View, CA",
            "degree":"Nano degree",
            "majors": ["Intro to Programing"],
            "dates" : "2017-2018",
            "url": "http://www.udacity.com"
        },
        {
            "name": "Tel Aviv University",
            "location": "Tel Aviv, Israel",
            "degree":"BA",
            "majors":["CS", "Business Managment"],
            "dates":"1990-1994",
            "url": "http://www.tau.edu"
        }
],
    "onlineCourses": [
        {
            "title": "Online Course 1",
            "school": "Udacity",
            "dates": "2016-2017",
            "url": "http://www.udacity.com",
        },
        {
            "title": "Online Course 2",
            "school": "Udacity",
            "dates": "2016-2017",
            "url": "http://www.udacity.com",
        },
    ]
};

var projects =
{
    "projects": [
        {
            "title": "Project 1",
            "dates": "2014",
            "description": " La la La la La la La la La la La la La la La la La la La la La la La la La la La la La la La la La la La la",
            "images" : ["images/fry.jpg"]
        },
        {
            "title": "Project 2",
            "dates": "2015",
            "description": " La la La la La la La la La la La la La la La la La la La la La la La la La la La la La la La la La la La la",
            "images" : ["images/fry.jpg"]
        }
    ]
};

projects.display =  function()
{
    if(projects.projects.length > 0)
    {
        projects.projects.forEach( function (project) {
            $("#projects").append(HTMLprojectStart);
            var formattedProjectTitle =
            HTMLprojectTitle.replace("%data%", project.title);
            $(".project-entry:last").append(formattedProjectTitle);
            var formattedProjectDates =
            HTMLprojectDates.replace("%data%", project.dates);
            $(".project-entry:last").append(formattedProjectDates);
            var formattedProjectDescription =
            HTMLprojectDescription.replace("%data%", project.description);
            $(".project-entry:last").append(formattedProjectDescription);
            if (project.images.length > 0) {
                project.images.forEach(function (image) {
                    var formattedprojectImages =
                    HTMLprojectImage.replace("%data%", image);
                    $(".project-entry:last").append(formattedprojectImages);
                });
            };
        });
    };
};

work.display = function()
// Format and Present Work Experiance Elemant
{
    if(work.jobs.length > 0)
    {

        work.jobs.forEach(function (job) {
            $("#workExperience").append(HTMLworkStart);
            var formattedWorkTitle =
            HTMLworkTitle.replace("%data%", job.title);
            //$("#workExperience").append(formattedWorkPosition);
            var formattedWorkEmployer =
            HTMLworkEmployer.replace("%data%", job.employer);
            //$("#workExperience").append(formattedWorkEmployer);
            var formattedEployerHead =
            formattedWorkEmployer + formattedWorkTitle;
            $(".work-entry:last").append(formattedEployerHead);
            var formattedWorkDates =
            HTMLworkDates.replace("%data%", job.dates);
            $(".work-entry:last").append(formattedWorkDates);
            var formattedWorkDescription =
            HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry:last").append(formattedWorkDescription);
            var formattedWorkLocation =
            HTMLworkLocation.replace("%data%", job.location);
            $(".work-entry:last").append(formattedWorkLocation);
        });
    };

}

education.display = function()
// format and display the Education object
{
    if(education.schools.length > 0)
    {

        education.schools.forEach( function (school) {
            $("#education").append(HTMLschoolStart)
            var FormattedschoolName =
            HTMLschoolName.replace("%data%", school.name);
            var FormattedschoolDegree =
            HTMLschoolDegree.replace("%data%", school.degree);
            var FormattedschoolHead = FormattedschoolName + FormattedschoolDegree;
            $(".education-entry:last").append(FormattedschoolHead);
            var FormattedschoolDates =
            HTMLschoolDates.replace("%data%", school.dates);
            $(".education-entry:last").append(FormattedschoolDates);
            var FormattedschoolLocation =
            HTMLschoolLocation.replace("%data%", school.location);
            $(".education-entry:last").append(FormattedschoolLocation);
            if (school.majors.length > 0) {
                school.majors.forEach( function (major) {
                    var FormattedschoolMajor =
                    HTMLschoolMajor.replace("%data%", major);
                    $(".education-entry:last").append(FormattedschoolMajor);
                });
            };
        });
    };

    if(education.onlineCourses.length > 0)
    {
        $(".education-entry:last").append(HTMLonlineClasses);

        education.onlineCourses.forEach( function (course) {
            var FormattedsonlineTitle =
            HTMLonlineTitle.replace("%data%", course.title);
            var FormattedonlineSchool =
            HTMLonlineSchool.replace("%data%", course.school);
            var FormattedonlineHead = FormattedsonlineTitle + FormattedonlineSchool;
            $(".education-entry:last").append(FormattedonlineHead);
            var FormattedonlinelDates =
            HTMLonlineDates.replace("%data%", course.dates);
            $(".education-entry:last").append(FormattedonlinelDates);
            var FormattedonlineURL =
            HTMLonlineURL.replace("%data%", course.url);
            $(".education-entry:last").append(FormattedonlineURL);

        });
    };
};


bio.display = function() {

    // replace the HTML place holders with the BIO's data
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedPhone = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);




    //Display Header Bio Info
    $("#header").prepend(formattedName);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedPic);
    $("#header").append(formattedWelcome);

    // Display topContacts
    $("#topContacts").append(formattedPhone);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedLocation);

    //Display Skills

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach( function (skill) {
            var formattedSkills
            = HTMLskills.replace("%data%", skill);
        $("#skills").append(formattedSkills);
    });
    };


    // Display FooterContacts
    $("#footerContacts").append(formattedPhone);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedLocation);



};

// call the bio.display function
bio.display();

// call the function displayWork();
work.display();

// Call the display function of the Projects object to update Projects ection on the CV
projects.display();

// call the display function of the Education object
education.display();

//present the button to Internationlise the Name in the bio section.
//the click call the inName function in the helper.js
$("#main").append(internationalizeButton);

//present the google map with the pins of the location of the jobs and schools
$("#mapDiv").append(googleMap);
