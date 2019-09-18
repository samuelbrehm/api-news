import * as mongoose from "mongoose";

class Database {
  private DB_URL = "mongodb://localhost:27017/db_portal";
  // private DB_URL = "mongodb://link-db/db_portal";

  createConnection() {
    mongoose.connect(this.DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: true
    });
  }
}

export default Database;
