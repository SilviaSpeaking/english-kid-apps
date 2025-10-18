import React, { useEffect, useMemo, useRef, useState } from "react";

/**
 * ConjunctionsQuest (plain JavaScript version for Vite React)
 * If you saw errors like "Expected ';' but found 'as'", you were using a TypeScript-only syntax
 * from a previous draft. This file is pure JS and should compile in a standard Vite React project
 * created with `npm create vite@latest myapp -- --template react`.
 */

// ---- Constants
const CHOICES = ["and", "or", "but", "so"];

const QUESTION_BANK = [
  { id: "q1", text: "Prince Cinders was a prince, ___ he was small, spotty and scruffy.", answer: "but" },
  { id: "q2", text: "He had three big, hairy brothers, ___ they were never nice to him.", answer: "but" },
  { id: "q3", text: "The brothers spent their time going to the palace discos ___ bossing Prince Cinders around.", answer: "and" },
  { id: "q4", text: "Cinders had to sweep the floor ___ he had to tidy up dirty socks.", answer: "and" },
  { id: "q5", text: "Cinders would sit by the fire ___ wish he was like his brothers.", answer: "and" },
  { id: "q6", text: "One Saturday, there was a puff of smoke ___ a fairy fell down the chimney.", answer: "and" },
  { id: "q8", text: "The fairy tried to make Cinders big and hairy, ___ she turned him into a gorilla!", answer: "but" },
  { id: "q9", text: "Cinders thought he looked good, ___ he went to the disco.", answer: "so" },
  { id: "q10", text: "The car was too small to drive, ___ he made the best of it.", answer: "but" },
  { id: "q11", text: "Cinders met a pretty princess, ___ he ran away at midnight.", answer: "but" },
  { id: "qg1", text: "It was raining, ___ we stayed inside.", answer: "so" },
  { id: "qg2", text: "Do you want apples ___ bananas?", answer: "or" },
  { id: "qg3", text: "I like football ___ drawing.", answer: "and" },
  { id: "qg4", text: "I wanted to play, ___ I finished my homework first.", answer: "so" },
  { id: "qg5", text: "He is small ___ strong.", answer: "but" }
];

// ---- Utils
function shuffle(arr) { return [...arr].sort(() => Math.random() - 0.5); }

function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : initial;
    } catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
}

const beepGood = () => new Audio("data:audio/mp3;base64,//uQZAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAACcQAAACAAACAgAAACAgAAACAgAAACAgAAAB//8AAP//AACAgIAA").play().catch(() => {});
const beepBad = () => new Audio("data:audio/mp3;base64,//uQZAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAACcQAAACAAACAgAAACAgAAACAgAAACAgAAAB//8AAP//AACAgIAA").play().catch(() => {});

function Confetti({ trigger }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!trigger || !ref.current) return;
    const host = ref.current;
    for (let i = 0; i < 14; i++) {
      const span = document.createElement("span");
      span.textContent = ["🎉","⭐","🎈","✨","🎊"][i % 5];
      span.style.position = "absolute"; span.style.left = "50%"; span.style.top = "0";
      span.style.fontSize = `${16 + Math.random() * 18}px`;
      span.animate([
        { transform: `translate(-50%, 0)`, opacity: 1 },
        { transform: `translate(${(Math.random()*200-100)}px, ${120+Math.random()*60}px) rotate(${Math.random()*360}deg)`, opacity: 0 }
      ], { duration: 900 + Math.random()*600, easing: "ease-out" });
      host.appendChild(span); setTimeout(() => span.remove(), 1500);
    }
  }, [trigger]);
  return <div ref={ref} style={{position:'absolute', inset:0, pointerEvents:'none'}} />;
}

function useQuestionPool(difficulty){
  const base = useMemo(() => shuffle(QUESTION_BANK), []);
  const [index, setIndex] = useState(0);
  const current = base[index % base.length];
  const choices = useMemo(() => {
    const correct = current.answer;
    const pool = CHOICES.filter(c => c !== correct);
    const distractors = difficulty === "easy" ? shuffle(pool).slice(0,1) : shuffle(pool).slice(0,3);
    return shuffle([correct, ...distractors]);
  }, [current, difficulty]);
  const next = () => setIndex(i => i + 1);
  return { current, choices, next, order: index + 1 };
}

