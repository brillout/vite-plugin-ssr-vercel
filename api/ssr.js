const { createPageRender } = require("vite-plugin-ssr");

const renderPage = createPageRender({ isProduction: true });

module.exports = async (req, res) => {
  const url = req.originalUrl || req.url;
  const pageContext = { url };
  const result = await renderPage(pageContext);
  if (result.nothingRendered) return;
  res.status(result.statusCode).send(result.renderResult);
};
