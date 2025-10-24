const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
  {
    from: "Vatsal",
    to: "Vedant",
    message: "Im practising Mongo DB",
    created_at: new Date(),
  },

  {
    from: "Vatsal",
    to: "Ritwik",
    message: "Im practising Mongoose",
    created_at: new Date(),
  },

  {
    from: "Vedant",
    to: "Shubh",
    message: "Im practising Models",
    created_at: new Date(),
  },

  {
    from: "Vatsal",
    to: "Shubham",
    message: "Im practising JS",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);
