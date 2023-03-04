import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import Gist from './Gist';

const dummyData = {
  "url": "https://api.github.com/gists/5c263dae9dfeed8323605fce1cdcb29c",
  "forks_url": "https://api.github.com/gists/5c263dae9dfeed8323605fce1cdcb29c/forks",
  "commits_url": "https://api.github.com/gists/5c263dae9dfeed8323605fce1cdcb29c/commits",
  "id": "5c263dae9dfeed8323605fce1cdcb29c",
  "node_id": "G_kwDOB4p8HdoAIDVjMjYzZGFlOWRmZWVkODMyMzYwNWZjZTFjZGNiMjlj",
  "git_pull_url": "https://gist.github.com/5c263dae9dfeed8323605fce1cdcb29c.git",
  "git_push_url": "https://gist.github.com/5c263dae9dfeed8323605fce1cdcb29c.git",
  "html_url": "https://gist.github.com/5c263dae9dfeed8323605fce1cdcb29c",
  "files": {
    "Driving Permission": {
      "filename": "Driving Permission",
      "type": "text/plain",
      "language": null,
      "raw_url": "https://gist.githubusercontent.com/ihassaankhan/5c263dae9dfeed8323605fce1cdcb29c/raw/8cba24db73f735ad001ed5689f76aa568a145ccb/Driving%20Permission",
      "size": 212
    }
  },
  "public": true,
  "created_at": "2023-03-04T08:49:11Z",
  "updated_at": "2023-03-04T08:49:11Z",
  "description": "",
  "comments": 0,
  "user": null,
  "comments_url": "https://api.github.com/gists/5c263dae9dfeed8323605fce1cdcb29c/comments",
  "owner": {
    "login": "ihassaankhan",
    "id": 126516253,
    "node_id": "U_kgDOB4p8HQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/126516253?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/ihassaankhan",
    "html_url": "https://github.com/ihassaankhan",
    "followers_url": "https://api.github.com/users/ihassaankhan/followers",
    "following_url": "https://api.github.com/users/ihassaankhan/following{/other_user}",
    "gists_url": "https://api.github.com/users/ihassaankhan/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/ihassaankhan/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/ihassaankhan/subscriptions",
    "organizations_url": "https://api.github.com/users/ihassaankhan/orgs",
    "repos_url": "https://api.github.com/users/ihassaankhan/repos",
    "events_url": "https://api.github.com/users/ihassaankhan/events{/privacy}",
    "received_events_url": "https://api.github.com/users/ihassaankhan/received_events",
    "type": "User",
    "site_admin": false
  },
  "truncated": false
}

function GistList({gists}) {
  return (
    <GistListWrapper>
      {/* {
        gists && gists.map(gist=>{
          return <Gist gist={gist}/>
        })
      } */}
      {
        <Gist gist={dummyData}/>
      }
    </GistListWrapper>
  )
}

const GistListWrapper = styled.div`
  margin-top:20px;
  min-width:70vw;
  max-height:calc(100vh - 120px);
  overflow: auto;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  align-self:center;
  padding: 8px 0px;
`;

GistList.propTypes = {
  gists:PropTypes.array
}

GistList.defaultProps = {
  gists: null
}
export default GistList
