import styled from "styled-components"
import SearchButton from "./SearchButton"
import { useDispatch } from "react-redux"
import { search } from "./redux/ContactSlice"
import {jumpToPage} from "./redux/paginationSlice"
import mediaQueryBreakpoint from "../../utils/mediaQuery"

const StyledSearch = styled.input`
    border-radius: 0.5rem;
    position: relative;
    outline: none;
    border: none;
    width: 100%;
    margin-left: calc(var(--spacing) / 2);
    font-size: 1.5em;
    flex-basis: 20%;
    flex-grow: 1;
`

const StyledSearchParent = styled.div`
    display: flex;
    height: 100%;
    gap: var(--spacing);
    // padding: calc(var(--spacing) / 3);
    justify-content: space-between;
    background-color: white;
    flex-basis: 80%;
    flex-grow: 1;
    border-radius: var(--border-radius);
    padding: calc(var(--spacing) / 5);

    @media (max-width: ${mediaQueryBreakpoint.large}) {
        height: 3rem;
    }
`

export default function Search() {

    const dispatch = useDispatch()

    const handleSearch = (e) => {
        dispatch(search(e.target.value))
        dispatch(jumpToPage(1))
    }

    return (
        <StyledSearchParent>
            <StyledSearch onChange={handleSearch} />
            <SearchButton/>

        </StyledSearchParent>
    )
}