import styled, {css} from "styled-components"
import usePage from "../../hooks/usePage"
import { useDispatch, useSelector } from "react-redux"
import {nextPage, previousPage, jumpToPage} from "./paginationSlice"
import mediaQueryBreakpoint from "../../utils/mediaQuery"
import { getPages } from "./PaginationSelector"
import totalPage from "./TotalPageSelector"

const setActiveStyle = (isActive) => {
        if (isActive) return css`
        background-color: var(--primary-color);
        color: white;
    `
}

const StyledPaginationLayout = styled.div`
    grid-area: contactPagination;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: var(--spacing);

    @media (max-width: ${mediaQueryBreakpoint.large}) {
        padding: calc(var(--spacing) /2);
    }
`
const StyledPageButton = styled.label`
    border: 1px solid var(--primary-color);
    border-radius: calc(var(--border-radius) /2);
    width: 3rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    ${(props) => setActiveStyle(props.active)}
    user-select: none;

    @media (max-width: ${mediaQueryBreakpoint.large}) {
        padding: calc(var(--spacing) /2);
    }
`

export default function ContactPagination() {

    const dispatch = useDispatch()

    const {currentPage} = useSelector((store) => store.pagination)
    const pages = useSelector(getPages)
    const totalPages = useSelector(totalPage)
    const isLastPage = currentPage === totalPages

    return (
        <StyledPaginationLayout>
            <StyledPageButton onClick={() => currentPage !== 1 && dispatch(previousPage())}>&lt;</StyledPageButton>
            {pages.map((page) => (
                <StyledPageButton onClick={() => dispatch(jumpToPage(page))} active={currentPage===page} key={page}>{page}</StyledPageButton>

            ))}
            <StyledPageButton onClick={() => !isLastPage && dispatch(nextPage())}>&gt;</StyledPageButton>
        </StyledPaginationLayout>
    )
}