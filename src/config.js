const config = {
    s3: {
      REGION: "webbi-skools-quiz-app-upload",
      BUCKET: "eu-west-2",
    },
    apiGateway: {
      REGION: "eu-west-2",
      URL: "https://as1udskg6e.execute-api.eu-west-2.amazonaws.com/prod",
    },
    cognito: {
      REGION: "eu-west-2",
      USER_POOL_ID: "eu-west-2_fpo4vWmUp",
      APP_CLIENT_ID: "2bs3220175k76st95bsp9qu9ra",
      IDENTITY_POOL_ID: "eu-west-2:38b1dca4-d9cf-4887-9e4c-289f4876563b",
    },
  };
  
  export default config;