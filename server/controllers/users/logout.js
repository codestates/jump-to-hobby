module.exports = (req, res) => {
  // TODO: 로그아웃 로직을 작성합니다.
  console.log("여기 서버 로그아웃");
  // res cookies에 쿠키가 안담김...
  console.log(res);

  res.cookie("jwt", "").status(205).send("Logged out successfully");
  // res.status(500).send();
};
