import fs from 'fs';
import path from 'path';
import gulp from 'gulp';
import parseMD from 'parse-md'

gulp.task("build", (done) => {
    const dir = "./src/questions/";
    let buffer = "";
    // read directory
        fs.readdir(dir, (error, fileNames) => {
          if (error) throw error;
          fileNames.forEach(filename => {
            // get current file name
            const name = path.parse(filename).name;
            // get current file extension
            const ext = path.parse(filename).ext;
            // get current file path
            const filepath = path.resolve(dir, filename);
      
            // get information about the file
            fs.stat(filepath, function(error, stat) {
              if (error) throw error;
              // check if the current path is a file or a folder
              const isFile = stat.isFile();
      
              // exclude folders
              if (isFile) {
                const fileContents = fs.readFileSync(filepath, 'utf8')
                const { metadata, content } = parseMD(fileContents)
                    buffer += content;
                } 
                fs.writeFile("src/translations/_template.README.md", buffer, (err) => {
                    if (err)
                      console.log(err);
                    else {
                      console.log("File written successfully\n");
                      console.log(fs.readFileSync("src/translations/_template.README.md", "utf8"));
                    }}
                );
            });
           
          });
          
        });
        
    done();
});
  

gulp.task("default",gulp.series("build"));
  
