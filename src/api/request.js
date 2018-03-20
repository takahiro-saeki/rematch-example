import fetch from 'isomorphic-fetch';
import uuid from 'uuid';

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



export const postFetch = async(obj) => {
  try {
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
        method, 
        mode: 'cors'
      })
    const json = await req.json();
    return json
  } catch(err) {
    return []
  }
}

export const deleteFetch = async (id) => {
  try {
    const method = "DELETE";
    const headers = {
      ['Content-Type']: "application/json"
    }
    const req = await fetch(`${PATH}/${id}`, {
        headers: {
          'content-type': 'application/json'
        },
        method, 
        mode: 'cors'
      })
    const json = await req.json();
    return json
  } catch(err) {
    return []
  }
}

export const editFetch = async (obj) => {
  try {
    const method = "PUT";
    const headers = {
      ['Content-Type']: "application/json"
    }
    const body = JSON.stringify(obj);
    const req = await fetch(`${PATH}/${obj.id}`, {
        headers: {
          'content-type': 'application/json'
        },
        body,
        method, 
        mode: 'cors'
      })
    const json = await req.json();
    return json
  } catch(err) {
    return []
  }
}