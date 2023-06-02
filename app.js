import { BlobServiceClient } from '@azure/storage-blob';
import { DefaultAzureCredential } from '@azure/identity';

const credential = new AzureCliCredential();

var client = new BlobServiceClient(
  'https://sdka.blob.core.windows.net/',
  credential
);

let container = client.getContainerClient('clicontainer');
await container.createIfNotExists();
