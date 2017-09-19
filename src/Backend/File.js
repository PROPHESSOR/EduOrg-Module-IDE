const fs = require("fs");

class File {
    static create(file, data) {
        try {
            return !fs.writeFileSync(file, data, "utf-8");
        } catch (e) {
            return !!console.error(e);
        }
    }

    static createFolder(folder) {
        try {
            return !fs.mkdirSync(folder);
        }catch(e){
            return !!console.error(e);
        }
    }
}

export default File;