const dragArea = document.getElementById("dragArea");
const fileInput = document.getElementById("fileInput");

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
}