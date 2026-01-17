'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

export default function ConditionalNavbar() {
  const pathname = usePathname();
  
  // Verberg de navbar op de login pagina
  if (pathname === '/login') {
    return null;
  }
  
  return <Navbar />;
}
