import fs from 'fs';
import path from 'path';
import gulp from 'gulp';
import parseMD from 'parse-md'

const headers = {
    general: "#### [[⬆]](#toc) <a name='general'>General Questions:</a>",
    css: "#### [[⬆]](#toc) <a name='css'>CSS Questions:</a>",
    js: "#### [[⬆]](#toc) <a name='js'>JS Questions:</a>",
    coding: "#### [[⬆]](#toc) <a name='code-questions'>Coding Questions:</a>",
    testing: "#### [[⬆]](#toc) <a name='testing'>Testing Questions:</a>",
    html: "#### [[⬆]](#toc) <a name='html'>HTML Questions:</a>",
    performance: "#### [[⬆]](#toc) <a name='performance'>Performance Questions:</a>",
    network: "#### [[⬆]](#toc) <a name='network'>Network Questions:</a>",
    fun: "#### [[⬆]](#toc) <a name='fun'>Fun Questions:</a>"
}

const files = {
    coding: "./src/questions/coding-questions.md",
    css: "./src/questions/css-questions.md",
    fun: "./src/questions/fun-questions.md",
    general: "./src/questions/general-questions.md",
    html: "./src/questions/html-questions.md",
    javascript: "./src/questions/javascript-questions.md",
    performance: "./src/questions/performance-questions.md",
    network: "./src/questions/network-questions.md",
    testing: "./src/questions/testing-questions.md"
}



function writeTmpl() {
    let tmpl = 
    `
${fs.readFileSync("./src/_includes/md/header.md",(err)=>{console.log(err)})}
${headers["general"]}
${fs.readFileSync(files["general"],(err)=>{console.log(err)})}
${headers["css"]}
${fs.readFileSync(files["css"],(err)=>{console.log(err)})}
${headers["js"]}
${fs.readFileSync(files["javascript"],(err)=>{console.log(err)})}
${headers["coding"]}
${fs.readFileSync(files["coding"],(err)=>{console.log(err)})}
${headers["testing"]}
${fs.readFileSync(files["testing"],(err)=>{console.log(err)})}
${headers["html"]}
${fs.readFileSync(files["html"],(err)=>{console.log(err)})}
${headers["performance"]}
${fs.readFileSync(files["performance"],(err)=>{console.log(err)})}
${headers["network"]}
${fs.readFileSync(files["network"],(err)=>{console.log(err)})}
${headers["fun"]}
${fs.readFileSync(files["fun"],(err)=>{console.log(err)})}
    `
     return tmpl.replace(/---\n.*\n.*\n.*\n---/gm,"");


}

gulp.task("template", (done) => {

    fs.writeFileSync("./src/translations/_template/README.md",writeTmpl(),(err)=>{console.log(err)})

    done();
});


gulp.task("default", gulp.series("template"));

