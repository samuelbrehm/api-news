import * as express from "express";
import * as bodyParser from "body-parser";

import Database from "./infra/db";

class StartUp {
  public app: express.Application;
  private _db: Database;

  constructor() {
    this.app = express();

    this._db = new Database();
    this._db.createConnection();

    this.middlewares();

    this.routes();
  }

  middlewares() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  routes() {
    this.app.route("/").get((req, res) => {
      res.send({ version: "0.0.1" });
    });
  }
}

export default new StartUp();
