import { Console } from "console";
import { createWriteStream } from 'fs';

export const myMondayLogger = new Console({
    stdout: createWriteStream("log.txt", {flags: 'a'})// a write stream,
  });

myMondayLogger.log("Hello");

// step 1: use this example: https://melvingeorge.me/blog/save-logs-to-files-nodejs
// export your monday logger here

// step 2: rename the package and publish 
