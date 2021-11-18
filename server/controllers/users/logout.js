module.exports = async (req, res) => {
  console.log(res);
  // res cookies에 쿠키가 안담김...
  // res.clearCookie("jwt");
  res.status(205).send("Logged out successfully");
  // res.status(500).send();
};
