import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db/connect";

export async function GET() {
    try {
        await connectDB();
        return NextResponse.json({
            success: true,
            message: "MongoDB connected successfully",
            database: "secure_video_infrastructure",
        });
    } catch {
        return NextResponse.json(
            {
                success: false,
                message: "Database connection failed",
            },
            { status: 503 }
        );
    }
}