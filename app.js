import { ConfidentialClientApplication } from '@azure/msal-node';
import fetch from 'node-fetch';

const config = {
  auth: {
    clientId: '',
    authority: 'https://login.microsoftonline.com/<tenantId>/',
    clientSecret: '',
  },
};

const client = new ConfidentialClientApplication(config);

const request = {
  scopes: ['https://graph.microsoft.com/.default'],
};

let response = await client.acquireTokenByClientCredential(request);

console.dir(response);

let query = await fetch('https://graph.microsoft.com/v1.0/users', {
  headers: {
    Authorization: `Bearer ${response.accessToken}`,
  },
});

let json = await query.json();

console.dir(json);
