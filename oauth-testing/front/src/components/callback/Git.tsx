import axios from 'axios'
import path from 'path';
import { useEffect } from 'react';

export function Git(args: any) {

  const clientID = "0f5ea9db841e2e0acbb0"
  const secretKey = "00eb22c59144ac2ee96de9419537be900e887d1d";

  const loginPath = `https://github.com/login/oauth/authorize?client_id=${clientID}`;
  const handleOAuth = async () => {
    const client = window.open(loginPath)

  }

  useEffect(() => {
    const callbackCode = window.location.search.replace("?code=", "");
    console.log(callbackCode)

    if (!callbackCode) {
      return;
    }

    (async () => {
      console.log({
        client_id: clientID,
        client_secret: secretKey,
        code: callbackCode,
      })
      const accessToken = await axios.post("https://github.com/login/oauth/access_token",
        {
          client_id: clientID,
          client_secret: secretKey,
          code: callbackCode,
        })
      console.log(accessToken)
    })()

    // axios.get("https://api.github.com/user", {
    //   headers: {
    //     "Authorization": callbackCode
    //   }
    // }).then(console.log)


  }, [])

  return <div>
    <button onClick={handleOAuth}>Login</button>
  </div>
}