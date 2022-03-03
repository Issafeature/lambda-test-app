
const { Lambda, LambdaClient } = require('@aws-sdk/client-lambda');

// a client can be shared by different commands.
const client = new LambdaClient({ region: 'us-east-1' });

const params = {
  /** input parameters */
};

// // async/await.
// try {
//   const data = await client.send(command);
//   // process data.
// } catch (error) {
//   // error handling.
// } finally {
//   // finally.
// }