import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

const GrievanceForm: React.FC = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);

        const { data, error } = await supabase
            .from('grievances')
            .insert([{ title, description }]);

        if (error) {
            setError(error.message);
        } else {
            setSuccess('Grievance submitted successfully!');
            setTitle('');
            setDescription('');
        }
        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Submit a Grievance</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <button type="submit" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit'}
            </button>
        </form>
    );
};

export default GrievanceForm;