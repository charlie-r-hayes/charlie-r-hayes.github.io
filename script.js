const projects = {

    macro: {
        number: "01 / 08",
        title: "CUSTOM MACRO PCB",
        category: "PCB • EMBEDDED • ELECTRONICS",

        description:
            "A custom programmable macropad designed from schematic capture through PCB layout, manufacturing, firmware, and physical assembly.",

        tags: [
            "KICAD",
            "PCB DESIGN",
            "EMBEDDED",
            "ELECTRONICS"
        ],

        image:
            "images/cassettes/macro-front.png",

        link:
            "projects/macro.html",

        pageReady: true
    },


    ballbalance: {
        number: "02 / 08",
        title: "BALL BALANCING ROBOT",
        category: "CONTROLS • STEPPER MOTORS • SONAR",

        description:
            "A feedback-control project that measures ball position using sonar and commands stepper motors to maintain a desired position.",

        tags: [
            "CONTROL SYSTEMS",
            "STEPPER MOTORS",
            "SONAR",
            "FEEDBACK",
            "ROBOTICS"
        ],

        image:
            "images/cassettes/ballbalance-front.png",

        link:
            "projects/ballbalance.html",

        pageReady: false
    },


    speakers: {
        number: "03 / 08",
        title: "CUSTOM SPEAKERS",
        category: "AUDIO • CLASS D • ELECTRONICS",

        description:
            "A custom speaker system combining enclosure design, audio electronics, wiring, fabrication, and a Class D amplifier.",

        tags: [
            "CLASS D",
            "AUDIO",
            "AMPLIFIER",
            "ELECTRONICS",
            "FABRICATION"
        ],

        image:
            "images/cassettes/speakers-front.png",

        link:
            "projects/speakers.html",

        pageReady: true
    },


    homelab: {
        number: "04 / 08",
        title: "CUSTOM HOMELAB",
        category: "PROXMOX • LINUX • NETWORKING",

        description:
            "A self-hosted homelab built for virtualization, networking, Linux, storage, security, game servers, and self-hosted services.",

        tags: [
            "PROXMOX",
            "LINUX",
            "NETWORKING",
            "OPNSENSE",
            "PI-HOLE"
        ],

        image:
            "images/cassettes/homelab-front.png",

        link:
            "projects/homelab.html",

        pageReady: true
    },


    drone: {
        number: "05 / 08",
        title: "FPV RACING DRONE",
        category: "FPV • FLIGHT CONTROL • ELECTRONICS",

        description:
            "A custom-built FPV racing drone assembled and configured from individual components including motors, ESCs, radio equipment, and a programmable flight controller.",

        tags: [
            "FPV",
            "FLIGHT CONTROL",
            "MOTORS",
            "ELECTRONICS",
            "RADIO"
        ],

        image:
            "images/cassettes/drone-front.png",

        link:
            "projects/drone.html",

        pageReady: false
    },


    tag: {
        number: "06 / 08",
        title: "TAG",
        category: "GODOT • GAME DEVELOPMENT • DESIGN",

        description:
            "A video game developed in the Godot engine combining gameplay programming, game systems, level design, user interaction, debugging, and iterative design.",

        tags: [
            "GODOT",
            "GAME DEVELOPMENT",
            "PROGRAMMING",
            "DESIGN",
            "DEBUGGING"
        ],

        image:
            "images/cassettes/tag-front.png",

        link:
            "projects/tag.html",

        pageReady: false
    },


    skid: {
        number: "07 / 08",
        title: "CHEMICAL FEED SKID",
        category: "PROCESS SYSTEMS • CAD • FABRICATION",

        description:
            "A chemical feed skid designed and built as an integrated process system involving CAD, pumps, piping, component selection, fabrication, and system integration.",

        tags: [
            "CAD",
            "PROCESS SYSTEMS",
            "FABRICATION",
            "PUMPS",
            "INSTRUMENTATION"
        ],

        image:
            "images/cassettes/skid-front.png",

        link:
            "projects/skid.html",

        pageReady: false
    },


    robotarm: {
        number: "08 / 08",
        title: "ROBOTIC ARM TOOL",
        category: "ROBOTICS • CAD • FABRICATION",

        description:
            "A custom end-of-arm tool designed for a robotic arm, combining CAD, mechanical design, fabrication, and automation-system integration.",

        tags: [
            "ROBOTICS",
            "END EFFECTOR",
            "CAD",
            "FABRICATION",
            "AUTOMATION"
        ],

        image:
            "images/cassettes/robotarm-front.png",

        link:
            "projects/robotarm.html",

        pageReady: false
    }

};



const projectSpines =
    document.querySelectorAll(".project-spine");

const projectImage =
    document.getElementById("projectImage");

const projectNumber =
    document.getElementById("projectNumber");

const projectTitle =
    document.getElementById("projectTitle");

const projectCategory =
    document.getElementById("projectCategory");

const projectDescription =
    document.getElementById("projectDescription");

const projectTags =
    document.getElementById("projectTags");

const projectLink =
    document.getElementById("projectLink");

const projectPageStatus =
    document.getElementById("projectPageStatus");

const previewInfo =
    document.querySelector(".preview-info");



function showProject(projectName) {

    const project =
        projects[projectName];


    if (!project) {
        return;
    }



    projectSpines.forEach((spine) => {

        spine.classList.remove("active");

    });



    const selectedSpine =
        document.querySelector(
            `[data-project="${projectName}"]`
        );


    if (selectedSpine) {
        selectedSpine.classList.add("active");
    }



    projectImage.style.opacity = "0";
    projectImage.style.transform = "translateY(5px)";

    previewInfo.style.opacity = "0";
    previewInfo.style.transform = "translateY(5px)";



    setTimeout(() => {

        projectImage.src =
            project.image;

        projectImage.alt =
            `${project.title} cassette`;


        projectNumber.textContent =
            project.number;


        projectTitle.textContent =
            project.title;


        projectCategory.textContent =
            project.category;


        projectDescription.textContent =
            project.description;



        projectTags.innerHTML = "";


        project.tags.forEach((tag) => {

            const tagElement =
                document.createElement("span");

            tagElement.textContent =
                tag;

            projectTags.appendChild(
                tagElement
            );

        });



        if (project.pageReady) {

            projectPageStatus.style.display =
                "none";

            projectLink.style.display =
                "block";

            projectLink.href =
                project.link;

        }

        else {

            projectPageStatus.textContent =
                "PROJECT PAGE COMING SOON";

            projectPageStatus.style.display =
                "block";

            projectLink.style.display =
                "none";

        }



        projectImage.style.opacity = "1";
        projectImage.style.transform = "translateY(0)";

        previewInfo.style.opacity = "1";
        previewInfo.style.transform = "translateY(0)";

    }, 120);

}



projectSpines.forEach((spine) => {

    const projectName =
        spine.dataset.project;


    spine.addEventListener(
        "mouseenter",
        () => {

            showProject(
                projectName
            );

        }
    );


    spine.addEventListener(
        "focus",
        () => {

            showProject(
                projectName
            );

        }
    );


    spine.addEventListener(
        "click",
        () => {

            showProject(
                projectName
            );

        }
    );

});



showProject("macro");
