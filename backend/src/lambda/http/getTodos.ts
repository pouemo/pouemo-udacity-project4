import 'source-map-support/register'
import * as middy from 'middy'
import { cors } from 'middy/middlewares'
import { getAllTodos } from "../../Logic/todos";
import { getUserId } from '../utils'
import { createLogger } from '../../utils/logger';

import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'

const logger = createLogger('getTodo');


export const handler = middy(async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  // TODO: Get all TODO items for a current user
  console.log('Processing event: ', event)
  const userId = getUserId(event)
console.log("userid : ",userId);
  const todos = await getAllTodos(userId);
  logger.info(`get all Todo for user ${userId}`);
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify({
      items: todos
    })
};
})

handler.use(
  cors({
    credentials: true
  })
)