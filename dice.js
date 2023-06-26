let ch1 = Math.floor(Math.random()*6) +1
let ch2 = Math.floor(Math.random()*6) +1

const pl1=document.querySelector(".img1")
const pl2=document.querySelector(".img2")
const heading=document.querySelector(".container h1")

let img_pl1=`dice${ch1}.png`
let img_pl2=`dice${ch2}.png`

pl1.setAttribute("src",`images/${img_pl1}`)
pl2.setAttribute("src",`images/${img_pl2}`)

if(ch1>ch2)
{
    heading.textContent="🚩Player 1 Wins"
}
else if(ch2>ch1)
{
    heading.textContent="Player 2 Wins🚩"
}
else if(ch1==ch2)
{
    heading.textContent="🚩Both Player Wins🚩"
}