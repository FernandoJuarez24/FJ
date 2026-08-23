document.addEventListener("DOMContentLoaded", function () {

    const header = document.getElementById("mainHeader");

    const scrollTrigger = 100;


    /* ========================================
       SHOW / HIDE HEADER
    ======================================== */

    function handleHeader() {

        if (window.scrollY > scrollTrigger) {

            header.classList.add("header-visible");

        } else {

            header.classList.remove("header-visible");

        }

    }


    window.addEventListener("scroll", handleHeader);

    handleHeader();



    /* ========================================
       CLOSE MOBILE MENU AFTER CLICK
    ======================================== */

    const navLinks = document.querySelectorAll("#mainMenu .nav-link");

    const menu = document.getElementById("mainMenu");


    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (window.innerWidth < 992) {

                const collapseInstance =
                    bootstrap.Collapse.getInstance(menu);

                if (collapseInstance) {

                    collapseInstance.hide();

                }

            }

        });

    });

});

/* ========================================
   PROFILE ACCORDION
======================================== */

document.addEventListener("DOMContentLoaded", function () {

    const capabilityItems =
        document.querySelectorAll(".capability-item");


    /* ========================================
       DATA NUMBERS
    ======================================== */

    capabilityItems.forEach(function (item, index) {

        const number =
            String(index + 1).padStart(2, "0");

        item.setAttribute("data-number", number);

    });


    /* ========================================
       OPEN ITEM
    ======================================== */

    function openCapability(selectedItem) {

        capabilityItems.forEach(function (item) {

            const trigger =
                item.querySelector(".capability-trigger");


            if (item === selectedItem) {

                item.classList.add("active");

                trigger.setAttribute(
                    "aria-expanded",
                    "true"
                );

            } else {

                item.classList.remove("active");

                trigger.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });

    }


    /* ========================================
       CLICK
    ======================================== */

    capabilityItems.forEach(function (item) {

        const trigger =
            item.querySelector(".capability-trigger");


        trigger.addEventListener("click", function () {

            openCapability(item);

        });

    });


    /* ========================================
       DESKTOP HOVER
    ======================================== */

    const canHover =
        window.matchMedia(
            "(hover: hover) and (pointer: fine)"
        );


    capabilityItems.forEach(function (item) {

        item.addEventListener("mouseenter", function () {

            if (canHover.matches) {

                openCapability(item);

            }

        });

    });

});



/* ========================================
   EXPERIENCE LOOP
======================================== */

document.addEventListener("DOMContentLoaded", function () {

    const experienceJobs =
        document.querySelectorAll(".experience-job");

    if (!experienceJobs.length) {
        return;
    }


    let currentJob = 0;

    let experienceInterval = null;

    let isExperiencePaused = false;


    /* ========================================
       ACTIVATE JOB
    ======================================== */

    function activateJob(index) {

        experienceJobs.forEach(function (job, jobIndex) {

            job.classList.toggle(
                "active",
                jobIndex === index
            );

        });


        currentJob = index;

    }


    /* ========================================
       NEXT JOB
    ======================================== */

    function nextJob() {

        if (isExperiencePaused) {
            return;
        }


        const nextIndex =
            (currentJob + 1) % experienceJobs.length;


        activateJob(nextIndex);

    }


    /* ========================================
       START LOOP
    ======================================== */

    function startExperienceLoop() {

        clearInterval(experienceInterval);


        experienceInterval =
            setInterval(
                nextJob,
                3000
            );

    }


    /* ========================================
       HOVER INTERACTION
    ======================================== */

    experienceJobs.forEach(function (job, index) {

        job.addEventListener("mouseenter", function () {

            isExperiencePaused = true;

            activateJob(index);

        });


        job.addEventListener("mouseleave", function () {

            isExperiencePaused = false;

            startExperienceLoop();

        });


        job.addEventListener("click", function () {

            activateJob(index);

        });

    });


    /* ========================================
       INITIALIZE
    ======================================== */

    activateJob(0);

    startExperienceLoop();

});


/* ========================================
   MORE PROJECTS
======================================== */

document.addEventListener("DOMContentLoaded", function () {

    const moreProjects =
        document.querySelector(".more-projects");

    const moreProjectsTrigger =
        document.querySelector(".more-projects-trigger");

    const moreProjectsText =
        moreProjectsTrigger
            ? moreProjectsTrigger.querySelector("span:first-child")
            : null;


    if (
        moreProjects &&
        moreProjectsTrigger
    ) {

        moreProjectsTrigger.addEventListener(
            "click",
            function () {

                const isOpen =
                    moreProjects.classList.toggle("open");


                moreProjectsTrigger.setAttribute(
                    "aria-expanded",
                    isOpen ? "true" : "false"
                );


                if (moreProjectsText) {

                    moreProjectsText.textContent =
                        isOpen
                            ? "Mostrar menos"
                            : "Explorar más proyectos";

                }

            }
        );

    }


    /* ========================================
       PORTFOLIO NOTICE
    ======================================== */

    const portfolioNotice =
        document.querySelector(".portfolio-notice");

    const portfolioNoticeTrigger =
        document.querySelector(".portfolio-notice-trigger");


    if (
        portfolioNotice &&
        portfolioNoticeTrigger
    ) {

        portfolioNoticeTrigger.addEventListener(
            "click",
            function () {

                const isOpen =
                    portfolioNotice.classList.toggle("open");


                portfolioNoticeTrigger.setAttribute(
                    "aria-expanded",
                    isOpen ? "true" : "false"
                );

            }
        );

    }

});

/* ========================================
   MATRIX LOADER
======================================== */

document.addEventListener("DOMContentLoaded", function () {

    const loader =
        document.getElementById("pageLoader");

    const matrixLayer =
        document.getElementById("matrixLayer");


    if (!loader || !matrixLayer) {
        return;
    }


    /* ========================================
       GENERATE MATRIX COLUMNS
    ======================================== */

    const symbols = [
        "0",
        "1",
        "<",
        ">",
        "/",
        "{",
        "}",
        "[",
        "]",
        "_",
        "+",
        "="
    ];


    const columnCount = 22;


    for (
        let columnIndex = 0;
        columnIndex < columnCount;
        columnIndex++
    ) {

        const column =
            document.createElement("div");


        column.classList.add("matrix-column");


        column.style.left =
            Math.random() * 100 + "%";


        column.style.animationDuration =
            4 + Math.random() * 4 + "s";


        column.style.animationDelay =
            Math.random() * -5 + "s";


        const symbolCount =
            8 + Math.floor(Math.random() * 10);


        for (
            let symbolIndex = 0;
            symbolIndex < symbolCount;
            symbolIndex++
        ) {

            const symbol =
                document.createElement("span");


            symbol.textContent =
                symbols[
                    Math.floor(
                        Math.random() *
                        symbols.length
                    )
                ];


            column.appendChild(symbol);

        }


        matrixLayer.appendChild(column);

    }


    /* ========================================
       REMOVE LOADER
    ======================================== */

    window.addEventListener("load", function () {

        setTimeout(function () {

            loader.classList.add(
                "loader-hidden"
            );


            setTimeout(function () {

                loader.remove();

            }, 800);

        }, 2200);

    });

});