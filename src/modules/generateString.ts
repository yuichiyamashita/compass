// ========================================
// 64文字のランダムな文字列を生成する
export const generateRandomString = (): string => {
  const S = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const N = 64;
  const randomString = Array.from(crypto.getRandomValues(new Uint32Array(N)))
    .map((n) => S[n % S.length])
    .join("");
  return randomString;
};

// ========================================
// 現在の日付の文字列を生成する
export const generateNowDateString = (): string => {
  const now = new Date();
  const year = now.getFullYear();
  const month = ("0" + (now.getMonth() + 1)).slice(-2);
  const date = ("0" + now.getDate()).slice(-2);
  const day = now.getDay();
  const weekdays = ["日", "月", "火", "水", "木", "金", "土"];
  const time = year + "/" + month + "/" + date + `(${weekdays[day]})`;
  return time;
};
