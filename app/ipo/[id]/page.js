'use client'
import IpoDetail from '../../../components/IpoDetail';
import { useParams } from 'next/navigation';
import dummy from '../../../dummyData.json';

export default function IpoDetailPage() {
    const { id } = useParams();

    const [ipoDetail] = dummy.filter(ipo => ipo.id === parseInt(id))

  return <IpoDetail ipo={ipoDetail} />;
}
