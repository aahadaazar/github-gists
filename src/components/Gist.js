import React from 'react'
import PropTypes from 'prop-types'
import { filterGistData } from '../utils/utils';

function Gist({gist}) {
  console.log(filterGistData(gist))

  return (
    <div>Gist</div>
  )
}

Gist.propTypes = {
  gist:PropTypes.object
};

export default Gist
