'use client';
import { foods } from "../data";
import Image from "next/image";
import React from 'react';

export default function FoodDetail({ params }) {
  const food = foods.find(f => f.id === params.id);

  if (!food) return <p style={{ textAlign: 'center', marginTop: '2rem' }}>Food not found.</p>;

  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto', padding: '1rem' }}>
      <Image src={food.image} alt={food.name} width={800} height={400} style={{ borderRadius: '1rem', width: '100%', objectFit: 'cover' }} />
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginTop: '1rem' }}>{food.name}</h1>
      <p style={{ fontSize: '1.125rem', marginTop: '0.5rem', color: '#374151' }}>{food.description}</p>
    </div>
  );
}
