const fs = require("fs");
const util = require("util");
const moment = require('moment');
const constants =  require('./constants');

const writeFile = (obj) => {
    let path = typeof obj.path !== "undefined" ? obj.path : "";
    let filename = typeof obj.filename !== "undefined" ? obj.filename : "";
    let data = typeof obj.data !== "undefined" ? obj.data : "";
    if (path && filename && data) {
        if (!fs.existsSync(path)) {
            if (!fs.existsSync(constants.BASE_PATH + "/logs")) {
                fs.mkdirSync(constants.BASE_PATH + "/logs");
            }
            fs.mkdirSync(path);
        }

        let log_file = fs.createWriteStream(path + filename, { flags: "a", encoding: "utf-8", mode: "0666" });
        log_file.write(util.format(data) + "\n");
        log_file.close();
    }
}


const utility = {
    successResponse: (payload) => {
        return {
            'data': payload,
            'error': {
                'code': 0,
                'message': 'sucess',
            }
        }
    },
    errorResponse: (error) => {
        const err = {};
        if (error){
            err.name = error.name,
            err.description = error.message?error.message:error.description
        }
        return {
            'data': '',
            'error': {
                'code': 1,
                'message': err,
            }
        }
    },
    fileWrite: writeFile,
    logWriter: (data, folderName) => {
        let path = constants.BASE_PATH + "/logs/" + folderName + "/";
        data["time"] = moment().format("Y-M-D H:m:s");
        let filename = moment().format("Y-M-D") + ".log";

        writeFile({ path: path, filename: filename, data: JSON.stringify(data) });
    }

}
module.exports = utility;