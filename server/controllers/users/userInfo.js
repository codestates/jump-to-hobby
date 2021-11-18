const { user } = require("../../models");
const { verifyAccessToken } = require("../tokenFunctions");

module.exports = async (req, res) => {
  try {
    // 전달받은 JWT 토큰의 유저정보
    const accessTokenData = verifyAccessToken(req);
    // JWT 토큰을 전달받지 못했거나 유효하지 않은 JWT 토큰을 전달받은 경우
    if (!accessTokenData) {
      return res.status(401).json({ data: null, message: "not authorized" });
    } else {
      // 유효한 JWT 토큰을 전달받은 경우
      // 전달받은 정보에 해당하는 유저 정보 조회
      const userInfo = await user.findOne({
        where: { email: accessTokenData["email"] },
      });
      // 전달받은 JWT 토큰, 유저 정보의 정보를 담아 응답
      return res
        .status(200)
        .cookie("jwt", req.cookies["jwt"])
        .json({ data: { userInfo } });
    }
  } catch (err) {
    console.error;
  }
};
