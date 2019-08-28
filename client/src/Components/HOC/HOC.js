import React from 'react';

const Info = props => (
  <div>
    <h1>Info Heading</h1>
    <p>Info Paragraph</p>
  </div>
);

const withAdminWarning = WrappedComponent => props => (
  <div>
    {props.isAdmin && <p>this is private info .please don't share</p>}
    <WrappedComponent {...props} />
  </div>
);

const withAuthentication = WrappedComponent => props => (
  <div>
    {props.isAuthinticated ? (
      <WrappedComponent {...props} />
    ) : (
      <p>this is private info .please login</p>
    )}
  </div>
);

const AdminInfo = withAdminWarning(Info);
const AdminAuth = withAuthentication(Info);

export { AdminInfo, AdminAuth };
