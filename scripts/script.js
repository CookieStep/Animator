addEventListener("drop", (event) => {
    for(let file of event.dataTransfer.files) {
        console.log(file);
    }
    event.preventDefault();
});
addEventListener("dragover", event => event.preventDefault());