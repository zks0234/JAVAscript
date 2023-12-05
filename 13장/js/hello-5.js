async function whatsyourFavorite() {
    let fav = "Javascript";
    return fav;
}

async function displaySubject(subject) {
    return `Hello, ${subject}`;
}

async function init() {
    const response = await whatsyourFavorite();
    const result = await displaySubject(response);
    console.log(result);
}

init();