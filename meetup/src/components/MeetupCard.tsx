import { useState } from 'react'


type props = { 
    id: string,
    name: string,
    date: string,
    description: string,
    comments: string[],
   
    addComment: (id:string, comment:string) => void
 }

const MeetupItem = ({id, name, date, description, comments, addComment}:props) => {
    let [showButton, setShowButton]  = useState(true);
    let [showCommentary, setShowCommentary] = useState(false)
    let [showDetails, setShowDetails] = useState(false)
    let [inputComment, setInputComment] = useState('')
    const [show,setHide]=useState(true)

    const JoinEvent = () => {
        setShowButton(false);
        setShowCommentary(true)
        setShowDetails(true)
        setHide(false)
    }
            
        return(
            <>
                
                <div className="card-name-date-header"><h2>{name}</h2>  <p>DATE: {date}</p></div>
                
          

               <div className='hide-description-name'>
               { showDetails ? <div><h3>Welcome to {name} event!</h3> </div>: <></>}
                { show?<p className="description" data-test="setHide">{description}</p>:null}
                <div>
                    

                    <ul >
                        {                     
                            comments.map(comment => <li key={comment} className="comment-card" data-test="comment-card">{comment}</li>) 
                        }
                    </ul> 
                    { showButton ? <div><button  className="meetup-join-event-btn" onClick={JoinEvent} data-test="Join-Event">Join Event</button></div> : <></> }

                            { showCommentary ? <div className="member-comment"><button data-test="meetups-comment-btn"  onClick={() => addComment(id, inputComment)}>Add comment</button>
                            <input type="text" data-test="meetup-input" value={inputComment} onChange={(ev: React.ChangeEvent<HTMLInputElement>,) => setInputComment(ev.target.value)}></input></div> : <></> }
   
                
                </div>
                </div>
            </>
        );
}




export default MeetupItem