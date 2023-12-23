import { Handler } from "aws-cdk-lib/aws-lambda";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export const handler: Handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    console.log("request:", JSON.stringify(event, undefined, 2));

    const response = {
      statusCode: 200,
      header: { "Content-Type": "text/plain" },
      body: JSON.stringify(`Yo CDK! You've hit ${event.path}\n`),
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
