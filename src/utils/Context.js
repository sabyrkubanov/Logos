import {createContext, useState} from "react";

export const CustomContext = createContext()

export const Context = (props) => {


    const [count , setCount] = useState(0)

    const value = {
        count,
        setCount
    }

    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>

}