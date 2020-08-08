// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
//https://ies53o9xg5.execute-api.eu-west-3.amazonaws.com/dev/todos

const apiId = 'ies53o9xg5'
export const apiEndpoint = `https://${apiId}.execute-api.eu-west-3.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'dev-n66hsxld.us.auth0.com',            // Auth0 domain
  clientId: 'Edx6n6EMOWHmF4UfFnylFywDgY6Whnve',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
