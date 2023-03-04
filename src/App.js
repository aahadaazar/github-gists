
import { useEffect, useState } from 'react';
import styled from 'styled-components'
import GistList from './components/GistList';
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyle";
import useDebounce from './hook/useDebounce';
import { getGistForUser, getPublicGists } from './services/gistService';
import { filterGistData } from './utils/utils';


const DEBOUNCE_TIME = 500;

const App = () => {
  
  // state for saving search value
  const [searchText, setSearchText] = useState('');
  const [gistsList, setGistsList] = useState(null);
  // get debounced value after 500mils
  const debouncedValue = useDebounce(searchText, DEBOUNCE_TIME)

  const handleTextChange = (e)=>{
    setSearchText(e.target.value.trim())
  }

  const handleAllPublicGists = () => {
    getPublicGists().then(res=>{
      const reducedGist = res.data.map(o=>filterGistData(o));
    setGistsList(reducedGist);
    });
  }

  const handlePublicGistsByName = (name) => {
    getGistForUser(name).then(res=>{
      const reducedGist = res.data.map(o=>filterGistData(o));
    setGistsList(reducedGist);
    });
  }

  useEffect(() => {
    console.log(debouncedValue);
    setGistsList(null)
    if(debouncedValue.trim() === ''){
      handleAllPublicGists()
    } else {
      handlePublicGistsByName(debouncedValue)
    }
  }, [debouncedValue])
  
  

  return (
    <>
    <Wrapper className="App" data-testid="app">
      <Header handleTextChange={handleTextChange} />
      <GlobalStyles />
    <GistList gists={gistsList}/>
    </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
`;

export default App;
