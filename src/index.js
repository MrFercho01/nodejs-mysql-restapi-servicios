import app from "./app.js";
import { PORT } from "./config.js"

const main=()=>{
    app.listen(PORT)
    console.log('Server on port ', PORT)
};

main();