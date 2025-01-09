function generateFlower() {
    const flowers = ["Adenium", "Cosmos", "Gerbera", "Rose"];
    const randomFlower = flowers[Math.floor(Math.random() * flowers.length)];
    document.getElementById("result").innerText = `You are ${randomFlower}!`;
}