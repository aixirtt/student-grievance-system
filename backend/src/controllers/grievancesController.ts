import { Request, Response } from 'express';
import { SupabaseService } from '../services/supabaseService';

export class GrievancesController {
    private supabaseService: SupabaseService;

    constructor() {
        this.supabaseService = new SupabaseService();
    }

    public async createGrievance(req: Request, res: Response): Promise<void> {
        try {
            const { title, description, studentId } = req.body;
            const grievance = await this.supabaseService.createGrievance({ title, description, studentId });
            res.status(201).json(grievance);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create grievance' });
        }
    }

    public async getGrievances(req: Request, res: Response): Promise<void> {
        try {
            const grievances = await this.supabaseService.getGrievances();
            res.status(200).json(grievances);
        } catch (error) {
            res.status(500).json({ error: 'Failed to retrieve grievances' });
        }
    }

    public async getGrievanceById(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const grievance = await this.supabaseService.getGrievanceById(id);
            if (grievance) {
                res.status(200).json(grievance);
            } else {
                res.status(404).json({ error: 'Grievance not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to retrieve grievance' });
        }
    }

    public async updateGrievance(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const { title, description } = req.body;
            const updatedGrievance = await this.supabaseService.updateGrievance(id, { title, description });
            if (updatedGrievance) {
                res.status(200).json(updatedGrievance);
            } else {
                res.status(404).json({ error: 'Grievance not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to update grievance' });
        }
    }

    public async deleteGrievance(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const deleted = await this.supabaseService.deleteGrievance(id);
            if (deleted) {
                res.status(204).send();
            } else {
                res.status(404).json({ error: 'Grievance not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to delete grievance' });
        }
    }
}