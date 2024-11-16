const formData = {
    email: "",
    message: "",
}

const form = document.querySelector(".feedback-form");
const input = form.elements.email;
const textarea = form.elements.message;
const localStorageKey = "feedback-form-state";

const formDataLoad = () => {
    const formDataLocal = localStorage.getItem(localStorageKey);
    if (formDataLocal) {
        const parsedData = JSON.parse(formDataLocal);
        input.value = parsedData.email || "";
        textarea.value = parsedData.message || "";
    }
};