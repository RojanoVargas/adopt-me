//TASK 1

/*const profileData = {
    firstName:'Skye',
    lastName: 'Coore', 
    age: 29, 
    city: 'Japan'
}*/

//TASK 2

const profileData = {
    firstName:'Skye',
    lastName: 'Coore', 
    age: 29, 
    city: 'Japan',
    details: () => {
        return `${profileData.firstName} ${profileData.lastName} is ${profileData.age} years old and lives in ${profileData.city}.`;
    }
}
console.log (profileData.details())

//TASK 3

function wordConverter (words, suffix) {
    const addSuffix = words.map (word => word + suffix);
    return addSuffix;
}

let words = ["smart", "kind", "sweet", "small", "clear"];
console.log(wordConverter(words, "er."))

//TASK 4

function calculateHours (hours) {
  return hours.reduce((hours, day) => hours + day.end - day.start, 0)  
}
const hourTracking = [
    { day: 'Monday', start: 8, end: 17},
    { day: 'Tuesday', start: 9, end: 15},
    { day: 'Wednesday', start: 10, end: 18},
    { day: 'Thursday', start: 7, end: 14},
    { day: 'Friday', start: 6, end: 12},
];
console.log(calculateHours(hourTracking))


//TASK 5

class Course {
    constructor(teacher, type, number){
        this.teacher = teacher;
        this.type = type;
        this.number = number;
    }

    spaceNeeded(){
        return this.number * 2;
    }

    details(){
        return `This is the ${this.type} course, taught by ${this.teacher}. There are currrently ${this.number} students on this course. `
    }
}

const webDev = new Course('Mr Magoo', "Web Development", 18);

console.log(webDev.spaceNeeded())
console.log(webDev.details())

//TASK 6

function validPin(pin) {
    if (!/^\d{4}$/.test(pin)) {
      return false;
    }
  
    const digits = pin.split('').map(Number); 
  
    const firstDigit = digits[0];
    const lastDigit = digits[3];
  
    return !(firstDigit === lastDigit) && (lastDigit % 2 === 0);
  }
  
  console.log(validPin("1234"));   
  console.log(validPin("1235"));   
  console.log(validPin("12ww"));   
  console.log(validPin("12.4"));   
  console.log(validPin("-234"));   
  console.log(validPin("12345"));  
  console.log(validPin("2222"));   
  console.log(validPin("2224"));