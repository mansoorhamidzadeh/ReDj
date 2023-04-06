import React, {useState, useEffect} from 'react'
import ListItem from '../components/ListItem'
import AddButton from '../components/AddButton'

const NoteListPage = () => {
    let [notes, setNotes] = useState([])
    useEffect(() => {
        getNotes()
    }, [])


    let getNotes = async () => {
        let response = await fetch('api/notes/')


        let data = await response.json()
        console.log(data)
        setNotes(data)
    }


    return (
        <div>
            <div className="note-list">
                {notes.map((note, index) => (

                    <ListItem key={index} note={note}/>
                ))}
            </div>
            <AddButton/>
        </div>
    )
}

export default NoteListPage