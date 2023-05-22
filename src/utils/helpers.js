export const formatPrice = (price) => {
  return String(price)
  .split('')
  .reverse()
  .map((digit, index) => {
  if (index === 0) {
  return   digit + '₽';
  }
  if (index % 3 === 2) {
  return ' ' + digit;
  }
  return digit;
  })
  .reverse()
  .join('')
  .trim();
  };
  
  export const isAccessTokenExpire = (expire) => {
  if (!expire) {
  return true;
  }
  const end = new Date(expire);
  const now = new Date();
  return now > end;
  };
  
  export const removeNonDigit = (value) => value.replace(/\D/g, '');
  
  export const getTodayEnd = () => {
  const today = new Date();
  today.setHours(23, 59, 59, 999);
  return today;
  };