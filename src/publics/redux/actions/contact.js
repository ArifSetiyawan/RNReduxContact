import axios from 'axios';

export const get = () => {
  return {
    type: 'GET_CONTACT',
    payload: axios.get('http://192.168.0.62:5000/getdatas')
  }
}

export const getdata = (data) => {
  return {
    type:'GET_CONTACT',
    payload: data
    
  }
}

export const create = (data) => {
  return {
    type: 'CREATE_CONTACT',
    payload: data
  }
}

export const deletedata = (data) => {
  return {
    type: 'DELETE_CONTACT',
    payload: data
  }
}

export const editdata = (data) => {
  return {
    type:'EDIT_CONTACT',
    payload:data
  }
}