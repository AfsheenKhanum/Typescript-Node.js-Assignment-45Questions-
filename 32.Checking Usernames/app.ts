#! /usr/bin/env node
//use some method
let current_users:string[]=["user1","admin","user3","user4","user5"];
let new_users:string[]=["user1","user6","user7","admin","user9"];
new_users.forEach(new_user=>{
    if (current_users.some(currentUser=>currentUser.toLowerCase()===new_user.toLowerCase()
    )){
        console.log(`${new_user} will need to enter a new username.`);
    }else {
            console.log(`${new_user} is available`);
    }
});
    

//use map method
let current_users1:string[]=[`Naim`,`Uzair`,`Ali`,`Shayan`,`Sajid`,`Hassan`];
let new_users1:string[]=[`Naim`,`Uzair`,`Ali`,`Shahzad`,`Farhad`];
new_users1.forEach(new_users1 =>{ 
    let lowercase:string=new_users1.toLowerCase();
    if(current_users1.map(c_user => c_user.toLowerCase()).includes(lowercase)){
        console.log(`The User Name ${new_users1} is not available. Please write a different username.`)
    }else{
        console.log(`The user name ${new_users1} is available`);
    }

});

