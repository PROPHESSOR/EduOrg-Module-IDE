import File from "./File";

class Project {
    static create(name = "Project", props = {}) {
        let Package = {
            "name": props.name || name.toLowerCase() || "project",
            "version": "1.0.0",
            "description": props.description || "Simple JsMobileBasic App",
            "author": props.author || "JsMB-Developer",
            "main": "index.html",
            "repository": {
                "type": "git",
                "url": "https://github.com/PROPHESSOR/JsMB-IDE.org"
            },
            "keywords": [
                "JsMB",
                "JsMobileBasic"
            ],
            "private": true,
            "license": "MIT",
            JsMB: {
                version: "alpha 10"
            },
            window:{
                //TODO: Write me...
            }
        };

        let Autorun = 
`//########## JsMobileBasic Script##########\\\\

function Main(){
    println($JsMobileBasic.name);
    println($JsMobileBasic.version);
}`;

        File.createFolder(name);
        File.create(`${name}/package.json`, JSON.stringify(Package, null, 4));
        File.create(`${name}/Autorun.bas`);

        return true;
    }

    static open(){
        //TODO: Write me...
        return false;
    }

    static save(){
        //TODO: Write me...
        return false;
    }

}

export default Project;