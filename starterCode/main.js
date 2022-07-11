/*
 * File Name: main.js
 * Description:
 *
 * Created Date:
 * Author:
 *
 */

const IOhandler = require("./IOhandler"),
  zipFilePath = `${__dirname}/myfile.zip`,
  pathUnzipped = `${__dirname}/unzipped`,
  pathProcessed = `${__dirname}/grayscaled`;

IOhandler.unzip(zipFilePath, pathUnzipped)
  .then(
    () => {
      console.log("Extraction operation complete");
      return IOhandler.readDir(pathUnzipped);
    },
    (e) => console.log("error", e)
  )
  .then(
    (fileList) => {
      fileList.forEach((file) => {
        if (file.split(".").pop().toLowerCase() === "png") {
          IOhandler.grayScale(
            `${pathUnzipped}/${file}`,
            `${pathProcessed}/${file}`
          );
        }
      });
    },
    (e) => console.log("error", e)
  );
