import { PropsWithChildren } from 'react';
import './Main.css';

export default function Main({ children }: PropsWithChildren) {
  return <main>{children}</main>;
}
