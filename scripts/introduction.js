const festivals = [
    "Cherry Blossom Festival in Japan (Hanami) - March - April",
    "Rose Festival in Provence, France - May",
    "Tulip Festival in the Netherlands - April - May",
    "Lavender Festival in Provence, France - June - July",
    "Flower Festival in Copenhagen, Denmark - June",
    "Dandelion Festival in Poland - April",
    "Orchid Festival in Singapore - March",
    "Flower Festival in Mexico - August",
    "Lotus Flower Festival in India - July - August",
    "Flower Festival in Scotland - May",
    "Sunflower Festival in Italy - August - September",
    "The Flower Parade in Nijmegan, Netherlands - April",
    "The Poppy Flower Festival in Flanders, Belgium - May",
    "The Sunflower Festival in Kiev, Ukraine - August",
    "The Cactus Flower Festival in Arizona, USA - May",
    "Tulip Festival at Skagit Valley in Washington, USA - April",
    "The Fuchsia Festival in Oregon, USA - June"
];

function generateFestival() {
    const randomIndex = Math.floor(Math.random() * festivals.length);
    const randomFestival = festivals[randomIndex];
    document.getElementById('festivalFact').textContent = randomFestival;
}