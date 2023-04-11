import CryptoJS from "crypto-js";
const secret_key = "Hello World";

export function decryption(password) {
  const plainText = CryptoJS.AES.decrypt(password, secret_key).toString(
    CryptoJS.enc.Utf8
  );
  return plainText;
}
export function encryption(password) {
  const cipherText = CryptoJS.AES.encrypt(password, secret_key).toString();
  return cipherText;
}
