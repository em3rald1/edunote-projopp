const express = require("express");
const filesystem = require("fs");
const application = express();

const router = new Router(application, "/views");
router.apply();
router.set404Error("404: Not Found");

application.listen(3000, () => {
    console.log(`[LOG] ${new Date().toDateString()}: Application is hosted on port 3000`);
})

class Router {
    constructor(application, directory) {
        this.application = application;
        this.directory = __dirname + directory;
    }
    set404Error(error) {
        this.application.get("*", (_, response) => {
            response.send(error);
        })
    }
    apply() {
        this.application.use(
            express.static(this.directory)
        );

    }
}