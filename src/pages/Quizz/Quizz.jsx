import React, { useEffect, useState } from 'react'
import data from '../../data.json'

const Quizz = () => {
    const [answer , setAnswer] = useState('')
    const listQuestion = data
    const [numberCurrentQ , setNumberCurrentQ] = useState(0)
    const [currentQuestion , setCurrentQuestino] = useState(listQuestion[numberCurrentQ])
    const [score , setScore] = useState(0)
    const handleOnchange = (e)=>{
        setAnswer(e.target.value)
    }

    useEffect(()=>{
        setCurrentQuestino(listQuestion[numberCurrentQ])
    } , [numberCurrentQ])

    const handleCheckAnswer = ()=>{
        if (answer === currentQuestion.vietnamese) {
            alert('Đúng')
            setScore(score+1)
            if (numberCurrentQ + 1 == listQuestion.length) {
                alert('xong rùi')
            }else{
                setNumberCurrentQ(numberCurrentQ + 1)
            }
            
        }
        else{
            alert('Sai')
            if (numberCurrentQ + 1 == listQuestion.length) {
                alert('xong rùi')
            }else{
                setNumberCurrentQ(numberCurrentQ + 1)
            }
        }
        setAnswer("")
    }
    return (
        <div style={{
            width: '100%',
            height: '100vh',
            backgroundColor: 'black',
            paddingTop: '100px'
        }}>
            <div style={{
                width: "500px",
                height: "400px",
                backgroundColor: '#d3d3d3',
                margin: 'auto',
                borderRadius: '20px',
                padding: 15
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-around'
                }}>
                    <span>Điểm: {score}/{listQuestion.length}</span>
                    <span>Câu hỏi: 1/{listQuestion.length}</span>
                </div>
                <div style={{
                    width: '70%',
                    height: '100px',
                    border: "1px solid gray",
                    margin: '30px auto',
                    borderRadius: '10px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <span style={{ fontSize: '30px' }}>{currentQuestion.word}</span>
                </div>
                <input style={{
                    width: '80%',
                    height: '30px',
                    borderRadius: '10px',
                    borderColor: 'gray',
                    marginBottom:'30px'
                }} type='text' placeholder='Đáp án' value={answer} onChange={handleOnchange}></input>

                <div style={{
                    display:'flex',
                    justifyContent:'space-around',
                    alignItems:'center'
                }}>
                    <button style={{
                        backgroundColor: "#555555",
                        border: 'none',
                        color: 'white',
                        padding: '15px 32px',
                        textAlign: 'center',
                        display: 'inline-block',
                        fontSize: '16px',
                        margin: '4px 2px',
                        cursor: 'pointer'
                    }} onClick={handleCheckAnswer}>Kiểm tra</button>
                    <button style={{
                        backgroundColor: "#555555",
                        border: 'none',
                        color: 'white',
                        padding: '15px 32px',
                        textAlign: 'center',
                        display: 'inline-block',
                        fontSize: '16px',
                        margin: '4px 2px',
                        cursor: 'pointer'
                    }}>Tiếp theo</button>
                </div>
            </div>
        </div>
    )
}

export default Quizz
