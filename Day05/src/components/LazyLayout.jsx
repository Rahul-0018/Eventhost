import React, { Suspense, ReactElement } from 'react';


const LazyLayout = ({ component: Component, ...rest }) => {
  return (
    <Suspense fallback="loading...">
      <Component {...rest} />
    </Suspense>
  );
};

LazyLayout.propTypes = {
  component: PropTypes.func.isRequired,
};

export default LazyLayout;