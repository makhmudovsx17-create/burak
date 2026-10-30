import dotenv from "dotenv"; // .env chaqirdik
dotenv.config(); // .env configuratsiyasini amalga oshirdik
import mongoose from "mongoose"; // mongoose ni hosil qildik
import app from "./app"; // express app ni hosil qildik

mongoose
    .connect(process.env.MONGO_URL as string, {}) // database ga ulanishni talab etdik
    .then((data) => {
        console.log("MongoDB connection succed");
        const PORT = process.env.PORT ?? 3003;
        app.listen(PORT, function () {
            console.info(`The server is runnung successfully on port: ${PORT}`);
            console.info(`Admin project on http://localhost:${PORT}/admin \n`);
        });
    })
    .catch((err) => console.log("ERROR on connection MongoDB", err));
