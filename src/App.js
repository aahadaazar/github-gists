
import { useEffect, useState } from 'react';
import styled from 'styled-components'
import GistList from './components/GistList';
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyle";
import useDebounce from './hook/useDebounce';
import { getPublicGists } from './services/gistService';
import { filterGistData } from './utils/utils';



const App = () => {
  
  // state for saving search value
  const [searchText, setSearchText] = useState('');
  const [gistsList, setGistsList] = useState(null);
  // get debounced value after 500mils
  const debouncedValue = useDebounce(searchText, 500)

  const handleTextChange = (e)=>{
    setSearchText(e.target.value.trim())
  }

  const handlePublicGists = () => {
    getPublicGists().then(res=>{
      const reducedGist = res.data.map(o=>filterGistData(o));
    setGistsList(reducedGist);
    });
  }

  useEffect(() => {
    handlePublicGists();
  }, [])
  

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
