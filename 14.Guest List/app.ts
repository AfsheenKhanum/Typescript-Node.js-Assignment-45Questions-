#! /usr/bin/env node

// saved some names an array:
let guestList: string[] = [
    "Naim",
    "Ahmed",
    "Uzair",
    "Ali",
    "Sajid",
  ];
  
  //now use forEach method:
  guestList.forEach((guest) => {
    console.log(`"Dear ${guest}," I would be honored to have you join me for dinner, your presence would make the evening truly special.
  `);
  });
  
  //now use for map method:
  let invitetion: string[] = guestList.map(guest=>`Dear ${guest},I would be honored to have you join me for dinner, your presence would make the evening truly special.
  `)
  console.log(invitetion);

  //now use forEach method 2:
let guests: string[] = ["Naim Mehmood", "Ahmed Uzair", "Shayan Ali"];
guests.forEach(guest => console.log(`Dear ${guest}, you are invited to dinner!`));