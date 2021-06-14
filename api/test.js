module.exports = async (req, res) => {
  res.json({
    url: req.url,
    originalUrl: req.originalUrl,
    body: req.body,
    query: req.query,
    cookies: req.cookies,
  })
}
