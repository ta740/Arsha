
document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const gridItems = document.querySelectorAll(".grid-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove("btn-primary"));
            filterButtons.forEach(btn => btn.classList.add("btn-outline-primary"));
            
            // Highlight clicked button
            button.classList.remove("btn-outline-primary");
            button.classList.add("btn-primary");

            const filter = button.getAttribute("data-filter");

            gridItems.forEach(item => {
                if (filter === "all" || item.getAttribute("data-category") === filter) {
                    item.style.display = "block"; // Show
                } else {
                    item.style.display = "none"; // Hide
                }
            });
        });
    });
});

