document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(".nav-links a").forEach((link) => {
        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.setAttribute("aria-current", "page");
        }
    });
});