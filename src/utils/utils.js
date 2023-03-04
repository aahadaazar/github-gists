// utility function for filtering unwanted gist data
export const filterGistData = (gist) => {
  const {
    url,
    id,
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
      login: name,
    }
  } = gist;
  return {
    url,
    id,
    forkUrl,
    commentsUrl,
    comments,
    createdAt: new Date(createdAt).toLocaleDateString().split(',')[0], // formats date into MM/DD/YYYY
    updatedAt: new Date(updatedAt).toLocaleDateString().split(',')[0], // formats date into MM/DD/YYYY
    description,
    owner: {
      avatar_url, html_url, name
    },
    files: Object.entries(files).map(o => { return { name: o[0], url: o[1].raw_url } }) // converts file object to iteratable array
  }
}