import express from "express";
import { pingCheck } from "../controllers/pingController.js";
import v1Router from "./v1/index.js"
const Router = express();
Router.use("/v1",v1Router)
export default Router;