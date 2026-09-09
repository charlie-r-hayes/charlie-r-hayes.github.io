const projects = {


    macro: {

        number:
            "01 / 08",

        title:
            "CUSTOM MACRO PCB",

        category:
            "PCB • EMBEDDED • ELECTRONICS",

        description:
            "A custom programmable macropad designed from schematic capture through PCB layout, manufacturing, firmware, and physical assembly.",

        tags: [
            "KICAD",
            "PCB DESIGN",
            "EMBEDDED",
            "ELECTRONICS"
        ],

        link:
            "projects/macro.html",

        image:
            "images/cassettes/macro-front.png"
    },



    ballbalance: {

        number:
            "02 / 08",

        title:
            "BALL BALANCING ROBOT",

        category:
            "CONTROLS • STEPPER MOTORS • SONAR",

        description:
            "A feedback-control project that measures ball position using a sonar sensor and commands stepper motors to automatically maintain the ball near a desired position.",

        tags: [
            "CONTROL SYSTEMS",
            "STEPPER MOTORS",
            "SONAR",
            "FEEDBACK",
            "ROBOTICS"
        ],

        link:
            "projects/ballbalance.html",

        image:
            "images/cassettes/ballbalance-front.png"
    },



    speakers: {

        number:
            "03 / 08",

        title:
            "CUSTOM SPEAKERS",

        category:
            "AUDIO • CLASS D • ELECTRONICS",

        description:
            "A custom speaker system combining enclosure design, audio electronics, wiring, fabrication, and a Class D amplifier into a complete working audio system.",

        tags: [
            "CLASS D",
            "AUDIO",
            "AMPLIFIER",
            "ELECTRONICS",
            "FABRICATION"
        ],

        link:
            "projects/speakers.html",

        image:
            "images/cassettes/speakers-front.png"
    },



    homelab: {

        number:
            "04 / 08",

        title:
            "CUSTOM HOMELAB",

        category:
            "PROXMOX • LINUX • NETWORKING",

        description:
            "A self-hosted homelab built for virtualization, networking, Linux, game servers, storage, security, and self-hosted services.",

        tags: [
            "PROXMOX",
            "LINUX",
            "NETWORKING",
            "OPNSENSE",
            "PI-HOLE"
        ],

        link:
            "projects/homelab.html",

        image:
            "images/cassettes/homelab-front.png"
    },



    drone: {

        number:
            "05 / 08",

        title:
            "FPV RACING DRONE",

        category:
            "FPV • FLIGHT CONTROL • ELECTRONICS",

        description:
            "A custom-built FPV racing drone assembled and configured from individual components including motors, ESCs, radio equipment, and a programmable flight controller.",

        tags: [
            "FPV",
            "FLIGHT CONTROL",
            "MOTORS",
            "ELECTRONICS",
            "RADIO"
        ],

        link:
            "projects/drone.html",

        image:
            "images/cassettes/drone-front.png"
    },



    tag: {

        number:
            "06 / 08",

        title:
            "TAG",

        category:
            "GODOT • GAME DEVELOPMENT • DESIGN",

        description:
            "A video game developed in the Godot engine, combining gameplay programming, game systems, level design, user interaction, debugging, and iterative design.",

        tags: [
            "GODOT",
            "GAME DEVELOPMENT",
            "PROGRAMMING",
            "DESIGN",
            "DEBUGGING"
        ],

        link:
            "projects/tag.html",

        image:
            "images/cassettes/tag-front.png"
    },



    skid: {

        number:
            "07 / 08",

        title:
            "CHEMICAL FEED SKID",

        category:
            "PROCESS SYSTEMS • CAD • FABRICATION",

        description:
            "A chemical feed skid designed and built as an integrated process system involving CAD, pumps, piping, component selection, fabrication, and system integration.",

        tags: [
            "CAD",
            "PROCESS SYSTEMS",
            "FABRICATION",
            "PUMPS",
            "INSTRUMENTATION"
        ],

        link:
            "projects/skid.html",

        image:
            "images/cassettes/skid-front.png"
    },



    robotarm: {

        number:
            "08 / 08",

        title:
            "ROBOTIC ARM TOOL",

        category:
            "ROBOTICS • CAD • FABRICATION",

        description:
            "A custom end-of-arm tool designed for a robotic arm, combining CAD, mechanical design, fabrication, and automation-system integration.",

        tags: [
            "ROBOTICS",
            "END EFFECTOR",
            "CAD",
            "FABRICATION",
            "AUTOMATION"
        ],

        link:
            "projects/robotarm.html",

        image:
            "images/cassettes/robotarm-front.png"
    }

};



const projectButtons =
    document.querySelectorAll(
        ".project-spine"
    );


const projectImage =
    document.getElementById(
        "projectImage"
    );


const projectNumber =
    document.getElementById(
        "projectNumber"
    );


const projectTitle =
    document.getElementById(
        "projectTitle"
    );


const projectCategory =
    document.getElementById(
        "projectCategory"
    );


const projectDescription =
    document.getElementById(
        "projectDescription"
    );


const projectTags =
    document.getElementById(
        "projectTags"
    );


const projectLink =
    document.getElementById(
        "projectLink"
    );


const previewInfo =
    document.querySelector(
        ".preview-info"
    );


let currentProject =
    "macro";



function showProject(projectName) {

    const project =
        projects[projectName];


    if (!project) {
        return;
    }


    projectButtons.forEach(
        button => {

            button.classList.remove(
                "active"
            );

        }
    );


    const selectedButton =
        document.querySelector(
            `[data-project="${projectName}"]`
        );


    if (selectedButton) {

        selectedButton.classList.add(
            "active"
        );

    }


    projectImage.style.opacity =
        "0";


    projectImage.style.transform =
        "translateY(5px)";


    previewInfo.style.opacity =
        "0";


    previewInfo.style.transform =
        "translateY(5px)";


    setTimeout(
        () => {

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


            projectLink.href =
                project.link;


            projectTags.innerHTML =
                "";


            project.tags.forEach(
                tag => {

                    const element =
                        document.createElement(
                            "span"
                        );


                    element.textContent =
                        tag;


                    projectTags.appendChild(
                        element
                    );

                }
            );


            projectImage.style.opacity =
                "1";


            projectImage.style.transform =
                "translateY(0)";


            previewInfo.style.opacity =
                "1";


            previewInfo.style.transform =
                "translateY(0)";

        },

        120
    );


    currentProject =
        projectName;

}



projectButtons.forEach(
    button => {

        const projectName =
            button.dataset.project;


        button.addEventListener(
            "mouseenter",
            () => {

                showProject(
                    projectName
                );

            }
        );


        button.addEventListener(
            "focus",
            () => {

                showProject(
                    projectName
                );

            }
        );


        button.addEventListener(
            "click",
            () => {

                showProject(
                    projectName
                );

            }
        );

    }
);



showProject(
    "macro"
);
