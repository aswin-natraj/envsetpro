export const appConfig = {
  appID: "1565351165", // Contact the ZEGOCLOUD techinical support to get the AppID.
  serverSecret: "6953ca938c30c09bbdcd6f4974b2bf29", // ontact the ZEGOCLOUD techinical support to get the ServerSecret.
  token:
    "04AAAAAGNdANEAEHh1eHg5MWt6bGpwdzZ6eXgAsBZdupwnUDL0Y+lLdseZVHrf+yBNbd1llJuwrK62SuHsn6mR0UpFiqBr7NrDC7wJbhHJKL5/RYpdYoF0GVZjWwx7ltq0gUZGLzB7EXoXTOW1i/g+emv/bLwMRn+T19KU3TRGGU+TLZO+T/7wKulKmmmGcBl30jXc6XzuTCbjp7c/ctuVpVVXNlkfQyiBCM/g5PRjQegQn8zPRogjiC/vJib5oW2Ln9+xiAWr7cuk5UVg",
};

export async function generateToken(userID, roomID, userName) {
  return await fetch(
    `https://choui-prebuilt.herokuapp.com/access_token?userID=${userID}&userName=${userName}&roomID=${roomID}&expiry_ts=8000`
  ).then((res) => res.json());
}

export function randomId(lengt) {
  let resul = "";
  if (resul) return resul;
  var char = "1234qwertyuiopasdfghjklzxcvbnm567890";
  var maxlen = char.length;
  lengt = lengt || 6;
  for (let index = 0; index < lengt; index++) {
    resul += char.charAt(Math.floor(Math.random() * maxlen));
  }
  console.log(resul, "bksad");
  return resul;
}

export function randomName() {
  const ranName = [
    "Katherine Larson",
    "Konnor Caldwell",
    "Ada Woodward",
    "Bailey Michael",
    "Justine Stewart",
    "Judah May",
    "Beckham Pena",
    "Abbey Barry",
    "Glenn Frazier",
    "Sage Stafford",
  ];
  return ranName[Math.round(Math.random() * ranName.length)];
}
