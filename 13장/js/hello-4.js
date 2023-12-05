async function whatsyourFavorite() {
    let fav = "Javascript";
    return fav;
}

async function displaySubject(subject) {
    return `Hello, ${subject}`;
}

whatsyourFavorite()
    // .then(response => displaySubject(response))
    // .then(result => console.log(result));
    .then(displaySubject)
    .then(console.log);