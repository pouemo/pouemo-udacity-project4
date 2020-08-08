import 'source-map-support/register'
import * as middy from 'middy'
import { cors } from 'middy/middlewares'
import { createTodo } from "../../Logic/todos";
import { getUserId } from '../utils'
import { createLogger } from '../../utils/logger';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'

import { CreateTodoRequest } from '../../requests/CreateTodoRequest'

const logger = createLogger('createTodo');

export const handler= middy(async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const newTodo: CreateTodoRequest = JSON.parse(event.body)
  
  // TODO: Implement creating a new TODO item
  const userId = getUserId(event)
  const newItem = await createTodo(newTodo, userId);
  logger.info(`create Todo for user ${userId} with data ${newTodo}`);
  return {
    statusCode: 201,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify({
      item :{
        ...newItem,
      }
    }),
};
})

handler.use(
  cors({
    credentials: true
  })
)