import React from 'react';

import './styles.css';

function RootLayout({ children }) {
  const now = new Date().toLocaleString();

  return (
    <html lang="en">
      <body>
        {children}
        <footer>Page rendered on {now}</footer>
      </body>
    </html>
  );
}

export default RootLayout;
