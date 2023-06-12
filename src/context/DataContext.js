import { createContext, useState, useEffect } from 'react'

//import useAxiosFetch from '../hooks/useAxiosFetch'


const DataContext = createContext({})

export const DataProvider = ({ children }) => {
    const [search, setSearch] = useState('')
    //const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts')
    const [seen, setSeen] = useState(false)
    function togglePop () {
      setSeen(!seen);
    };

    return (
        <DataContext.Provider value={{
            search,
            setSearch,
            seen,
            setSeen,
            togglePop

        }}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContext