import React from 'react'
import styled from 'styled-components'
import searchIcon from "../../assets/icons/searchIcon.png"

const SearchInputStyles = styled.div`
    width: 360px;
    border-radius: 6px;
    border: 1px solid #DBE2EA;
    background: #fff;

    @media(max-width: 768px){
        width: 100%;
    }
    
    input{
        background: none;
        border: none;
        outline: none;
        width: 85%;
        padding: 16px;
    }
    .icon_container{
        width: 15%;
        cursor: pointer;
    }
`

function SearchInput(props) {
    return (
        <SearchInputStyles className="display-flex h-between">
            <input className="font-400 font-xs" type="text" {...props} />
            <div className="icon_container display-flex h-center v-center">
                <img src={searchIcon} alt="" />
            </div>
        </SearchInputStyles>
    )
}

export default SearchInput
