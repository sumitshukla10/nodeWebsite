const mongoose=require("mongoose");
const Chat=require("./models/chat");

main().then(()=>{
    console.log("working");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let chats=[
    {
    from:"Sumit",
    to:"shruti",
    msg:"hello miss tiwari how are you?",
    created_at:new Date()
    },
    {
        from:"Bubu",
        to:"dudu",
        msg:"oye dudu fudu kaise ho be?",
        created_at:new Date()
    },
    {
        from:"Shubham",
        to:"Komal",
         msg:"Hey whats up ?",
         created_at:new Date()
    },
    {
        from:"Shivam",
        to:"Shreya",
        msg:"wish u a very happy birthday",
        created_at:new Date()
    },
    {
        from:"Sunil shukla",
        to:"Sudha shukla",
        msg:"dinner is ready or not?",
        created_at:new Date()
    }
];

Chat.insertMany(chats);
