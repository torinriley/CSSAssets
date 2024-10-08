const dragArea = document.getElementById("dragArea");
const fileInput = document.getElementById("fileInput");
const form = document.getElementById("uploadForm");

dragArea.addEventListener("dragover", (e) => {
    e.preventDefault();
    dragArea.classList.add("dragover");
});

dragArea.addEventListener("dragleave", () => {
    dragArea.classList.remove("dragover");
});

dragArea.addEventListener("drop", (e) => {
    e.preventDefault();
    dragArea.classList.remove("dragover");

    const files = e.dataTransfer.files;
    handleFiles(files);
});

dragArea.addEventListener("click", () => {
    fileInput.click();
});

fileInput.addEventListener("change", () => {
    handleFiles(fileInput.files);
});

function handleFiles(files) {
    console.log(files);
    alert(`${files.length} file(s) selected`);

    const formData = new FormData(form);
    for (let i = 0; i < files.length; i++) {
        formData.append('files[]', files[i]);
    }

    // You can now send formData to the server or use it as needed
    // Example: sendFormData(formData);
}

function sendFormData(formData) {
    fetch('/upload', {
        method: 'POST',
        body: formData
    }).then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
}