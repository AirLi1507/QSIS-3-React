import crypto from "crypto-js"
import { rmWarntext, Warntext } from "./warning";

var Promise: any

async function getKey() {
    if (!Promise) {
        Promise = fetch(`https://api.hypernix.org/key`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.text());
    }
    return Promise;
}

type Credentials = {username: string; password: string;}

async function auth ({username, password}: Credentials) {
    rmWarntext()
    const usernameField = document.querySelectorAll("input")[0].parentElement as HTMLElement
    const passwordField = document.querySelectorAll("input")[1].parentElement as HTMLElement
    if (username === "" && password === "") {
        usernameField.classList.add("border-rose-600/75")
        passwordField.classList.add("border-rose-600/75")
        Warntext("The username field must be filled.", usernameField)
        Warntext("The password field must be filled.", passwordField)
    } else if (username === "") {
        usernameField.classList.add("border-rose-600/75")
        Warntext("The username field must be filled.", usernameField)
    } else if (password === "") {
        Warntext("The password field must be filled.", passwordField)
        passwordField.classList.add("border-rose-600/75")
    } else {
        const Key = await getKey();
        const credArray = []
        credArray.push(username)
        credArray.push(password)
        const encryptedCred = crypto.AES.encrypt(credArray.toString(), Key).toString()
        fetch(`https://api.hypernix.org/auth`, {
            method: "POST",
            headers: {
                "Content-Type": "text/plain",
            },
            body: encryptedCred
        }).then(response => response.json())
        .then(data => {
            const d = new Date();
            d.setTime(d.getTime() + (3*24*60*60*1000))
            // let expiresDate = d.toUTCString()
            // console.log(expiresDate)
            document.cookie = `expires=${d.toUTCString()} ;`
            document.cookie += `loginState=${data};`
            console.log((document.cookie).split(';'))
            console.log((document.cookie).split(';')[0].split('=')[1])
            alert(data)
            // window.location.replace('/dashboard')
        })
    }
}

export { auth }