const path = require("path");

exports.enviarVideo = (req, res) => {
  try {
    res.sendFile(
      path.resolve(__dirname, `../public/videos/${req.params.archivo}`)
    );
  } catch (error) {
    console.log(error);
  }
};
exports.enviarPDF = (req, res) => {
  try {
    res.sendFile(
      path.resolve(__dirname, `../public/pdf/${req.params.archivo}`)
    );
  } catch (error) {
    console.log(error);
  }
};

exports.enviarPic = (req, res) => {
  try {
    res.sendFile(
      path.resolve(__dirname, `../public/pictures/${req.params.archivo}`)
    );
  } catch (e) {
    console.log(e);
  }
};

exports.enviarGif = (req, res) => {
  try {
    res.sendFile(
      path.resolve(__dirname, `../public/gif/${req.params.archivo}`)
    );
  } catch (e) {
    console.log(e);
  }
};
