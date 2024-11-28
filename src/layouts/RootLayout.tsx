import { ReactNode } from 'react';
import Navbar from '../components/Navbar';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      <Navbar />
      <main className="pt-4">{children}</main>
    </div>
  );
}