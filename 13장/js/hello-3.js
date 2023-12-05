function whatsyourFavorite() {
    let fav = "Javascript";

    // resolve 일때 Javascript 를 반환
    return new Promise((resolve, reject) => resolve(fav));
}

function displaySubject(subject) {
    // resolve 일때 whatsyourFavorite() 함수의 결과를 받아서 Hello 와 함께 프로미스 반환

    return new Promise((resolve, reject) => resolve(`Hello, ${subject}`));
}

whatsyourFavorite()
    .then(response => displaySubject(response))
    .then(result => console.log(result));