/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var bio = {
    "name": "John doe",
    "role": "Web Developer",
    "picture": "images/fry.jpg",
    "skills": ["HTML", "Python","JavaScript","CSS"],
    "contacts":{
        "location": "Seattle, WA",
        "phone": "111-222-333",
        "email": "mail@mail.com"
    },
};

var work = {
    "jobs":[
        {
            "position": "Web Developer",
            "employer": "Best Web",
            "years": "2010 - 2017",
            "location": "Seattle, WA",
            "description": "Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text",
        },
        {
            "position": "Consultant",
            "employer": "Nice Web",
            "years": "2005- 2009",
            "location": "NYC, NY",
            "description": "Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text, Text",
        },
    ]
};

var education =
 {
    "schools": [
        {
        "school": "Udacity",
        "location": "Mountain View, CA",
        "degree":"Nano degree",
        "major": "Intro to Programing",
        "years" : "2017",
    },
    {
        "school": "UTA",
        "location": "Tel Aviv, Israel",
        "degree":"BA",
        "major":"CS",
        "years":"1990-1994",
    }
    ]

};

var projects =
{
    "project": [
        {
            "title": "Project 1",
            "dates": "2014",
            "description": " La la La la La la La la La la La la La la La la La la La la La la La la La la La la La la La la La la La la",
            "image" : "images/project.jpg",
        },
        {
            "title": "Project 2",
            "dates": "2015",
            "description": " La la La la La la La la La la La la La la La la La la La la La la La la La la La la La la La la La la La la",
            "image" : "images/project.jpg",
        }
    ]
};

projects.display =  function()
{
    if(projects.project.length > 0)
    {
        for (var i=0; i < projects.project.length; i++)
        {
            $("#projects").append(HTMLprojectStart);
            var formattedProjectTitle =
            HTMLprojectTitle.replace("%data%", projects.project[i].title);
            $(".project-entry:last").append(formattedProjectTitle);
            var formattedProjectDates =
            HTMLprojectDates.replace("%data%", projects.project[i].dates);
            $(".project-entry:last").append(formattedProjectDates);
            var formattedProjectDescription =
            HTMLprojectDescription.replace("%data%", projects.project[i].description);
            $(".project-entry:last").append(formattedProjectDescription);
        }
    }
};

work.display = function()
// Format and Present Work Experiance Elemant
{
    if(work.jobs.length > 0)
    {

        for (var i=0; i < work.jobs.length; i++) {
            $("#workExperience").append(HTMLworkStart);
            var formattedWorkPosition =
            HTMLworkTitle.replace("%data%", work.jobs[i].position);
            //$("#workExperience").append(formattedWorkPosition);
            var formattedWorkEmployer =
            HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            //$("#workExperience").append(formattedWorkEmployer);
            var formattedEployerTitle =
            formattedWorkEmployer + formattedWorkPosition;
            $(".work-entry:last").append(formattedEployerTitle);
            var formattedWorkYears =
            HTMLworkDates.replace("%data%", work.jobs[i].years);
            $(".work-entry:last").append(formattedWorkYears);
            var formattedWorkDescription =
            HTMLworkDescription.replace("%data%", work.jobs[i].description);
            $(".work-entry:last").append(formattedWorkDescription);
            var formattedWorkLocation =
            HTMLworkLocation.replace("%data%", work.jobs[i].location);
            $(".work-entry:last").append(formattedWorkLocation);
        }
    }

}

education.display = function()
// format and display the Education object
{
    if(education.schools.length > 0)
    {

        for (var i=0; i < education.schools.length; i++)
        {
            $("#education").append(HTMLschoolStart)
            var FormattedschoolName =
            HTMLschoolName.replace("%data%", education.schools[i].school);
            $(".education-entry:last").append(FormattedschoolName);
            var FormattedschoolDegree =
            HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            $(".education-entry:last").append(FormattedschoolDegree);
            var FormattedschoolDates =
            HTMLschoolDates.replace("%data%", education.schools[i].years);
            $(".education-entry:last").append(FormattedschoolDates);
            var FormattedschoolMajor =
            HTMLschoolMajor.replace("%data%", education.schools[i].major);
            $(".education-entry:last").append(FormattedschoolMajor);
            var FormattedschoolLocation =
            HTMLschoolLocation.replace("%data%", education.schools[i].location);
            $(".education-entry:last").append(FormattedschoolLocation);
        }
    }
};


bio.display = function() {

    // replace the HTML place holders with the BIO's data
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedPic = HTMLbioPic.replace("%data%", bio.picture);
    var formattedPhone = HTMLmobile.replace("%data%", bio.contacts.phone);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    //Display Bio Info
    $("#header").prepend(formattedName);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedPic);
    $("#topContacts").prepend(formattedPhone);
    $("#topContacts").prepend(formattedEmail);
    $("#topContacts").prepend(formattedLocation);


    //Display Skills
    $("#header").append(HTMLskillsStart);
    if (bio.skills.length > 0){
        var formattedSkills = " ";
        for (var i = 0; i <bio.skills.length; i++) {
            formattedSkills
            = HTMLskills.replace("%data%", bio.skills[i]);
        $("#header").append(formattedSkills);
        }
    }

}

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
