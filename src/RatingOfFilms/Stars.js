import React from 'react';
import shortid from 'shortid'

function Stars({ count }) {
  const countId = count.map((item) => ({
    id: shortid.generate(),
    count: item,
  }))

  return <ul></ul>;
}

export default Stars;
