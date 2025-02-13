import logo from './logo.svg';
import ContactList from './features/contact/ContactList';
import styled from 'styled-components';
import './App.css';
import ContactLayout from './features/contact/ContactLayout';
import GlobalStyle from "./GlobalStyle"
import Label from "../src/ui/Label"
import Search from './features/contact/Search';
import ContactProvider from './context/ContactContext';
import DropdownMenuOpeningContextProvider from './context/DropdownMenuOpeningContext';
import mediaQueryBreakpoint from './utils/mediaQuery';
const StyledContainerParent = styled.div`
  display: flex;
  justify-content: center;
  background-color: #EAEAEA;
  max-height: 100vh;
  height: 100vh;
  max-width: 100vw;
`
  const StyledContainer = styled.div`
  width: 80%;

  max-width: 80rem;
  padding: var(--spacing);
  height: auto;

  & > * + * {
    margin-top: var(--spacing);
  }

  @media (max-width: ${mediaQueryBreakpoint.large}) {
        width: 100%;
        padding: calc(var(--spacing) / 2);
  }
  @media (max-width: ${mediaQueryBreakpoint.extraSmall}) {
        width: 100%;
        padding: calc(var(--spacing) / 2);
  }
`

function App() {
  return (
    <StyledContainerParent>
      <GlobalStyle/>
        <StyledContainer>
          <Label size="extralarge" weight="bold">My Address Book</Label>
          <ContactProvider>
            <DropdownMenuOpeningContextProvider>
              <ContactLayout></ContactLayout>
            </DropdownMenuOpeningContextProvider>
          </ContactProvider>
        </StyledContainer>

    
    </StyledContainerParent>
  );
}

export default App;
