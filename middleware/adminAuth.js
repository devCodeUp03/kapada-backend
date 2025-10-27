import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    const { token } = req.headers;
    console.log(req.headers)
    console.log(token);

    if (!token) {
      return res.json({ success: false, message: "Unauthorized login" });
    }
    const decode_token = await jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (decode_token !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.json({ success: false, message: "Unauthorized access" });
    }

    next();
  } catch (error) {
  
    console.log("HI");
    res.status(500).json({ success: false, message: error.message });
  }
};

export default adminAuth;
