import express from "express";
import morgan from "morgan";
//Routes
import empleadosRoutes from "./routes/empleados.routes.js";
import ubicacionesRoutes from "./routes/ubicaciones.routes.js";
import mesasRoutes from "./routes/mesas.routes.js";

 const app = express();

//Settings
app.set("port", 4000);

//Middleware
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api/empleados", empleadosRoutes);
app.use("/api/ubicaciones", ubicacionesRoutes);
app.use("/api/mesas", mesasRoutes);

app.use((req, res) => {
    res.status(404).json({
        message: 'endpoint not found'
    })
})

export default app;