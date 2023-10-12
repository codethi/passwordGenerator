import { ICreatePassword } from "../interfaces/ICreatePassword";
import joi from "joi";

export const passwordCreateDataSchema = joi.object<ICreatePassword>({
  length: joi.number().required(),
});
