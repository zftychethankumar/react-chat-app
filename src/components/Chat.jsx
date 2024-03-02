import React from "react";
import Messages from "./Messages";
import Input from "./Input";


function Chat() {
    return(
        <div className="card mt-2"style={{ height:'80vh'}}>
            <div className="card-header">
                Chat
            </div>
            <div className="card-body">
                <Messages/>
            </div>
            <div className="card-footer">
                <Input/>
            </div>
        </div>
    )
}

export default Chat