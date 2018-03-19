import fetch from 'isomorphic-fetch';

const PATH = 'http://localhost:3000/data'

export const request = async() => {
  try {
    const req = await fetch(PATH)
    const json = await req.json();
    return json
  } catch(err) {
    return []
  }
}



export const postFetch = async() => {
  try {
    const obj = {title: "world", id: 3};
    const method = "POST";
    const headers = {
      ['Content-Type']: "application/json"
    }
    const body = JSON.stringify(obj);
    const req = await fetch(PATH, {
        body,
        headers: {
          'content-type': 'application/json'
        },
        method: 'POST', 
        mode: 'cors'
      })
    const json = await req.json();
    return json
  } catch(err) {
    return []
  }
}
