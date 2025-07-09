'use client'; // ✅ Must be first!

import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Link href="/foods">
        <button style={{
          backgroundColor: '#16a34a',
          color: 'white',
          padding: '1rem 2rem',
          fontSize: '1.2rem',
          borderRadius: '9999px',
          border: 'none',
          cursor: 'pointer'
        }}>
          Explore Foods
        </button>
      </Link>
    </div>
  );
}
