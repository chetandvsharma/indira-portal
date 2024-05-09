import axios from "axios";


const pledgeSetupService = async (headers, body) => {
  try {
    const response = await axios.post(
      "http://amccdasapp.cdslindia.com/PledgeAPIService/api/pledgesetup",
      //   "http://mockapiapp.cdslindia.com/PledgeAPIService/api/pledgesetup",
      // JSON.stringify(body),
      body,
      {
        headers,
      }
    );

    // if (
    //   response.headers["content-type"] &&
    //   response.headers["content-type"].includes("application/json")
    // ) {
    //   // Parse the JSON response body
    //   console.log("res===>", response.data);
    // //   const responseData = JSON.parse(response);
    // //   console.log("Response Data:", responseData);
    //   return response
    // }

    return response.data;
  } catch (error) {
    console.log("error >> ", error);
    throw new Error(error?.message);
  }
};

export default pledgeSetupService;
