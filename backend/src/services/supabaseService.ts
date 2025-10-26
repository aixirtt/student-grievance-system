import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY as string;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const getGrievances = async () => {
    const { data, error } = await supabase
        .from('grievances')
        .select('*');
    if (error) throw new Error(error.message);
    return data;
};

export const getGrievanceById = async (id: string) => {
    const { data, error } = await supabase
        .from('grievances')
        .select('*')
        .eq('id', id)
        .single();
    if (error) throw new Error(error.message);
    return data;
};

export const createGrievance = async (grievance: { title: string; description: string; userId: string }) => {
    const { data, error } = await supabase
        .from('grievances')
        .insert([grievance]);
    if (error) throw new Error(error.message);
    return data;
};

export const updateGrievance = async (id: string, updates: Partial<{ title: string; description: string }>) => {
    const { data, error } = await supabase
        .from('grievances')
        .update(updates)
        .eq('id', id);
    if (error) throw new Error(error.message);
    return data;
};

export const deleteGrievance = async (id: string) => {
    const { data, error } = await supabase
        .from('grievances')
        .delete()
        .eq('id', id);
    if (error) throw new Error(error.message);
    return data;
};