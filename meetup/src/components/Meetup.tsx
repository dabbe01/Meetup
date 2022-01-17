
import  {useState} from 'react';
import { Meetups } from '../database/database.json';
import  MeetupCard from './MeetupCard';

export const Meetup= () => {
    const parsedmeetupsList = JSON.parse(JSON.stringify(Meetups))
    let sortedmeetupsList = parsedmeetupsList.sort((a: { date: string; },b: { date: string; }) => (a.date < b.date) ? -1 : ((b.date < a.date) ? 1 : 0))
    
    let [meetups, setMeetups] = useState(sortedmeetupsList)
    const [inputValue] = useState<string>("")
    
    const addComment = (id: string, comment: string) => {
        const newMeetupsList = meetups.map((item: any) => {
            if(item.id === id) item.comments.push(comment) 
            return item
        })

        setMeetups(newMeetupsList)
    }


    return (
        <>
            <header>
                <h1>Meetup</h1>

            </header>            
        
        <div className='meetup-container'>                   
       
                <ul  className="meetup-ul">   
                
                             {
                    meetups.filter((item: any) => item.date.includes(inputValue)).map((item: any) => 
                  
                            <li key={item.id} className="meetup-li" >   
                                                                          
                                    <MeetupCard key={item.id} id={item.id} name={item.name} date={item.date} description={item.description} comments={item.comments} addComment={(id, comment) => addComment(id, comment)}  />
                                                                
                            </li> 
                                               
                        )
                }
                </ul>                
         
        </div>
        </>
    )
}

export default Meetup