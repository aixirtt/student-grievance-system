import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import GrievanceList from '../../components/GrievanceList';

const GrievancesPage = () => {
  const [grievances, setGrievances] = useState([]);

  useEffect(() => {
    const fetchGrievances = async () => {
      const { data, error } = await supabase
        .from('grievances')
        .select('*');

      if (error) {
        console.error('Error fetching grievances:', error);
      } else {
        setGrievances(data);
      }
    };

    fetchGrievances();
  }, []);

  return (
    <div>
      <h1>Grievances</h1>
      <GrievanceList grievances={grievances} />
    </div>
  );
};

export default GrievancesPage;