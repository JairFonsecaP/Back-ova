exports.registro = (req, res) => {
  console.log(req.body);
  res.status(200).send({ message: "Hola" });
};
