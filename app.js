// 1) შექმენით მასივი,რომელიც შეიცავს როგორც დადებით ასევე უარყოფით რიცხვებს. დაითვალეთ, მხოლოდ დადებითი რიცხვების ჯამი.

const numbers = [2, 88, 9, -7, -9, 370, -15];
const positiveNumbers = numbers.filter((num) => num > 0);

const total = positiveNumbers.reduce((sum, currentNumber) => {
  return sum + currentNumber;
}, 0);

// console.log(positiveNumbers);
console.log(total);

// 2) შექმენით მასივი,რომელიც შედგება სტრინგებისგან(რომლებიც შეიძლება განმეორდეს). დაწერეთ კოდი,რომელიც დაითვლის რამდენჯერ მეორდება თითოეული სტრინგი მასივში და დააბრუნებს ობიექტის სახით, მაგ: { a:1 , b: 6, c : 2}

const animals = [
  "lion",
  "cat",
  "dog",
  "cow",
  "cat",
  "tiger",
  "lion",
  "cow",
  "cat",
];
const countAnimals = animals.reduce(
  (count, currentAnimal) => ({
    ...count,
    [currentAnimal]: (count[currentAnimal] || 0) + 1,
  }),
  {}
);
console.log(countAnimals);

// 3) შექმენით კლასი car, რომელსაც ექნება 4 ფროფერთი (brand,model, speed,motion).  ბრენდი და მოდელი კლასს კონსტრუქტორში გადაეცემა, ხოლო speed კონსტრუქტორში დიფოლტად ინიციალიზდება და მისი მნიშვნელობა არის 0.ასევე დიფოლტად ინიციალიზდება motion,რომლის საწყისი მნიშვნელობაა “The car is not moving”.
// კლასს უნდა ჰქონდეს შემდეგი მეთოდები:

// check_motion - მანქანის სიჩქარის მიხედვით ცვლის motion ცვლადს: თუ მანქანა მოძრაობს-”მანქანა მოძრაობს”,წინააღმდეგ შემთხვევაში- “მანქანა გაჩერებულია”.
// accelerate - იღებს პარამეტრად სიჩქარეს და მანქანის სიჩქარეს ზრდის შესაბამისი მნიშვნელობით.
// brake - იღებს პარამეტრად სიჩქარეს და მანქანის სიჩქარეს ამცირებს შესაბამისი მნიშვნელობით(გაითვალისწინეთ,რომ გადაცემული სიჩქარე არსებულ სიჩქარეს შეიძლება აღემატებოდეს).
// emergency_brake - ავტომატურად ხდის მანქანის სიჩქარეს 0-ს.
// status - ფუნქცია,რომელიც აბრუნებს შემდეგ სტრინგს:
//  მანქანა ${ბრენდის სახელი} ${მოდელი} მოძრაობს ${მანქანის სიჩქარე} კმ/სთ სიჩქარით და სტატუსია: ${motion}.
// მაგალითად: მანქანა Ford Mustang მოძრაობს 80 კმ/სთ სიჩქარით და სტატუსია: მანქანა მოძრაობს
// მითითება: ფუნქცია check_motion უნდა გამოიძახებოდეს accelerate,brake და emergency_brake ფუნქციებში, რათა motion ცვლადი სწორად ასახავდეს მანქანის სტატუსს.
// ჩაატარეთ სხვადასხვა ოპერაციები მანქანაზე (accelerate,brake და ა.შ) და თითოეული ცვლილების შემდეგ კონსოლში გამოიტანეთ სტატუსი.

class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    this.speed = 0;
    this.motion = "მანქანა არ მოძრაობს";
  }

  checkMotion() {
    if (this.speed > 0) {
      return "მანქანა მოძრაობს";
    } else {
      return this.motion;
    }
  }

  accelerate(speed) {
    this.speed += speed;
    return this.checkMotion();
  }

  brake(speed) {
    this.speed -= speed;
    return this.checkMotion();
  }

  emergencyBrake() {
    return 0;
  }

  status() {
    return `მანქანა ${this.brand} ${this.model} მოძრაობს ${
      this.speed
    } კმ/სთ სიჩქარით და სტატუსია: ${this.checkMotion()}`;
  }
}

const car1 = new Car("Ford", "Mustang");
console.log(car1.status());
// console.log(car1.accelerate(10));
// console.log(car1.brake(20));
// console.log(car1.emergencyBrake());

// 4) შექმენით ფუნქცია addAsync,რომელიც იღებს ორ პარამეტრს და აბრუნებს პრომისს. თუ ორივე პარამეტრი გადაეცემა(undefined არ არის და ორივე პარამეტრი რიცხვია) პრომისი უნდა დარიზოლვდეს(resolve), წინააღმდეგ შემთხვევაში დარიჯექთდეს(reject). გამოიძახეთ ფუნქცია რამდენიმეჯერ, სხვადასხვა პარამეტრით და კონსოლში გამოიტანეთ შედეგი.

function addAsync(a, b) {
  return new Promise((resolve, reject) => {
    if ((a, b)) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}

addAsync(8, 9)
  .then((value) => console.log(value))
  .catch((error) => console.log(error));
