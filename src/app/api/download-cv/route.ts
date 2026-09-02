import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "Mohammed_Jebbari_Resume.pdf");

    if (!fs.existsSync(filePath)) {
      return new NextResponse("Resume file not found", { status: 404 });
    }

    const fileBuffer = fs.readFileSync(filePath);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Mohammed_Jebbari_Resume.pdf"',
        "Content-Length": fileBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error("Error downloading CV:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
