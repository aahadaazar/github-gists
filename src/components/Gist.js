import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

function Gist({ gist: singleGist }) {
  return (
    <GistWrapper>
      <GistUserDetail target='_blank' href={singleGist.owner.html_url}>
        <img className='user-avatar' alt={singleGist.owner.name} src={singleGist.owner.avatar_url} />
        <p>{singleGist.owner.name}</p>
      </GistUserDetail>
      <GistChronoDetails>
        <p className='date'>{`Created At: ${singleGist.createdAt}`}</p>
        <p className='date'>{`Last Updated: ${singleGist.updatedAt}`}</p>
      </GistChronoDetails>
      <GistDetails>
        <a
          target='_blank'
          href={singleGist.forkUrl}
          rel="noreferrer">
          <img
            className='fork'
            alt='fork'
            src='https://user-images.githubusercontent.com/17777237/54873012-40fa5b00-4dd6-11e9-98e0-cc436426c720.png' />
          Forks
        </a>
        <a
          target='_blank'
          href={singleGist.commentsUrl}
          rel="noreferrer">
          <img
            className='comment'
            alt='fork'
            src='https://cdn0.iconfinder.com/data/icons/free-daily-icon-set/512/Comments-512.png' />{singleGist.comments} Comments
            </a>
      </GistDetails>
      <GistDescription>{'Description: ' + (singleGist.description || '-')}</GistDescription>
      <GistFiles>
        {
          singleGist.files.map((file, index) => {
            return (
              <a target='_blank' key={index + file.name} href={file.url} rel="noreferrer">
                <img alt='file-icon' className='file-icon' src='https://www.iconpacks.net/icons/2/free-file-icon-1453-thumb.png' />
                <p className='file-name'>{file.name}</p>
              </a>
            )
          })
        }
      </GistFiles>
    </GistWrapper>
  )
}

const GistWrapper = styled.div`
padding: 12px;
  display:flex;
  flex-direction: column;
  &:not(:last-child) {
  border-bottom:1px solid #d4d4d4;
  }
`;

const GistUserDetail = styled.a`
  display: flex;
  color: #626465;
  width: fit-content;
  margin-bottom:12px;
  font-size:18px;
  align-items: center;
  font-weight:600;
  .user-avatar{
    width: 30px;
height: 30px;
border-radius: 16px;
margin-right: 10px;
  }
`;


const GistChronoDetails = styled.div`
font-size:12px;
display: inline-flex;
margin-bottom:12px;
.date{
  margin-right:5px;
}
`;

const GistDetails = styled.div`
font-size:12px;
display: inline-flex;
margin-bottom:12px;
a{
  font-size:12px;
cursor:pointer;
display: inline-flex;
margin-right:5px;
img{
  margin-right:5px;
margin-top:-2px;
width:12px;
}
.comment{
  width:16px;
  margin-top: 0px;
}
}
`;

const GistDescription = styled.p`
font-size:16px;
margin-bottom:15px;
`

const GistFiles = styled.div`
a{
  display: inline-flex;
  margin-right: 10px;
  
.file-icon{
margin-right:5px;
width: 20px;
}
}
`

Gist.propTypes = {
  gist: PropTypes.object
};

export default Gist
