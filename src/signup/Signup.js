import React from "react";
import { useState } from "react";
import {postService} from "./../service/Post"
export default function Signup() {
  const [nickname, setNickname] = useState("");
  const [pwd, setPwd] = useState("");
  function submit(e) {
    e.preventDefault();
    postService
      .add({
        nickname,pwd
      })
      .then(() => {
        setNickname("");
        setPwd("");
      })
      .catch(() => {
        alert("Thêm thất bại");
      });
  }
  return (
    <div>
      <form onSubmit={submit.bind(this)}>
        <div>
          <input
            type="text"
            placeholder="nickname"
            onChange={(e) => {
            setNickname(e.target.value)}}/>
        </div>
        <div>
          <input
            type="text"
            placeholder="password"
            onChange={(e) => {
            setPwd(e.target.value) }}/>
        </div>
        <button>signup</button>
      </form>
    </div>
  );
}
