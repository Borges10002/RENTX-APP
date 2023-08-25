import { appSchema, tableSchema } from "@nozbe/watermelondb";

import { carSchema } from "./carSchema";
import { userSchema } from "./userSchema";

const schemas = appSchema({
  version: 1,
  tables: [userSchema, carSchema],
});

export { schemas };
