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
