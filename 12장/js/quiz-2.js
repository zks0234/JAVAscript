const num = document.querySelector("#user-number");
const btn = document.querySelector("button");
const result = document.querySelector("#result");

btn.addEventListener("click", () => {    
    let n = num.value;
    try {
        if (n === "" || isNaN(n)) {
            throw "숫자를 입력하세요.";
        }
        if (10 < n) {
            throw "10보다 작은 수를 입력하세요.";
        }
        // n = parseInt(n);
        if (10 >= n) {
            result.innerText = n;
        }
    }
    catch(error) {
        alert(error);
    }
    finally {
        num.value = "";
    }
});