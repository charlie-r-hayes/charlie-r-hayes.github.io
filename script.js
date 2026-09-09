const projects = {


    /* =====================================================
       1. CUSTOM MACRO PCB
       ===================================================== */

    macro: {

        number:
            "01 / 07",

        title:
            "CUSTOM MACRO PCB",

        category:
            "PCB • EMBEDDED • HUMAN INTERFACE",

        description:
            "A custom programmable macropad designed from schematic capture through PCB layout and physical assembly. The project combines electronics, embedded hardware, and human-interface design into a compact desktop control device.",

        tags: [
            "PCB DESIGN",
            "KICAD",
            "EMBEDDED",
            "ELECTRONICS",
            "PROTOTYPING"
        ],

        link:
            "projects/macro.html",

        image:
            "images/cassettes/macro-front.png"
    },



    /* =====================================================
       2. BALL BALANCING ROBOT
       ===================================================== */

    ballbalance: {

        number:
            "02 / 07",

        title:
            "BALL BALANCING ROBOT",

        category:
            "CONTROLS • STEPPER MOTORS • SENSORS",

        description:
            "An automatic control system designed to balance a ball by measuring its position with a sonar sensor and commanding stepper motors to correct its motion. The current design constrains the ball mechanically while providing a platform for further control-system development.",

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



    /* =====================================================
       3. CUSTOM SPEAKERS
       ===================================================== */

    speakers: {

        number:
            "03 / 07",

        title:
            "CUSTOM SPEAKERS",

        category:
            "AUDIO • CLASS D • ELECTRONICS",

        description:
            "A custom speaker system built around a Class D amplifier, combining audio electronics, speaker design, enclosure construction, wiring, and system integration into a complete working audio system.",

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



    /* =====================================================
       4. CUSTOM HOMELAB
       ===================================================== */

    homelab: {

        number:
            "04 / 07",

        title:
            "CUSTOM HOMELAB",

        category:
            "PROXMOX • LINUX • NETWORKING",

        description:
            "A self-hosted homelab built for experimentation with virtualization, networking, Linux, game servers, and self-hosted services. The system provides a practical environment for infrastructure deployment, troubleshooting, and learning.",

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



    /* =====================================================
       5. FPV RACING DRONE
       ===================================================== */

    drone: {

        number:
            "05 / 07",

        title:
            "FPV RACING DRONE",

        category:
            "FPV • FLIGHT CONTROL • ELECTRONICS",

        description:
            "A custom-built FPV racing drone assembled and configured from individual components, combining high-current electronics, motors, radio systems, flight-controller configuration, and mechanical integration.",

        tags: [
            "FPV",
            "DRONES",
            "FLIGHT CONTROL",
            "ELECTRONICS",
            "MOTORS"
        ],

        link:
            "projects/drone.html",

        image:
            "images/cassettes/drone-front.png"
    },



    /* =====================================================
       6. CHEMICAL FEED SKID
       ===================================================== */

    skid: {

        number:
            "06 / 07",

        title:
            "CHEMICAL FEED SKID",

        category:
            "PROCESS SYSTEMS • CAD • FABRICATION",

        description:
            "A chemical feed skid designed and built as an integrated process system. The project involved equipment layout, CAD, component selection, fabrication considerations, piping, pumps, instrumentation, and system integration.",

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



    /* =====================================================
       7. ROBOTIC ARM END EFFECTOR
       ===================================================== */

    robotarm: {

        number:
            "07 / 07",

        title:
            "ROBOTIC ARM TOOL",

        category:
            "ROBOTICS • CAD • FABRICATION",

        description:
            "A custom end-of-arm tool designed for a robotic arm, combining mechanical design, CAD, fabrication, and robotic integration to create tooling for a specific automated task.",

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



/* =========================================================
   ELEMENTS
   ========================================================= */

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



/* =========================================================
   CHANGE PROJECT
   ========================================================= */

function showProject(projectName) {


    const project =
        projects[projectName];


    if (!project) {
        return;
    }



    /* ---------------------------------------------
       ACTIVE SPINE
       --------------------------------------------- */

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



    /* ---------------------------------------------
       SMALL TRANSITION
       --------------------------------------------- */

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


            /* -------------------------------------
               IMAGE
               ------------------------------------- */

            projectImage.src =
                project.image;


            projectImage.alt =
                `${project.title} cassette`;



            /* -------------------------------------
               TEXT
               ------------------------------------- */

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



            /* -------------------------------------
               TAGS
               ------------------------------------- */

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



            /* -------------------------------------
               FADE BACK IN
               ------------------------------------- */

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



/* =========================================================
   CASSETTE EVENTS
   ========================================================= */

projectButtons.forEach(
    button => {


        const projectName =
            button.dataset.project;



        /* -----------------------------------------
           DESKTOP HOVER
           ----------------------------------------- */

        button.addEventListener(
            "mouseenter",
            () => {

                showProject(
                    projectName
                );

            }
        );



        /* -----------------------------------------
           KEYBOARD
           ----------------------------------------- */

        button.addEventListener(
            "focus",
            () => {

                showProject(
                    projectName
                );

            }
        );



        /* -----------------------------------------
           CLICK / MOBILE TAP
           ----------------------------------------- */

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



/* =========================================================
   DEFAULT
   ========================================================= */

showProject(
    "macro"
);
