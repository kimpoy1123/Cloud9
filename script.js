/* =====================================================
   NAVBAR
===================================================== */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =====================================================
   DROPDOWN MENU
===================================================== */

const menuButton = document.getElementById("menuButton");

const menuDropdown =
    document.getElementById("menuDropdown");


menuButton.addEventListener("click", () => {

    menuDropdown.classList.toggle("open");

});


/* =====================================================
   CLOSE MENU WHEN LINK IS CLICKED
===================================================== */

const menuLinks =
    menuDropdown.querySelectorAll("a");


menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        menuDropdown.classList.remove("open");

    });

});


/* =====================================================
   IMAGE GALLERY
===================================================== */

const mainImage =
    document.getElementById("mainImage");


const thumbnails =
    document.querySelectorAll(".thumbnail");


thumbnails.forEach(thumbnail => {

    thumbnail.addEventListener("click", () => {


        /* Get image from data-image */

        const newImage =
            thumbnail.dataset.image;


        /* Fade image out */

        mainImage.style.opacity = "0";


        setTimeout(() => {

            mainImage.src = newImage;

            mainImage.style.opacity = "1";

        }, 180);


        /* Remove active state */

        thumbnails.forEach(item => {

            item.classList.remove("active");

        });


        /* Set clicked thumbnail active */

        thumbnail.classList.add("active");

    });

});
/* =====================================================
   FAQ ACCORDION
===================================================== */

const faqItems = document.querySelectorAll(".faq-item");


faqItems.forEach(item => {

    const question =
        item.querySelector(".faq-question");

    const icon =
        item.querySelector(".faq-icon");


    question.addEventListener("click", () => {


        /* Check if this FAQ is already open */

        const isOpen =
            item.classList.contains("active");


        /*
         * Close every FAQ first
         */

        faqItems.forEach(faq => {

            faq.classList.remove("active");

            faq.querySelector(".faq-icon").textContent = "+";

        });


        /*
         * If the clicked FAQ was previously closed,
         * open it.
         */

        if (!isOpen) {

            item.classList.add("active");

            icon.textContent = "×";

        }

    });

});
