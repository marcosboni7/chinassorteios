import axios from "axios";
import fs from 'fs';
import path from "path";
import { Agent } from "https";

const cert = fs.readFileSync(path.resolve(__dirname, '../cert/'+process.env.GN_CERT));
const credentials = Buffer.from(`${process.env.GN_CLIENT_ID}:${process.env.GN_CLIENT_SECRET}`).toString('base64');

const gnauth = async () => {
  const authentication = await axios({
    method: 'POST',
    url: `${process.env.GN_API}/oauth/token`,
    data: {
      grant_type: 'client_credentials'
    },
    headers: {
      Authorization: `Basic ${credentials}`,
      'Content-Type': 'application/json'
    },
    httpsAgent: new Agent({
      pfx: cert,
      passphrase: ''
    })
  });

  return axios.create({
    baseURL: process.env.GN_API,
    headers: {
      Authorization: `Bearer ${authentication.data.access_token}`,
      'Content-Type': 'application/json'
    },
    httpsAgent: new Agent({
      pfx: cert,
      passphrase: ''
    })
  });
};

export default gnauth;
