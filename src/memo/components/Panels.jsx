import React from 'react';

const Panel = props => {
  return <h1>{props.val}</h1>
};
export default Panel;

export const Panel2 = React.memo(Panel)
