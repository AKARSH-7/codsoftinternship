document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            const bookCard = button.closest(".book-card");
            const bookTitle = bookCard.querySelector("h3").innerText;

            // Perform any necessary cart-related actions here
            // For example, you could add the book title to a shopping cart object

            alert(`${bookTitle} added to cart!`);
        });
    });
});
