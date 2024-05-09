import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (req) => {
  passport.authenticate("saml", { session: false })(null, null, () => {
    console.log("into the passport auth func >>>>>>>>>>>> ");
    // Redirect to a success or failure page
    window.location.href = "/auth/saml/callback";
  });
};
