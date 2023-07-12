import app from "./app";

const init = async () => {
  try {
    app.listen(3002, () => {
      console.log("Express App Listening on Port 3002");
    });
  } catch (error) {
    console.error(`An error occurred: ${JSON.stringify(error)}`);
    process.exit(1);
  }
}

init();

