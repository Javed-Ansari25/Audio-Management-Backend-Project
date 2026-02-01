import { ApiError } from "../utils/apiError.js";
const authorize = (...roles) =>
  (req, res, next) => {
    if (!roles.includes(req?.user.role)) {
      return res.status(403).json(
        new ApiError(403, "Access denied")
      )
      
    }
    next();
};

export default authorize
