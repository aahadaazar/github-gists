import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import Gist from './Gist';
function GistList({gists}) {
  return (
    <GistListWrapper>
      {
        gists === null ? <h3><img className='loading' alt='loading' src='https://upload.wikimedia.org/wikipedia/commons/3/3a/Gray_circles_rotate.gif'/>Fetching Gists</h3>
        : gists && gists.length === 0 ? <h3>No Gists Found</h3>
         :gists.map(gist=>{
          return <Gist key={gist.id} gist={gist}/>
        })
      }
    </GistListWrapper>
  )
}

const GistListWrapper = styled.div`
  min-width:70vw;
  max-height:calc(100vh - 120px);
  overflow: auto;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  align-self:center;
  padding: 8px 0px;
  margin:5px 30px;
  h3{
    display: flex;
    align-items: center;
    justify-content: center;
    .loading{
      width: 20px;
      margin-right: 10px;
    }
  }
`;

GistList.propTypes = {
  gists:PropTypes.array
}

GistList.defaultProps = {
  gists: null
}
export default GistList
