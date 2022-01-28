import React,{useState,useEffect} from 'react'
import Table from 'react-bootstrap/Table'  
import axios from 'axios'

let url = "https://61f24cae2219930017f5045b.mockapi.io/movies/"

function Allmovies() {

    let [movies,setMovies]=useState([]);

    useEffect(()=>{
       getData();
    },[])

    //GET 
    let getData = async () => {
        try{
            let response = await axios.get(url)
            setMovies(response.data)
        }
        catch(error){
            console.log(error);
        }
    } 

    return <>
        <Table striped bordered hover>
            <thead className='bg-dark'>
                <tr>
                    <th>#</th>
                    <th>Movies Name</th>
                    <th>Provider Name</th>
                    <th>IMDB Rating</th>
                    <th>Review</th>
                </tr>
            </thead>
            <tbody>
                {
                    movies.map((e)=>{
                        return <tr key={e.id}>
                                    <td>{e.id}</td>
                                    <td>{e.name}</td>
                                    <td>{e.Producer}</td>
                                    <td>{e.Rating}</td>
                                    <td>{e.Review}</td>
                                </tr>
                    })
                }
            </tbody>
        </Table>
    </>
}

export default Allmovies