// ========================================
// ちゃんと文字列が入力されているかチェック
export const validateEmptyString = (inputedStr: string): boolean => {
  let validator = true;
  const newStr = inputedStr.replace(/\s/g, "");
  if (newStr === "") {
    validator = false;
  }
  return validator;
};

// ========================================
// メールアドレスの形式をチェック
export const validateEmailFormat = (email: string): boolean => {
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-z-A-Z0-9-]+)*$/;
  return regex.test(email);
};

// ========================================
// パスワードが8文字以上の半角英数字であるかチェック
export const validateInputPassWord = (password: string): boolean => {
  const regex = /^([a-zA-Z0-9]{8,})$/;
  return regex.test(password);
};
