import { render } from "@testing-library/react"
import { Component } from "react"

Class FormBeasts extends React.Component{
    render(){
        return(
            <Container className= 'w-50'>
                <Navbar bg='dark' variant='dark'>

                </Navbar>
              <Form>
                <FloatingLabel controlId="floatingSelect" label="Works with selects">
                <Form.Select aria-label="Floating label select example">
                    <option>How many horns do you want?</option>
                    <option value="1">1 Horn</option>
                    <option value="2">2 Horns</option>
                    <option value="3">3 Horns</option>
                    <option value="4">100 Horns</option>
                </Form.Select>
                </FloatingLabel>
              </Form>  
            </container>
        )
    }
}
