import { connectToDB } from "@utils/database";
import User from "@models/user";

export const POST = async (req, res) => {
  const { email, password } = await req.json();
  try {
    await connectToDB();
    const newUser = new User({ email, password });
    await newUser.save();

    return new Response("Signed up successfully", { status: 201 });
  } catch (error) {
    return new Response("Failed to sign up", { status: 500 });
  }
};
