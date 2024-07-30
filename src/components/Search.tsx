// Declarando tipo
type SearchProps = {
    loadUser: (userName: string) => Promise<void>
}

// CSS
import classes from './Search.module.css';

import { useState, KeyboardEvent } from "react"

// Icons
import { BsSearch } from "react-icons/bs"

const Search = ({loadUser}: SearchProps) => {
    const [userName, setUserName] = useState("");

    const handleKeyDown = (e: KeyboardEvent) => {
        if(e.key === 'Enter') {
            loadUser(userName);
        }
    }

    return (
    <div className={classes.search}> 
        <h2>Busque por um usuário:</h2>
        <p>Conheça seus melhores repositórios</p>

        <div className={classes.search_container}>
            <input 
                type="text" 
                placeholder="Digite seu nome de usuário" 
                onChange={(e) => setUserName(e.target.value)} 
                onKeyDown={handleKeyDown}
            />
            <button onClick={() => loadUser(userName)}>
                <BsSearch />
            </button>
        </div>
    </div>
  )
}

export default Search;