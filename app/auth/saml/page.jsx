"use client";

import { useEffect } from "react";
import passport from "@utils/saml-config.js";

export default function SamlAuth() {
  useEffect(() => {
    // Redirect the user to the SAML IdP login page
    window.location.href = "/auth/saml/callback";
  }, []);

  return null; // You can render a loading spinner or message here
}

// export default function SamlAuth() {
//   useEffect(() => {
//     try {
//       console.log("saml >>>>>>>>>>>>>>>> ");
//       passport.authenticate("saml", { session: false })(null, null, () => {
//         console.log("into the passport auth func >>>>>>>>>>>> ");
//         // Redirect to a success or failure page
//         window.location.href = "/auth/saml/callback";
//       });
//       return null;
//     } catch (error) {
//       console.log("saml func error >>>", error);
//     }
//   }, []);

//   return null; // You can render a loading spinner or message here
// }
