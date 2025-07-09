'use client';
import Link from "next/link";
import Image from "next/image";
import { foods } from "./data";
import React from 'react';

export default function FoodsPage() {
  return (
    <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', padding: '2rem' }}>
      {foods.map(food => (
        <Link key={food.id} href={`/foods/${food.id}`}>
          <div style={{
            border: '1px solid #e5e7eb',
            borderRadius: '1rem',
            padding: '1rem',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
            transition: 'all 0.2s',
            cursor: 'pointer'
          }}>
            <Image src={food.image} alt={food.name} width={400} height={250} style={{ borderRadius: '0.75rem', objectFit: 'cover', width: '100%' }} />
            <h2 style={{ marginTop: '1rem', fontSize: '1.25rem', textAlign: 'center' }}>{food.name}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}
