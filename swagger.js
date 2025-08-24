const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "E-commerce API",
    description: "A simple API for e-commerce operations",
  },
  host: "localhost:3000/api/v1", // Your server's host
  schemes: ["http"],
};

const outputFile = "./swagger-output.json"; // Path where the generated Swagger JSON will be saved
const endpointsFiles = ["./routers/*.js"];

// Generate the Swagger documentation
swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require("./app.js"); // Start the server once documentation is generated
});
