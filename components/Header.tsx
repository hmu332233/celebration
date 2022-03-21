import React from 'react';
import Link from 'next/link';

type Props = {};

function Header({}: Props) {
  return (
    <header className="container text-center py-4">
      <div className="flex justify-center whitespace-pre text-4xl font-bold text-base-content">
        Simple <span className="text-primary animate-bounce">Effect</span> Message
      </div>
    </header>
  );
}

export default Header;