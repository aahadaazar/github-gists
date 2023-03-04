export const filterGistData = (gist) => {
  const { url,
    forks_url: forkUrl,
    comments_url: commentsUrl,
    comments,
    files,
    created_at: createdAt,
    updated_at: updatedAt,
    description,
    owner: {
      avatar_url,
      html_url,
      login,
    } } = gist;
  return {
    url, forkUrl, commentsUrl,
    comments, createdAt, updatedAt, description, owner: {
      avatar_url, html_url, login
    },
    files : Object.entries(files).map(o=>{return {name:o[0], url:o[1].raw_url} })
  }
}