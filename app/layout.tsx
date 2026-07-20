import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata={title:'OlgaGeometry — мандалы и сакральная геометрия',description:'Путь от первой мандалы к осознанному творчеству: акрил, геометрия, цвет и духовная практика.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ru"><body>{children}</body></html>}