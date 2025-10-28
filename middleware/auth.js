import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  const { frontendtoken } = req.headers;
  if (!frontendtoken) {
    return res.json({ success: false, message: "Not Authorized Login Again" });
  }

  try {
    const token_decode = jwt.verify(frontendtoken, process.env.JWT_SECRET_KEY);
    req.body.userId = token_decode.id;
    next();
  } catch (err) {
    console.log(err);
    res.json({success: false, message: err.message})
  }
};

export default authUser;
