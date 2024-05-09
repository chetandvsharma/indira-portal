import express from "express";
import pledgeSetupService from "@services/PledgeService";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
console.log("express connected");

app.get("/test", (req, res) => {
  res.send("success");
});

app.post("/pledge-setup", async (req, res) => {
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

    res.status(201).json({
      success: response?.Success,
      message: response?.Success
        ? "pledge setup successful"
        : response?.PledgeSetupResponse?.ErrorMessage,
      data: response?.PledgeSetupResponse,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error?.message || "Internal Server Error",
      error,
    });
  }
});

export default app;
