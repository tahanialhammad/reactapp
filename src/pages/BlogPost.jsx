import React from 'react'
import { useParams } from 'react-router-dom';

export default function BlogPost() {
  const params = useParams();
// get pram from url
  return  <div className="container mx-auto px-4">This is blog post {params.id}</div>;
}