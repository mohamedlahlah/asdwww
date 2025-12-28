
import React from 'react';

export interface ServiceDetail {
  title: string;
  description: string;
  points: string[];
  benefits: string[];
  icon: React.ReactNode;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}