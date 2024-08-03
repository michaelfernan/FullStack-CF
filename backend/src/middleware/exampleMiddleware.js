module.exports = (req, res, next) => {
  console.log('Middleware executado');
  next();
};