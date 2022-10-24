// random OTP

const generatorOTP = (limit) => {
  const digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < limit; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
};
console.log(generatorOTP(4));
console.log(generatorOTP(8));
