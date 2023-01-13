import React from 'react'
import axios from "axios";
import { FaSearch } from 'react-icons/fa';
import { AiFillSound } from "react-icons/ai";
import dt from "../../data.json"
import {Link} from "react-router-dom"
import { useEffect } from 'react';
import { useState } from 'react';

const Home = () => {
    const [en, setEn] = useState(""); 
    const [data, setData] = useState(dt);
    const baseUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";
    const instance = axios.create({
      baseURL: baseUrl,
      method: 'get',
    });
    useEffect(() => {
      
    }, [data])
    async function search(){
      const data = await instance.get(en);
      setData(data.data[0]);
    }
    function handleInput(e){
      console.log(e.target.value)
      setEn(e.target.value);
    }
    console.log(data)
    return (
        <div className='Home'>
            <div style={{
                width:"100%",
                height:'30px'
            }}>
                <div style={{
                    width:"70px",
                    height:'30px',
                    backgroundColor:"orange",
                    cursor:'pointer'
                }}
                >
                    <Link to='/quizz' style={{textDecoration:'none' , color:'white'}}>Quizz</Link>
                </div>
            </div>
            <div style={{
                width: "100%",
                height: "100px",
                backgroundColor: "gray",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div style={{
                    position: "absolute"
                }}>
                    <input 
                    onChange={handleInput}
                    value={en}
                      style={{
                        width: "300px",
                        height: "30px",
                        borderRadius: "10px",
                        border: 'none'
                    }} type="text" placeholder='Tìm kiếm'></input>
                    <span 
                      onClick={() => search()}
                      style={{
                        position: 'relative',
                        top: 5,
                        right: 30,
                        cursor: 'pointer',
                    }}><FaSearch size={20} color='gray'/></span>
                </div>
            </div>

            <div className='result' style={{ display: 'flex', flexDirection: "column", width: "80%", margin: "auto" }}>
                <span style={{ alignSelf: "start", marginTop: "20px", fontSize: "20px" }}>
                    {data.vietnamese}
                </span>
                <div style={{ width: "100%", display: 'flex', flexDirection: 'column' }}>
                    <span style={{ alignSelf: "start", marginTop: "20px", fontSize: "30px", color: "#0074d8", fontWeight: 'bold' }}>
                        {data.word}
                    </span>
                    <div style={{
                        display: "flex",
                        paddingTop: 15,
                        paddingBottom: 15,
                        alignItems: 'center'
                    }}>
                        {data.phonetics.map((phonetic) => (
                            <div style={{ display: 'flex', alignItems: 'center', marginRight: 40, justifyContent: 'center' }}>
                                <span style={{ marginRight: 5 }}>{data.word}</span>
                                <AiFillSound />
                                <span>{phonetic.text}</span>
                            </div>
                        ))}
                    </div>
                    <hr style={{ width: '100%' }} />
                    <div style={{
                        display:'flex',
                        flexDirection:'column',
                        alignItems:'flex-start'
                    }}>
                        {data.meanings.map((mean)=>(
                            <div style={{display:'flex',alignItems:'flex-start',flexDirection:'column'}}>
                                <span>{mean.partOfSpeech}</span>
                                <ul style={{display:'flex',alignItems:'flex-start',flexDirection:"column"}}>
                                    {mean.definitions.map((def)=>(
                                        <li>{def.definition}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
