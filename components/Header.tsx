import React from 'react';

type Props = {};

function Header({}: Props) {
  return (
    <header className="container text-center py-4">
      <div className="flex justify-center whitespace-pre text-4xl font-bold text-base-content">
        Celebration{' '}
        <span className="text-primary animate-pulse">
          Effect
        </span>   
      </div>
    </header>
  );
}

export default Header;