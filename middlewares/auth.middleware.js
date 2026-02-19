import jwt from "jsonwebtoken";

export const verifToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    
    if(!authHeader || !authHeader.startsWith("Bearier ")) {
      return res.status(401).json({
        message: "Unauthorized"
      })
    }

    const token = authHeader.split(" ")[1];

    try{
      const decode = jwt.verify(token, process.env.JWT_SECRET);

      req.user = decode;

      next();
    }catch(error){
      return res.status(401).json({
        message: "Invalid Token"
      })
    }
  }