import React,{useState,createContext} from 'react'

export const DataContext = createContext();

export const DataProvider = (props) => {
   
    const [parameters, setparameters] = useState([
           
           {
                accessToken :null,
                refreshToken : null,
                error : null,
                loading : false
            }
        

    ])

    return (
        <div>
            <DataContext.Provider value={[parameters,setparameters]}>
                {props.children}
            </DataContext.Provider>
        </div>
    )
}


