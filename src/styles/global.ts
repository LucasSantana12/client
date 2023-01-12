import { createGlobalStyle } from 'styled-components';
import Background from '../assets/background.png'
import Background1 from '../assets/background1.png'

const globalStyle = createGlobalStyle`

    *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    html,body, #root {
      height: 100%
      
    }
    body{
      background-color: #F8F8FF;
      font-family: "Roboto",sans-serif ;
        
    }

    button{
      background-color: transparent;
      border: none;
      outline: none;
      font-family: "Roboto",sans-serif ;
      cursor: pointer;
    }

    a{
      text-decoration: none;
      outline: none;

    }

    
`

export default globalStyle