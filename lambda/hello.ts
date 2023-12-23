import { Handler } from "aws-cdk-lib/aws-lambda";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export const handler: Handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    console.log("request:", JSON.stringify(event, undefined, 2));

    const { httpMethod, path, body } = event;

    const response = {
      statusCode: 200,
      header: { "Content-Type": "text/plain" },
      body: JSON.stringify(`Hello from CDK! You've hit ${path}\n`),
    };

    return response;
  } catch (error) {
    console.log(error);

    return {
      statusCode: 500,
      body: JSON.stringify("Something went wrong!"),
    };
  }
};
