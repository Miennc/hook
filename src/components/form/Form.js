import React from 'react'
import {useState} from 'react'
export default function Form() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [repeat,setRepeat] = useState('');
    const next = (e)=>{
    e.preventDefault();
    }
    return (
        <div onSubmit={next}>
            <form>
                <input placeholder="name" onChange={(e)=>{setName(e.target.value)}}/>
                <input placeholder="email" onChange={(e)=>{setEmail(e.target.value)}}/>
                <input placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}/>
                <input placeholder="repeat" onChange={(e)=>{setRepeat(e.target.value)}}/>
                <button>gửi</button>
            </form>
        </div>
    )
}
