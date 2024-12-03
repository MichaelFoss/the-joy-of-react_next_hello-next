import React from 'react';

import './styles.css';

function RootLayout({ children }) {
  const date = new Date();
  const now = date.toLocaleString();
  const year = date.getFullYear();

  return (
    <html lang="en">
      <body>
        {children}
        <footer>Page rendered on {now}<br />&copy; {year}</footer>
      </body>
    </html>
  );
}

export default RootLayout;
