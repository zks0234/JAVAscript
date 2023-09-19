const nums = [1, 3, 4, 6, 8, 11, 12, 23, 34];

// 반복문 for로 배열에서 10보다 큰 값 출력하기
for (let i = 0; i < nums.length; i++) {
    if (10 < nums[i]) {
        document.write(`${nums[i]}, `)
    }    
}
document.write('<hr>');

// 반복문 foreach로 배열에서 10 보다 큰 값 출력하기
nums.forEach(function(nums) {
    if (10 < nums) {
        document.write(`${nums}, `);
    }
})
document.write('<hr>');

// 반복분 for..of 로 배열에서 10보다 큰 값 출력하기
for (let num of nums) {
    if (10 < num) {
        document.write(`${num}, `);
    }
}
document.write('<hr>');