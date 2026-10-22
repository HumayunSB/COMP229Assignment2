import app from "./server/express.js";
import router from "./server/assets-router.js";
import { connectDatabase } from "./server/database.js";

app.use("/src", router);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to My Portfolio application." });
});

const port = Number(process.env.PORT) || 3000;

async function startServer() {
  try {
    await connectDatabase();
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}/`);
    });
  } catch (error) {
    console.error(
      "Backend startup failed:",
      error instanceof Error ? error.message : "Unknown startup error."
    );
    process.exitCode = 1;
  }
}

startServer();

export default app;
