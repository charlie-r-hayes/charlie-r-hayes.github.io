const projects = {


    homelab: {

        number:
            "01 / 05",

        title:
            "CUSTOM HOMELAB",

        category:
            "PROXMOX • LINUX • NETWORKING",

        description:
            "A self-hosted homelab built for experimentation with virtualization, networking, Linux, game servers, and self-hosted services. The system gives me a practical environment for learning infrastructure, troubleshooting hardware, and deploying real services.",

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
            "images/cassettes/homelab/homelab-front.png",

        hasImage:
            true,

        placeholderTitle:
            "HOMELAB",

        placeholderSubtitle:
            "PROXMOX / LINUX / NETWORKING",

        side:
            "SIDE A"
    },



    embedded: {

        number:
            "02 / 05",

        title:
            "EMBEDDED SYSTEMS",

        category:
            "FIRMWARE • SENSORS • MICROCONTROLLERS",

        description:
            "Embedded projects combining microcontrollers, firmware, sensors, communication interfaces, and electronics to create devices that interact with the physical world.",

        tags: [
            "ESP32",
            "C / C++",
            "FIRMWARE",
            "SENSORS",
            "I2C / SPI"
        ],

        link:
            "projects/embedded.html",

        image:
            "",

        hasImage:
            false,

        placeholderTitle:
            "EMBEDDED",

        placeholderSubtitle:
            "FRONT IMAGE COMING SOON",

        side:
            "SIDE A"
    },



    controls: {

        number:
            "03 / 05",

        title:
            "CONTROL SYSTEMS",

        category:
            "MODELING • SIMULATION • FEEDBACK",

        description:
            "Projects involving system modeling, simulation, feedback, and controller design with an emphasis on understanding real system behavior.",

        tags: [
            "MATLAB",
            "SIMULINK",
            "PID",
            "FEEDBACK",
            "MODELING"
        ],

        link:
            "projects/controls.html",

        image:
            "",

        hasImage:
            false,

        placeholderTitle:
            "CONTROLS",

        placeholderSubtitle:
            "FRONT IMAGE COMING SOON",

        side:
            "SIDE B"
    },



    pcb: {

        number:
            "04 / 05",

        title:
            "PCB DESIGN",

        category:
            "HARDWARE • ELECTRONICS • PCB",

        description:
            "Electronics projects involving schematic design, component selection, PCB layout, fabrication, assembly, and hardware testing.",

        tags: [
            "KICAD",
            "PCB",
            "SCHEMATICS",
            "ELECTRONICS",
            "HARDWARE"
        ],

        link:
            "projects/pcb.html",

        image:
            "",

        hasImage:
            false,

        placeholderTitle:
            "PCB DESIGN",

        placeholderSubtitle:
            "FRONT IMAGE COMING SOON",

        side:
            "SIDE A"
    },



    robotics: {

        number:
            "05 / 05",

        title:
            "ROBOTICS",

        category:
            "MOTION • SENSORS • CONTROL",

        description:
            "Robotics and mechatronics projects combining mechanical systems, electronics, sensing, motors, embedded hardware, and control.",

        tags: [
            "MOTORS",
            "SENSORS",
            "CONTROL",
            "MECHATRONICS",
            "EMBEDDED"
        ],

        link:
            "projects/robotics.html",

        image:
            "",

        hasImage:
            false,

        placeholderTitle:
            "ROBOTICS",

        placeholderSubtitle:
            "FRONT IMAGE COMING SOON",

        side:
            "SIDE B"
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


const previewPlaceholder =
    document.getElementById(
        "previewPlaceholder"
    );


const placeholderSide =
    document.getElementById(
        "placeholderSide"
    );


const placeholderTitle =
    document.getElementById(
        "placeholderTitle"
    );


const placeholderSubtitle =
    document.getElementById(
        "placeholderSubtitle"
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



let currentProject =
    "homelab";



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



    currentProject =
        projectName;



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



    if (project.hasImage) {


        projectImage.src =
            project.image;


        projectImage.alt =
            `${project.title} cassette`;


        projectImage.style.display =
            "block";


        previewPlaceholder.style.display =
            "none";


    }

    else {


        projectImage.style.display =
            "none";


        previewPlaceholder.style.display =
            "block";


        placeholderSide.textContent =
            project.side;


        placeholderTitle.textContent =
            project.placeholderTitle;


        placeholderSubtitle.textContent =
            project.placeholderSubtitle;


    }

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



showProject("homelab");
