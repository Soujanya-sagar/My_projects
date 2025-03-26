document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Booking successful!");
});
document.addEventListener("DOMContentLoaded", function () {
    const bookNowBtn = document.querySelector(".book-btn");
    
    bookNowBtn.addEventListener("click", function () {
        document.getElementById("booking").scrollIntoView({ behavior: "smooth" });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    function updateGalleryColumns() {
        let galleryContainer = document.querySelector(".gallery-container");
        let screenWidth = window.innerWidth;

        if (screenWidth >= 1024) {
            galleryContainer.style.gridTemplateColumns = "repeat(3, 1fr)"; // 3 columns for desktops
        } else if (screenWidth >= 768) {
            galleryContainer.style.gridTemplateColumns = "repeat(2, 1fr)"; // 2 columns for tablets
        } else {
            galleryContainer.style.gridTemplateColumns = "repeat(1, 1fr)"; // 1 column for mobile
        }
    }

    // Run on page load
    updateGalleryColumns();

    // Listen for window resize and update the gallery layout
    window.addEventListener("resize", updateGalleryColumns);
});
document.addEventListener("DOMContentLoaded", function () {
    function updateFooterLayout() {
        let footerContainer = document.querySelector(".footer-container");
        let screenWidth = window.innerWidth;

        if (screenWidth <= 768) {
            footerContainer.style.flexDirection = "column";  // Stack on small screens
            footerContainer.style.textAlign = "center";
            document.querySelector(".footer-left").style.width = "100%";
            document.querySelector(".footer-right").style.width = "100%";
            document.querySelector(".footer-right").style.marginTop = "15px";
        } else {
            footerContainer.style.flexDirection = "row"; // Side-by-side on large screens
            footerContainer.style.textAlign = "left";
            document.querySelector(".footer-left").style.width = "50%";
            document.querySelector(".footer-right").style.width = "50%";
            document.querySelector(".footer-right").style.marginTop = "0px";
        }
    }

    // Run on page load
    updateFooterLayout();

    // Listen for window resize and update layout
    window.addEventListener("resize", updateFooterLayout);
});
