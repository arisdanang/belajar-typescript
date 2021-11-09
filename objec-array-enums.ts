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

enum Role {
  ADMIN = 'Admin',
  AUTHOR = 1,
  READ_ONLY
}

const person = {
  name: 'danang',
  age: 19,
  hobbies: ['basket','badminton','soccer'],
  role: Role.ADMIN
}

if(person.role === Role.ADMIN) {
  console.log('is ADMIN')
}




let favoriteActivities: string[];
favoriteActivities = ['soccer']

console.log(person.name)

for(const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
  // console.log(hobby.map()) // !!! error !!!
}
