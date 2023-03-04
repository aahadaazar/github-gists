
import { useEffect, useState } from 'react';
import styled from 'styled-components'
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyle";
import useDebounce from './hook/useDebounce';
import { getPublicGists } from './services/gistService';

const App = () => {
  
  // state for saving search value
  const [searchText, setSearchText] = useState('');
  const [gistsList, setGistsList] = useState(null);
  // get debounced value after 500mils
  const debouncedValue = useDebounce(searchText, 500)

  const handleTextChange = (e)=>{
    setSearchText(e.target.value.trim())
  }

  // const handlePublicGists = () => {
  //   const publicGists = getPublicGists().then(res=>{
  //     return res.data
  //   });
  //   console.log(publicGists);
  //   setGistsList(publicGists);
  // }

  // useEffect(() => {
  //   handlePublicGists();
  // }, [])
  

  return (
    <Wrapper className="App" data-testid="app">
      <Header handleTextChange={handleTextChange} />
      <GlobalStyles />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export default App;
