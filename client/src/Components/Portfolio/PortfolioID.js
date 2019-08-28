import React from 'react';

const portfolio = props => (
  <div>
    <p>
      from portfolio
      {`#${props.match.params.id}`}
    </p>
  </div>
);

export default portfolio;
