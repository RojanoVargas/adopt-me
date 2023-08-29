// Task 1

const profileData = {
    firstName: "Jess",
    lastName: "Smith",
    age: 30,
    city: "Berlin",
  };
  
  // Task 2
  
  profileData.details = function () {
    return `${this.firstName} ${this.lastName} is ${this.age} years old and lives in ${this.city}`;
  };
  
  console.log(profileData.details());

