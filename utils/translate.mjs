import markdownTranslate from 'markdown-translator';
import concat from 'concat-files';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import async from 'async';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dir = path.resolve(path.join(__dirname, 'temp'));

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}
const tmpReadme = `${dir}/readme.md`

  concat([
    './src/questions/general-questions.md',
    './src/questions/html-questions.md',
    './src/questions/css-questions.md',
    './src/questions/javascript-questions.md',
    './src/questions/testing-questions.md',
    './src/questions/performance-questions.md',
    './src/questions/network-questions.md',
    './src/questions/coding-questions.md',
    './src/questions/fun-questions.md'
  ], tmpReadme, function(err) {
    if (err) throw err
    markdownTranslate({
      // Give either a filepath
      src: tmpReadme,
      from: "en-us",
      to: "it",
      subscriptionKey: "",
      region: "eastus",
    }).then((res) => {
      console.log(res);
      fs.writeFile("./utils//temp/italian.md",res,(err) => {
        if (err)
          console.log(err);
        else {
          console.log("File written successfully\n");
        }
      })
    }) 
  })


