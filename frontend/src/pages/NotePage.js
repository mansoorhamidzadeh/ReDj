import React, {useEffect, useState} from 'react'
import {Link, useHistory, useParams} from 'react-router-dom'
import {useNavigate} from "react-router-dom";

const NotePage = (props) => {
    const {id} = useParams()
    const navigate = useNavigate();


    let [note, setNote] = useState(null)

    useEffect(() => {
        getNote()
    }, [])

    let getNote = async () => {
        if (id === 'new') return

        let response = await fetch(`/api/notes/${id}/`)
        let data = await response.json()
        setNote(data)
    }

    let updateNote = async () => {
        fetch(`/api/notes/${id}/update/`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    }
    let createNote = async () => {
        fetch(`/api/notes/create/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    }
    let handelSubmit = () => {
        console.log(note)
        if (id !== 'new' && note.body === '') {
            deleteNote()
        } else if (id !== 'new') {
            updateNote()
        } else if (id === 'new' && note.body !== null) {
            createNote()
        }
        navigate('/')

    }

    let deleteNote = async () => {
        fetch(`/api/notes/${id}/delete/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        navigate("/");

    }

    return (
        <div>
            <div>
                <h3 onClick={handelSubmit}>
                    Back
                </h3>
                {id !== 'new' ? (
                    <button onClick={deleteNote}>delete</button>
                ) : (
                    <button onClick={handelSubmit}>Done</button>
                )}

            </div>
            <textarea onChange={(e) => {
                setNote({...note, 'body': e.target.value})
            }} value={note?.body}/>
        </div>
    )
}

export default NotePage