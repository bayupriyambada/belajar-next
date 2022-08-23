
import {useEffect, useState} from 'react'
import { 
  Container,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Lorem
} from '@chakra-ui/react'

function DataIndex(){
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  console.log(data)
  useEffect(() => {
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return (
    
    <>
      {data.map((data, i) => {
        return (
          <Container key={i} bg='blue.600' color='white' mt='2' p='5'>
            <h1 className="text-xl">Saya Post: {data.title}</h1>
            <span className="text-base">Saya Body: {data.body}</span>
            <br/>
          </Container>
          
         )
        })}
    </>
  )
    
}

  

export default DataIndex