function Speaker({ text }){
  const speak = () => {
    const msg = new SpeechSynthesisUtterance(text.replace("___"," blank "));
    msg.lang = "en-GB"; window.speechSynthesis.cancel(); window.speechSynthesis.speak(msg);
  };
  return <button onClick={speak} title="Read aloud" style={{border:'1px solid #ddd', borderRadius:999, padding:8, background:'#fff'}}>🔊</button>;
}

export default function ConjunctionsQuest(){
  const [playerName, setPlayerName] = useLocalStorage("cq:name", "Player");
  const [difficulty, setDifficulty] = useLocalStorage("cq:difficulty", "easy");
  const [mode, setMode] = useState("practice");
  const [soundOn, setSoundOn] = useLocalStorage("cq:sound", true);
  const [best, setBest] = useLocalStorage("cq:best", 0);
  const [board, setBoard] = useLocalStorage("cq:board", []);

  const { current, choices, next, order } = useQuestionPool(difficulty);
  const [feedback, setFeedback] = useState("");
  const [streak, setStreak] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(60);
  const [confetti, setConfetti] = useState(0);

  useEffect(() => {
    if (mode !== "challenge") return;
    if (timer <= 0) return;
    const id = setTimeout(() => setTimer(t => t - 1), 1000); return () => clearTimeout(id);
  }, [timer, mode]);

  useEffect(() => { if (mode === "challenge") setTimer(60); setScore(0); setStreak(0); }, [mode]);

  function submit(choice){
    if (choice === current.answer){
      if (soundOn) beepGood(); setFeedback("right");
      const newStreak = streak + 1; setStreak(newStreak);
      const bonus = newStreak >= 3 ? 5 : 0; setScore(s => s + 10 + bonus);
      setConfetti(c => c + 1);
      setTimeout(() => { setFeedback(""); next(); }, 500);
    } else {
      if (soundOn) beepBad(); setFeedback("wrong"); setStreak(0);
      setTimeout(() => setFeedback(""), 450);
    }
  }

  function saveScore(){
    const row = { name: playerName || "Player", score, date: new Date().toLocaleDateString(), mode, diff: difficulty };
    const updated = [...board, row].sort((a,b) => b.score - a.score).slice(0,20);
    setBoard(updated); if (score > best) setBest(score);
  }

  const gameOver = mode === "challenge" && timer <= 0;

  const container = { maxWidth: 880, margin: '0 auto', padding: 16 };
  const card = { background:'#fff', border:'1px solid #eee', borderRadius:16, padding:16, boxShadow:'0 2px 8px rgba(0,0,0,0.04)' };
  const btn = { padding:'10px 14px', borderRadius:12, border:'1px solid #ddd', background:'#fff', cursor:'pointer' };

  return (
    <div style={{minHeight:'100vh', background:'linear-gradient(#e0f2fe,#fff7f7,#fff3e0)', position:'relative'}}>
      <Confetti trigger={confetti} />
      <div style={container}>
        <header style={{display:'flex', justifyContent:'space-between', alignItems:'center', margin:'12px 0'}}>
          <div style={{display:'flex', alignItems:'center', gap:8}}>
            <span style={{fontSize:28}}>🦸‍♂️</span>
            <h1 style={{fontSize:24, fontWeight:900}}>Conjunctions Quest</h1>
          </div>
          <div style={{display:'flex', gap:8, alignItems:'center'}}>
            <label><input type="checkbox" checked={soundOn} onChange={e=>setSoundOn(e.target.checked)} /> Sound</label>
            <label><input type="checkbox" checked={difficulty==='easy'} onChange={e=>setDifficulty(e.target.checked? 'easy':'normal')} /> Easy</label>
          </div>
        </header>

        <section style={{...card, marginBottom:12}}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', gap:12, flexWrap:'wrap'}}>
            <div style={{display:'flex', alignItems:'center', gap:8}}>
              <span>👦</span>
              <input value={playerName} onChange={e=>setPlayerName(e.target.value)} placeholder="Player name" style={{padding:'8px 10px', border:'1px solid #ddd', borderRadius:10}} />
              <div style={{color:'#555', fontSize:12}}>Best: <b>{best}</b></div>
            </div>
            <div style={{display:'flex', gap:8}}>
              <button style={btn} disabled={mode==='practice'} onClick={()=>setMode('practice')}>🎓 Practice</button>
              <button style={btn} disabled={mode==='challenge'} onClick={()=>setMode('challenge')}>🏁 Challenge</button>
            </div>
          </div>
        </section>

        {mode==='challenge' && (
          <section style={{...card, marginBottom:12, display:'grid', gridTemplateColumns:'repeat(3,1fr)', textAlign:'center', gap:8}}>
            <div>⏱️ Time: <b>{Math.max(0,timer)}s</b></div>
            <div>⭐ Score: <b>{score}</b></div>
            <div>🔥 Streak: <b>{streak}</b></div>
          </section>
        )}

        <section style={{...card, position:'relative'}}>
          {gameOver ? (
            <div style={{textAlign:'center'}}>
              <div style={{fontSize:26}}>🎉 Great job, {playerName}!</div>
              <div style={{fontSize:20, margin:'8px 0 16px'}}>Your score: <b>{score}</b></div>
              <div style={{display:'flex', gap:10, justifyContent:'center'}}>
                <button style={btn} onClick={saveScore}>💾 Save to Leaderboard</button>
                <button style={btn} onClick={()=>{ setTimer(60); setScore(0); setStreak(0); }}>🔄 Play again</button>
              </div>
            </div>
          ) : (
            <>
              <div style={{display:'flex', gap:10, alignItems:'flex-start'}}>
                <div style={{flex:1}}>
                  <div style={{fontSize:12, color:'#666', marginBottom:6}}>Question {order}</div>
                  <div style={{fontSize:22, fontWeight:700, lineHeight:1.2}}>{current.text.replace("___","_____")}</div>
                </div>
                <Speaker text={current.text} />
              </div>

              <div style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:10, marginTop:16}}>
                {choices.map((c) => (
                  <button key={c} style={{...btn, padding:'14px 10px', fontWeight:700}} onClick={()=>submit(c)}>{c.toUpperCase()}</button>
                ))}
              </div>

              <div style={{minHeight:28, marginTop:10}}>
                {feedback === 'right' && <div style={{color:'#0a7', fontWeight:600}}>✅ Correct! +10{streak>=3?" (+5 streak bonus)":""}</div>}
                {feedback === 'wrong' && <div style={{color:'#b00', fontWeight:600}}>❌ Try again! (Tip: and = adds, or = choice, but = contrast, so = result)</div>}
              </div>

              <div style={{marginTop:10, display:'flex', justifyContent:'space-between', fontSize:12, color:'#555'}}>
                <div>📝 Tips: <b>and</b> adds ideas, <b>or</b> is a choice, <b>but</b> shows difference, <b>so</b> gives a result.</div>
                <button style={btn} onClick={next}>Skip ⏭️</button>
              </div>
            </>
          )}
        </section>

        <section style={{...card, marginTop:12}}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <h2>🏆 Local Leaderboard</h2>
            <button style={btn} onClick={()=>{ setBoard([]); setBest(0); }}>Clear</button>
          </div>
          {board.length===0 ? (
            <div style={{color:'#666'}}>No scores yet. Play the Challenge and save your score!</div>
          ) : (
            <ol>
              {board.map((r,i) => (
                <li key={i} style={{display:'flex', justifyContent:'space-between', padding:'8px 10px', border:'1px solid #eee', borderRadius:10, marginTop:8}}>
                  <div style={{display:'flex', alignItems:'center', gap:8}}><span style={{fontSize:18}}>{i===0?"🥇":i===1?"🥈":i===2?"🥉":"🎖️"}</span><b>{r.name}</b></div>
                  <div style={{fontSize:12, color:'#555'}}>{r.score} pts · {r.mode} · {r.diff} · {r.date}</div>
                </li>
              ))}
            </ol>
          )}
        </section>
      </div>
    </div>
  );
}
