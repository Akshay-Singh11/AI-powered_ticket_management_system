import {inngest} from "../inngest/client.js"
import Ticket from "../models/ticket.js";
import User from "../models/user.js";
import mongoose from "mongoose";
import analyzeTicket from "../utils/ai.js";


export const createTicket = async (req, res) => {
    try {
        const { title, description, createdBy } = req.body;

        // Your Ticket Creation Logic
        const ticket = new Ticket({ title, description, createdBy });

        // Analyze ticket using AI (safe wrapped)
        const aiAnalysis = await analyzeTicket(ticket);

        ticket.analysisResult = aiAnalysis;
        await ticket.save();

        return res.status(201).json({ message: "Ticket created successfully", ticket });
    } catch (error) {
        console.error("Error creating ticket:", error.message);
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
};


export const getTickets = async (req, res) => {
    try {
        const user = req.user
        let tickets = []
        if (user.role !== "user") {
            tickets = await Ticket.find({})
                .populate("assignedTo", ["email", "_id"])
                .sort({ createdAt: -1 })
        }
        else {
            tickets = await Ticket.find({ createdBy: user._id })
                .select("title description status createdAt")
                .sort({ createdAt: -1 })
        }
        return res.status(200).json(tickets)
    }
    catch (error) {
        console.error("Error fetching tickets:", error.message)
        return res.status(500).json({ message: "Internal server error" })
    }
}

export const getTicket = async (req, res) => {
 const { id } = req.params;

 if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid ticket ID" });
  }

    try {
        const user = req.user
        let ticket;
        if (user.role !== "user") {
            ticket = await  Ticket.findById(id)
                .populate("assignedTo", ["email", "_id"])

        }
        else {
            ticket = await Ticket.findOne({
                createdBy: user._id,
                _id: req.params.id
            })
                .select("title description status createdAt")
        }
        if (!ticket) {
            return res.status(404).json({ message: "Ticket not found" })
        }
        console.log(ticket)
        return res.status(200).json(ticket)
    }
    catch (error) {
        console.error("Error fetching ticket", error.message)
        return res.status(500).json({ message: "Internal server error" })
    }
}