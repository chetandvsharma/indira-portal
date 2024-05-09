import pledgeSetupService from "@services/PledgeService";

export const POST = async (req, res) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      Referer: "https://www.cdslindia.com/index.html",
      DPID: "17000",
      UserID: "APIADMIN12",
      Password: "CDsl12##",
    };

    const reqBody = {
      PledgorBOID: "1201700000229606",
      PledgeeBOID: "1201700000229621",
      PRFNumber: "17000A",
      ExpiryDate: "25042024",
      ReasonCode: "4",
      ISINDTLS: [
        {
          ISIN: "INE780P01017",
          Quantity: "1.000",
          Value: "110.00",
        },
      ],
    };

    const response = await pledgeSetupService(headers, reqBody);
    return new Response(JSON.stringify(response), { status: 200 });
  } catch (error) {
    console.log(error)
    return new Response("Failed to setup pledge", { status: 500 });
  }
};
