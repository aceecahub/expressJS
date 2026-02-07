const checkApiKey = (req, res, next) => {
  const apiKey = req.headers['api-key'];

  if(!apiKey) {
    return res.status(403).json(
      { message: "Forbidden: API Key tidak ditemukan" }
    )
  }
  next();
}

export default checkApiKey; 