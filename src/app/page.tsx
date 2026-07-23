import { getHomeMetadata } from '../content/selectors';
import { toPageMetadata } from './_lib/metadata';

export const metadata = toPageMetadata(getHomeMetadata());

export default function Home() {
  return <div></div>;
}
