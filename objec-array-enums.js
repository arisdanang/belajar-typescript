"use strict";
// object
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number,string]
// } = {
//   name: 'danang',
//   age: 19,
//   hobbies: ['basket','badminton','soccer'],
//   role: [2,'author']
// }
var Role;
(function (Role) {
    Role["ADMIN"] = "Admin";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["READ_ONLY"] = 2] = "READ_ONLY";
})(Role || (Role = {}));
const person = {
    name: 'danang',
    age: 19,
    hobbies: ['basket', 'badminton', 'soccer'],
    role: Role.ADMIN
};
if (person.role === Role.ADMIN) {
    console.log('is ADMIN');
}
let favoriteActivities;
favoriteActivities = ['soccer'];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()) // !!! error !!!
}
