import { connect } from "mongoose";

export const dbConfig = async () => {
  try {
    return await connect(process.env.DATABASE_URL!)
      .then(() => {
        console.log("DB connected");
      })
      .catch(() => {
        console.log("Couldn't start up DB");
      });
  } catch (error) {
    console.log(error);
  }
};
