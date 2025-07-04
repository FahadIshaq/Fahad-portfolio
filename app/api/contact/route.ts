import { NextRequest, NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()


    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    // Check environment variables
    if (!process.env.MONGODB_URI) {
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    if (!process.env.NOTIFICATION_EMAIL) {
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    // Connect to MongoDB Atlas
    const client = new MongoClient(process.env.MONGODB_URI)
    await client.connect()
    
    const db = client.db('portfolio')
    const collection = db.collection('contact_submissions')

    // Store in MongoDB
    const submission = {
      name,
      email,
      subject,
      message,
      timestamp: new Date(),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    }

    await collection.insertOne(submission)
    await client.close()


    const emailResult = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.NOTIFICATION_EMAIL,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
      `
    })

    return NextResponse.json(
      { message: 'Message sent successfully! I\'ll get back to you soon.' },
      { status: 200 }
    )

  } catch (error) {
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    )
  }
} 