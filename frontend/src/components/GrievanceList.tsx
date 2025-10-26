import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Grievance } from '../types';

const GrievanceList: React.FC = () => {
  const [grievances, setGrievances] = useState<Grievance[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchGrievances = async () => {
      const { data, error } = await supabase
        .from('grievances')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching grievances:', error);
      } else {
        setGrievances(data);
      }
      setLoading(false);
    };

    fetchGrievances();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Grievance List</h2>
      <ul>
        {grievances.map((grievance) => (
          <li key={grievance.id}>
            <h3>{grievance.title}</h3>
            <p>{grievance.description}</p>
            <p><strong>Submitted on:</strong> {new Date(grievance.created_at).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GrievanceList;