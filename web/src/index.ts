import { User } from "./models/User";

const user = new User({id: 1, name: 'newer name', age: 0});

<<<<<<< HEAD


=======
user.on('save', ()=>{
  console.log(user)
})

user.save(); 
>>>>>>> c8bd7b27b617e408e959497687c0addeae2da93c
