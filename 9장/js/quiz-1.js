// 클래스 생성
class Pet {
    // 프로퍼티 생성
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    // 메서드
    run() {
        document.write(`<h1>${this.color} ${this.name}가 달린다.</h1>`);
    }
}

// 객체 생성
const Pet1 = new Pet("바둑이", "하얀");
Pet1.run();


// 기존 클래스를 확장하여(상속받아) 새로운 클래스 선언
class Cat extends Pet {
    constructor(name, color, breed) {
        super(name, color);  // 상위 클래스의 프로퍼티 재사용
        this.breed = breed;
    }
    // 새로운 메서드 정의
    viewInfo() {
        document.write(`<h1>이름 : ${this.name}, 품종 : ${this.breed}, 색깔 : ${this.color}</h1>`);
    }
}

// 객체 생성
const cat1 = new Cat("보리", "흰색", "코숏");
cat1.viewInfo();
cat1.run();