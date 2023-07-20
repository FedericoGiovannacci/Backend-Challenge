import express from "express";
import methodOverride from "method-override";
const app = express();
//Middlewares
app.use(express.json());
app.use(methodOverride("_method"));
//Port listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
