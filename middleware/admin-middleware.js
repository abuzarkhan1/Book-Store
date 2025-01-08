const isAdminUser = (req, res) => {
  if (req.userInfo.role !== 'admin') {
    return res
      .status(403)
      .json({
        success: false,
        message: "You are not authorized to access this route.",
      });
  }

  next();
};

module.exports = isAdminUser;