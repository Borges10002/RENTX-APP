import { Database } from "@nozbe/watermelondb";
import DatabaseProvider from "@nozbe/watermelondb/DatabaseProvider";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";

import { schemas } from "./schema";
import { User } from "./models/User";
import { Car } from "./models/Car";

const adapter = new SQLiteAdapter({
  schema: schemas,
});

export const database = new Database({
  adapter,
  modelClasses: [],
  actionsEnabled: true,
});
