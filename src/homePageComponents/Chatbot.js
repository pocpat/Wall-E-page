
import React from 'react'
import '../styles/chatbot.css'

const Chatbot = () => {
    
  return (
    <div>
    <df-messenger 
    chat-icon="https:&#x2F;&#x2F;www.turners.co.nz&#x2F;contentassets&#x2F;3e15c8546917474ca0a150b18e9fd64e&#x2F;turnerscars_logo_1line_horz_true-rgb-desktop.png"
    intent="WELCOME"
    chat-title="TurnersCarsBot"
    agent-id="6a4385b2-9765-48cc-901a-8a0e921dfbfc"
    language-code="en"
    ></df-messenger>
    </div>
  )
}

export default Chatbot