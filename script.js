function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openPopup() {
    document.getElementById('popup-form').classList.add('active');
    document.getElementById('overlay').classList.add('active');
}

function closePopup() {
    document.getElementById('popup-form').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}

document.getElementById("leadForm_popup").addEventListener("submit", function (e) {
    e.preventDefault();
    submitForm(e.target);
});

document.getElementById("leadForm").addEventListener("submit", function (e) {
    e.preventDefault();
    submitForm(e.target);
});

function submitForm(form) {
    const formData = new FormData(form);

    const googleAppsScriptUrl = "https://script.google.com/macros/s/AKfycbySIn49UwfSFKlFk6VfXlnUYA8JeA0zfPMz6La-tIfVD8tSbfXuBzjfRtyLUxKJRng/exec";

    fetch(googleAppsScriptUrl, {
        method: "POST",
        body: formData,
    })
        .then((response) => {
            if (response.ok) {
                alert("Thank You!");
                form.reset();
            } else {
                throw new Error("Failed to submit the form.");
            }
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
}

window.onload = () => {
    setTimeout(openPopup, 1000);
};
