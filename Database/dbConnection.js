import mongoose from "mongoose";

export function dbConnection() {
  mongoose
    .connect(`mongodb+srv://mahamuduldev:0308412@my-cell-vids-db.8pf3ybb.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
      console.log("DB Connected Succesfully");
    })
    .catch((error) => {
      console.log("DB Failed to connect", error);
    });
}


//Use this is postman https://ecommerce-backend-codv.onrender.com/api/v1/auth/signup

