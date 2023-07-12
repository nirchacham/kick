import { Request, Response, NextFunction } from "express";

export const validateFromToParams = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { from, to } = req.query;
  if (!from && !to) return res.status(400).send("from or to parameters are required");
  if (from && isNaN(+from))
    return res.status(400).send("from param must be a number"); 
  if (to && isNaN(+to))
    return res.status(400).send("to param must be a number");    
  next();
};
