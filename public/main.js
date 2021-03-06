function toggleModalClass() {
    modal.classList.toggle("hide");

    document.querySelector("body").classList.toggle("hideScroll");
    modal.classList.toggle("addScroll");
}

function checkFields(event) {
    const valuesToCheck = [
        "title",
        "image",
        "category",
        "description",
        "link"
    ]

    const isEmpty = valuesToCheck.find((value) => {
        const checkIfIsString = typeof event.target[value].value === "string";
        const checkIfIsEmpty = !event.target[value].value.trim();

        if(checkIfIsString && checkIfIsEmpty) return true
    });

    if(isEmpty) {
        event.preventDefault();
        
        alert("Preencha os campos vazios!");
    }
}