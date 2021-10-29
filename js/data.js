import { jobs } from "./../data/jobs.js";

const $workExperience = document.querySelector(".work-experience");
const $template = document.getElementById("works").content;
let $fragment = document.createDocumentFragment();


jobs.forEach(j => {
    let $time, $clone;
    $template.querySelector("h4").textContent = j.position;
    $template.querySelectorAll(".title p")[0].textContent = j.company;
    $template.querySelector(".title time").setAttribute("datetime", j.iniDate);
    $template.querySelector(".title time").textContent = getFormatedDate(j.iniDate);

    if (j.endDate) {
        $time = document.createElement("time");

        if (j.endDate === "present") {
            $time.textContent = " - Present";
        } else {
            $time.setAttribute("datetime", j.endDate);
            $time.textContent = " - " + getFormatedDate(j.endDate);
        }
        $template.querySelector(".title time").append($time);
    }

    $template.querySelectorAll(".detail p")[0].textContent = j.description;

    $clone = document.importNode($template, true);
    $fragment.append($clone)
});

$workExperience.appendChild($fragment);




function getFormatedDate(date) {
    let getFormatedDate = "";
    if (date) {
        const dateArray = date.split("-");
        getFormatedDate = `${getMonthName(parseInt(dateArray[1]))} ${dateArray[0]}`;
    }
    return getFormatedDate;
}

function getMonthName(month) {
    let name;
    switch (month) {
        case 1:
            name = "January";
            break;
        case 2:
            name = "February";
            break;
        case 3:
            name = "March";
            break;
        case 4:
            name = "April";
            break;
        case 5:
            name = "May";
            break;
        case 6:
            name = "June";
            break;
        case 7:
            name = "July";
            break;
        case 8:
            name = "August";
            break;
        case 9:
            name = "September";
            break;
        case 10:
            name = "October";
            break;
        case 11:
            name = "November";
            break;
        case 12:
            name = "December";
            break;
        default:
            name = "";
    }

    return name;
}