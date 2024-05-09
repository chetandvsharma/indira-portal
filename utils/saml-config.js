import passport from "passport";
import { Strategy as SamlStrategy } from "passport-saml";

(function () {
  try {
    passport.use(
      new SamlStrategy(
        {
          entryPoint: "http://localhost:3000/auth/saml", // Your IdP SAML endpoint
          // issuer: 'your-app-id', // Your IdP app ID
          identifierFormat: 'urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress',
          callbackUrl: "http://localhost:3000/auth/saml/callback", // Callback URL for SAML response
          // cert: require('../utils/server.crt') // ssl certificate
          // cert: '-----BEGIN CERTIFICATE-----\nYour SAML certificate here\n-----END CERTIFICATE-----' // Your IdP SAML certificate
          cert: `
-----BEGIN CERTIFICATE-----
MIID1TCCAr2gAwIBAgIUeQqzYx86tAfewo7nNFl/XWCjgQswDQYJKoZIhvcNAQEL
BQAwejELMAkGA1UEBhMCSU4xCzAJBgNVBAgMAk1QMQswCQYDVQQHDAJJTjENMAsG
A1UECgwESVNQTDELMAkGA1UECwwCSVQxDTALBgNVBAMMBE5CRkMxJjAkBgkqhkiG
9w0BCQEWF2NoZXRhbnNAaW5kaXJhdHJhZGUuY29tMB4XDTI0MDMyNjA0NTAwOVoX
DTI1MDMyNjA0NTAwOVowejELMAkGA1UEBhMCSU4xCzAJBgNVBAgMAk1QMQswCQYD
VQQHDAJJTjENMAsGA1UECgwESVNQTDELMAkGA1UECwwCSVQxDTALBgNVBAMMBE5C
RkMxJjAkBgkqhkiG9w0BCQEWF2NoZXRhbnNAaW5kaXJhdHJhZGUuY29tMIIBIjAN
BgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsGS+AOzp6O1dfYv7I56m5P1SlxTg
eUCPj6wKWzETZ1wQrAF+Ehd4btkV1kLeKK5gntcbmo8UY1PsWMGqWb0QuDAJcwny
MO6hHmntyATBPJT8A4377hXmeaFEwti0bfDpiW1oryFIc7PmxVtJqGhW6gp8pMI1
Z+FlQENCtzfGdp9CHROT/LKoPw3Vf58duj2a4qPeZDntz/GDzxML6Pi8H2vfEbqG
yolg6QdVGmiVYQeQB38gQNR8uJD8sGF66jrUuIlf2e2YPZplAZenDUPAyoLmWx6/
mrtw82sB9bBVy+xEoJ881S0bIwOrqsNy8N9kTIECroteZ8j8YvZXHxinzwIDAQAB
o1MwUTAdBgNVHQ4EFgQULCodEhpIGNNTvakXDSz9d5LT/2IwHwYDVR0jBBgwFoAU
LCodEhpIGNNTvakXDSz9d5LT/2IwDwYDVR0TAQH/BAUwAwEB/zANBgkqhkiG9w0B
AQsFAAOCAQEAoH0padrLopsZ4eVDbgcMPnrpkH22wyCmNTDx3b8t/1ZUdGXwTdED
9OR4Urau3EI6GVI8kMt3MrPXyHakdUNV/GV4+jv8244dchVlvjyFhpmO37rNuXfH
ZCXz0mNYDR/hUzJqxyOMOzfi7GXd0bhceXB5UAJWsMhbEoEoBUv3Q/zzCK3em4XL
QFii1ngvvBOImklcvI3istQv6D4aJD2I+/n6GVuriDD0C1h9TGNff/qAM8ksClLa
jvw4J3r+Q2om0u/6geki6hmyN4jb20ddr7WSqeiGIm0VYMT425i46PYXt79qL8pZ
FDpYouJnxr3wf58fcjSXBBs6UI2C27G1Pg==
-----END CERTIFICATE-----
`, // Your IdP SAML certificate
        },
        (profile, done) => {
          return done(null, profile);
        }
      )
    );
  } catch (error) {
    console.log("error ==> ", error);
  }
})();

export default passport;
