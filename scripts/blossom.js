function generateFlower() {
    
    const color = document.querySelector('input[name="color"]:checked');
    const personality = document.querySelector('input[name="personality"]:checked');
    const environment = document.querySelector('input[name="environment"]:checked');

    if (!color || !personality || !environment) {
        alert("Please answer all the questions.");
        return;
    }

    let flower = "";

    if (color.value === "Red" && personality.value === "Bold" && environment.value === "Sunny") {
        flower = "Adenium";
    } else if (color.value === "Pink" && personality.value === "Elegant" && environment.value === "Tropical") {
        flower = "Rose";
    } else if (color.value === "White" && personality.value === "Delicate" && environment.value === "Cool and calm") {
        flower = "Cosmos";
    } else if (color.value === "Purple" && personality.value === "Mysterious" && environment.value === "Desert") {
        flower = "Gerbera";
    } else {
        flower = "Adenium"; 
    }

    const resultElement = document.getElementById("result");
    resultElement.textContent  = `${flower}!`;
}

