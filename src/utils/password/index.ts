import * as crypto from 'crypto';

export const generatePassword = async (
  password: string,
  salt: string,
): Promise<string> => {
  const full_string = salt + password;
  const secret = await crypto
    .createHash('sha256')
    .update(full_string)
    .digest('hex');
  return secret;
};

export const comparePassword = async (
  password: string,
  salt: string,
  secret: string,
): Promise<boolean> => {
  const full_string = salt + password;
  const secret_compare = await crypto
    .createHash('sha256')
    .update(full_string)
    .digest('hex');
  return secret_compare === secret;
};
