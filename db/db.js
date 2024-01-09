import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const db = await mongoose.connect(
      `${process.env.DBURL}/${process.env.DBNAME}`
      );
  } catch (error) {
    console.log(error);
  }
};
export { dbConnect };
