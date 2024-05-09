import { connectToDB } from "@utils/database";
import User from "@models/user";

export const POST = async (req, res) => {
  const { email, password } = await req.json();
  try {
    await connectToDB();
    const findUser = await User.findOne({ email });
    if (findUser) {
      if (findUser?.password == password) {
        return new Response("Signed up successfully", { status: 200 });
      }
      return new Response("password did not match !!", { status: 401 });
    }
    return new Response("email does not exist !!", { status: 404 });
  } catch (error) {
    console.log("error : ", error);
    return new Response("Failed to sign up", { status: 500 });
  }
};
