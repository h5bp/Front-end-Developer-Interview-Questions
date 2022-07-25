import markdownTranslate from "markdown-translator";
import concat from "concat-files";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import async from "async";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dir = path.resolve(path.join(__dirname, "temp"));

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

const languages = [
  { folder: "arabic", languageCode: "ar" },
  { folder: "bulgarian", languageCode: "bg" },
  { folder: "burmese", languageCode: "my" },
  { folder: "chinese", languageCode: "zh" },
  { folder: "chinese-traditional", languageCode: "zh-CHT" },
  { folder: "croatian", languageCode: "hr" },
  { folder: "czech", languageCode: "cs" },
  { folder: "danish", languageCode: "da" },
  { folder: "dutch", languageCode: "nl" },
  { folder: "farsi", languageCode: "fa" },
  { folder: "french", languageCode: "fr" },
  { folder: "german", languageCode: "de" },
  { folder: "greek", languageCode: "el" },
  { folder: "hebrew", languageCode: "he" },
  { folder: "hindi", languageCode: "hi" },
  { folder: "hungarian", languageCode: "hu" },
  { folder: "indonesian", languageCode: "id" },
  { folder: "italian", languageCode: "it" },
  { folder: "japanese", languageCode: "ja" },
  { folder: "korean", languageCode: "ko" },
  { folder: "latvian", languageCode: "lv" },
  { folder: "polish", languageCode: "pl" },
  { folder: "portuguese", languageCode: "pt" },
  { folder: "romanian", languageCode: "ro" },
  { folder: "russian", languageCode: "ru" },
  { folder: "serbian", languageCode: "sr" },
  { folder: "slovakian", languageCode: "sk" },
  { folder: "slovenian", languageCode: "sl" },
  { folder: "spanish", languageCode: "es" },
  { folder: "swedish", languageCode: "sv" },
  { folder: "turkish", languageCode: "tr" },
  { folder: "ukrainian", languageCode: "uk" },
  { folder: "vietnamese", languageCode: "vi" },
];
const files =[
  "coding-questions.md",  
  "fun-questions.md",      
  "html-questions.md",        
  "network-questions.md",      
  "testing-questions.md",
  "css-questions.md",
  "general-questions.md",  
  "javascript-questions.md", 
  "performance-questions.md",
]

  files.forEach((file)=>{
    markdownTranslate({
      src: `./src/questions/${file}`,
      from: "en-us",
      to: "it",
      subscriptionKey: "",
      region: "eastus",
    }).then((res) => {
      console.log(res);
      fs.writeFile(`${process.cwd()}/src/translations/italian/${file}`, res, (err) => {
        if (err) console.log(err);
        else {
          console.log("File written successfully\n");
        }
      });
    });
  });
