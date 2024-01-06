import pinataSDK from "@pinata/sdk";

const pinataClient = new pinataSDK(
  process.env.PINATA_API_KEY,
  process.env.PINATA_PRIVATE_API_KEY
);

export default pinataClient;
