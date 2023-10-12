import "dotenv/config";
import generatePasswordRepositories from "../repositories/generatePasswordRepositories";
import generateRandomString from "../utils/generateRandomString";

async function createPassword(length: number): Promise<string> {
  if (length > 25 || length <= 0)
    throw new Error(
      "You cannot create a password longer than 25 characters or less than 0"
    );

  let newRandomString = generateRandomString.execute(length);

  await generatePasswordRepositories.createPasswordRepository(newRandomString);
  return newRandomString;
}

export default {
  createPassword,
};
