import { connect } from "mongoose";
export const dbConfig = async () => {
  await connect(process.env.URL!)
    .then(() => {
      console.log("Server Up!");
    })
    .catch((error: Error) => {
      console.log(error);
    });
};
