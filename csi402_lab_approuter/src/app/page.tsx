"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [useInput, setUseInput] = useState('');

  const router = useRouter();

  const Checkperm = () => {
    if (useInput == "65061447") {
      alert('Welcome');
      router.push('/mainpage');
    } else {
      alert('No permission');
      router.push('/tempregister');
    }
  };

  return (
    <div style={{ marginLeft: "45%", marginTop: "12%", background: "" }}>
      <h1>ระบบตรวจสอบผู้ใช้งาน</h1>
      <input 
        id="txtUser" 
        style={{ marginTop: "5px" }} 
        value={useInput} 
        onChange={(e) => setUseInput(e.target.value)}
      />
      <br/>
      <button 
        onClick={Checkperm} 
        style={{ marginTop: "20px", marginLeft: "50px", border: "solid" }}
      >
        เช็คสิทธิ
      </button>
    </div>
  );
}
