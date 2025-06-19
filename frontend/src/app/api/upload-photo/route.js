import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req) {
  const { image } = await req.json();

  if (!image) {
    return NextResponse.json({ message: "No image provided." }, { status: 400 });
  }

  const base64Data = image.replace(/^data:image\/png;base64,/, "");
  const uploadsPath = path.join(process.cwd(), "public/uploads");

  if (!fs.existsSync(uploadsPath)) fs.mkdirSync(uploadsPath);

  const filePath = path.join(uploadsPath, `photo_${Date.now()}.png`);
  fs.writeFileSync(filePath, base64Data, "base64");

  return NextResponse.json({ message: "Image uploaded successfully." });
}
