import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../../lib/supabaseClient';

const GrievanceDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [grievance, setGrievance] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGrievance = async () => {
      if (id) {
        const { data, error } = await supabase
          .from('grievances')
          .select('*')
          .eq('id', id)
          .single();

        if (error) {
          console.error('Error fetching grievance:', error);
        } else {
          setGrievance(data);
        }
        setLoading(false);
      }
    };

    fetchGrievance();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!grievance) {
    return <div>No grievance found.</div>;
  }

  return (
    <div>
      <h1>Grievance Details</h1>
      <h2>{grievance.title}</h2>
      <p>{grievance.description}</p>
      <p>Status: {grievance.status}</p>
      <p>Submitted on: {new Date(grievance.created_at).toLocaleDateString()}</p>
    </div>
  );
};

export default GrievanceDetail;