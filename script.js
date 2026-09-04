
/* =========================================================
   PROJECT DATA
   ========================================================= */

const projects = {

    homelab: {

        number: "01 / 05",

        theme: "theme-blue",

        tapeTitle: "HOMELAB",

        tapeSubtitle: "PROXMOX / LINUX / NETWORKING",

        side: "SIDE A",

        tapeType: "C-90",

        title: "CUSTOM HOMELAB",

        category: "PROXMOX • LINUX • NETWORKING",

        description:
            "A self-hosted homelab built for experimentation with virtualization, networking, Linux, game servers, and self-hosted services. The system gives me a practical environment for learning infrastructure, troubleshooting hardware, and deploying real services.",

        tags: [
            "PROXMOX",
            "LINUX",
            "NETWORKING",
            "OPNSENSE",
            "PI-HOLE"
        ],

        link: "projects/homelab.html"
    },


    embedded: {

        number: "02 / 05",

        theme: "theme-red",

        tapeTitle: "EMBEDDED",

        tapeSubtitle: "ESP32 / FIRMWARE / SENSORS",

        side: "SIDE A",

        tapeType: "C-60",

        title: "EMBEDDED SYSTEMS",

        category: "ESP32 • FIRMWARE • SENSORS",

        description:
            "Embedded projects focused on connecting hardware and software through microcontrollers, sensors, displays, communication interfaces, and custom firmware. These projects explore practical low-level electronics and real-world device behavior.",

        tags: [
            "ESP32",
            "C / C++",
            "SENSORS",
            "FIRMWARE",
            "I2C / SPI"
        ],

        link: "projects/embedded.html"
    },


    controls: {

        number: "03 / 05",

        theme: "theme-yellow",

        tapeTitle: "CONTROLS",

        tapeSubtitle: "MODELING / SIMULATION",

        side: "SIDE B",

        tapeType: "C-90",

        title: "CONTROL SYSTEMS",

        category: "MODELING • SIMULATION • FEEDBACK",

        description:
            "Projects involving system modeling, simulation, feedback, and controller design. This section focuses on understanding system behavior and applying control theory to practical engineering problems.",

        tags: [
            "MATLAB",
            "SIMULINK",
            "PID",
            "FEEDBACK",
            "MODELING"
        ],

        link: "projects/controls.html"
    },


    pcb: {

        number: "04 / 05",

        theme: "theme-green",

        tapeTitle: "PCB DESIGN",

        tapeSubtitle: "HARDWARE / ELECTRONICS",

        side: "SIDE A",

        tapeType: "C-60",

        title: "PCB DESIGN",

        category: "HARDWARE • ELECTRONICS • PCB",

        description:
            "Custom electronics projects centered around schematic capture, component selection, PCB layout, prototyping, and testing. The goal is to move projects away from breadboards and toward complete purpose-built hardware.",

        tags: [
            "KICAD",
            "PCB",
            "SCHEMATICS",
            "ELECTRONICS",
            "HARDWARE"
        ],

        link: "projects/pcb.html"
    },


    robotics: {

        number: "05 / 05",

        theme: "theme-orange",

        tapeTitle: "ROBOTICS",

        tapeSubtitle: "MECHANICAL / CONTROL",

        side: "SIDE B",

        tapeType: "C-90",

        title: "ROBOTICS",

        category: "MOTION • SENSORS • CONTROL",

        description:
            "Robotics and mechatronics projects combining mechanical systems, electronics, sensing, motors, and control. These builds focus on creating physical systems that can interact with and respond to the real world.",

        tags: [
            "MOTORS",
            "SENSORS",
            "CONTROL",
            "MECHATRONICS",
            "EMBEDDED"
        ],

        link: "projects/robotics.html"
    }

};



/* =========================================================
   PAGE ELEMENTS
   ========================================================= */

const cassetteButtons =
    document.querySelectorAll(".cassette");


const previewCassette =
    document.getElementById("previewCassette");


const previewInfo =
    document.querySelector(".preview-info");


const previewTapeTitle =
    document.getElementById("previewTapeTitle");


const previewTapeSubtitle =
    document.getElementById("previewTapeSubtitle");


const previewSide =
    document.getElementById("previewSide");


const previewTapeType =
    document.getElementById("previewTapeType");


const previewNumber =
    document.getElementById("previewNumber");


const previewTitle =
    document.getElementById("previewTitle");


const previewCategory =
    document.getElementById("previewCategory");


const previewDescription =
    document.getElementById("previewDescription");


const previewTags =
    document.getElementById("previewTags");


const previewLink =
    document.getElementById("previewLink");



/* =========================================================
   CURRENT PROJECT
   ========================================================= */

let currentProject = "homelab";



/* =========================================================
   CHANGE PROJECT PREVIEW
   ========================================================= */

function showProject(projectName) {

    if (!projects[projectName]) {
        return;
    }


    if (projectName === currentProject) {
        return;
    }


    const project =
        projects[projectName];


    currentProject =
        projectName;



    /* -----------------------------------------
       ACTIVE CASSETTE
       ----------------------------------------- */

    cassetteButtons.forEach((cassette) => {

        cassette.classList.remove("active");

    });


    const selectedCassette =
        document.querySelector(
            `[data-project="${projectName}"]`
        );


    if (selectedCassette) {

        selectedCassette.classList.add("active");

    }



    /* -----------------------------------------
       FADE OUT
       ----------------------------------------- */

    previewCassette.classList.add("changing");

    previewInfo.classList.add("changing");



    /* -----------------------------------------
       CHANGE CONTENT
       ----------------------------------------- */

    setTimeout(() => {


        previewCassette.className =
            `preview-cassette ${project.theme} changing`;


        previewTapeTitle.textContent =
            project.tapeTitle;


        previewTapeSubtitle.textContent =
            project.tapeSubtitle;


        previewSide.textContent =
            project.side;


        previewTapeType.textContent =
            project.tapeType;


        previewNumber.textContent =
            project.number;


        previewTitle.textContent =
            project.title;


        previewCategory.textContent =
            project.category;


        previewDescription.textContent =
            project.description;


        previewLink.href =
            project.link;



        /* -------------------------------------
           TAGS
           ------------------------------------- */

        previewTags.innerHTML = "";


        project.tags.forEach((tag) => {

            const tagElement =
                document.createElement("span");


            tagElement.textContent =
                tag;


            previewTags.appendChild(
                tagElement
            );

        });



        /* -------------------------------------
           FADE BACK IN
           ------------------------------------- */

        requestAnimationFrame(() => {

            previewCassette.classList.remove(
                "changing"
            );


            previewInfo.classList.remove(
                "changing"
            );

        });


    }, 130);

}



/* =========================================================
   CASSETTE INTERACTIONS
   ========================================================= */

cassetteButtons.forEach((cassette) => {


    const projectName =
        cassette.dataset.project;



    /* desktop hover */

    cassette.addEventListener(
        "mouseenter",
        () => {

            showProject(projectName);

        }
    );



    /* keyboard navigation */

    cassette.addEventListener(
        "focus",
        () => {

            showProject(projectName);

        }
    );



    /* mobile / click */

    cassette.addEventListener(
        "click",
        () => {

            showProject(projectName);

        }
    );

});
