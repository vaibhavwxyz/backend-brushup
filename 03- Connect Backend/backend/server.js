import "dotenv/config";
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A joke",
      content: "This is a joke",
    },
    {
      id: 2,
      title: "Another joke",
      content: "This is another joke",
    },
    {
      id: 3,
      title: "Third joke",
      content: "This is third joke",
    },
    {
      id: 4,
      title: "Forth joke",
      content: "This is forth joke",
    },
    {
      id: 5,
      title: "Fifth joke",
      content: "This is fifth joke",
    },
  ];
  res.send(jokes);
});

app.listen(PORT, () => {
  console.log(`Serve at http://localhost:${PORT}`);
});
