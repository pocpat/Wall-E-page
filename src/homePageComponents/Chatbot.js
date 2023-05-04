
import React from 'react'
import '../styles/chatbot.css'

const Chatbot = () => {
    
  return (
    <div>
    <df-messenger 
    chat-icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAhCAIAAACuvOezAAAACXBIWXMAAAsSAAALEgHS3X78AAADDklEQVRIx2P8//8/AyHw5uQ5ZC6XtCSXjCQDEYAFl8TvT1+e7z74aO3WNyfPY8pySUuImBspJ0bwa6niMZ0R0+2/P325O3/F3fkrf3/+QtB1IuaGujWFuOxAN/3jtdsnM8q+PX3BQArQyEvWyE8hYPqjtVsvN08gxsmYQC7Iy6i7Fqfpz3cfOplRjke/hJO1jL87Cy8PAwPD92cvL9Z0ErQAavq3J8/3+8ThcbWEk7XxhCZkka16zgR9wAShzpU14w8QrbJsZO7L/UexKnu0btvz3YdQTMeV7OCAT0OFU0ocWeTFvqO4FJ8rbf796QvC9LvzV+KPMQlHazSRl7hN//35y935K6Cmf7x2++P12/hN59NQRuZ+unkXfzDCncv0fPdBgqlN2NQAmfv9GYHc8PvzF0joM6GVIZhAxt+dhYcbxe037hJ00PNdBxkYGFg+XiMQLGqZ8WginNISwqb6DAwMvz9//XTjDlZdkNBmXK9kgdUsTmkJTilxfg0VNIdjgu/PXj7ZuPPW9IVo4gF3j6OXkaqZcURmfUjcvjt98ffnL2/PXMRayqKbjqaOlZeHT10ZzaW3pi98ue8oweLo4/Vb6KafSCpCE/G+tBeZ+2TjzicbdxLpPyZSy8Jvz4gtnEXMjZi4pCXwK0ILq+/PSCj6mfg11Uhy++/PX4lRxq+pysDAwCTpZkeS6bgSOA7TXe0JpjwyqipJN3sGBgYmVj4euSAvMhwrbKoPybGYgJWXR9LVDppmsFa4yIXtny+IsFaMCRY21TeZ2KRVlo2rwFFODEep+S43T7i7YCXx1d6nm3dPJBVhzVCsvDxuh9az8vEgTP/96cuRqCw8Bb2wqb5iTDCkyn657+j9JWtxqTSf0QkJFpQ2wcdrt49EZZHX3MDVsEHkVX4tVZtl01h5ecg2WjkhHC0K0dti3548P1fWjL8SxxrWRt218ADB146EtBJuTJxDZHtPLshLt7YQEo1EmQ634/muQ29OnsOMDFZeHhFzI0k3O0lXe6zmEjYduR74eP0WUi5Xw2MiMgAA5BBm77xN4AcAAAAASUVORK5CYII="
    border-radius="50px"

    intent="WELCOME"
    chat-title="TurnersCarsBot"
    agent-id="6a4385b2-9765-48cc-901a-8a0e921dfbfc"
    language-code="en"
    ></df-messenger>
    </div>
  )
}

export default Chatbot