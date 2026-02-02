const messages = [
    "Please Thangam...",
    "Nee NO Sollamata",
    "Ippo Kandippa Yes Click panuva",
    "Ozhunga Yes Solu",
    "Nalla Yosichikoo!",
    "Nee No sonna, njaan karayum...",
    "nee endedathu mindendaa...",
    "Njaan Povanuuu...",
    "Ini njaan onum parayillaa...",
    "Idhukumela code illa, yes solli dhaan aaganum ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
