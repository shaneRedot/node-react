import express from "express";
const app = express();
import router from "./routes";

const PORT = process.env.PORT || 3000;
app.use(router);

app.listen(PORT, () => {
    console.log(`APP IS LISTNING AT PORT ${PORT}`);
}); 




