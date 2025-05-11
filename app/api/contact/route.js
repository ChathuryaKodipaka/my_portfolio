import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();
    
    // Validate the data
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'All fields are required' },
        { status: 400 }
      );
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }
    
    // Insert into Supabase with better error handling
    const { data, error } = await supabaseAdmin
      .from('contact_messages')
      .insert([{ 
        name, 
        email, 
        message,
        status: 'pending' // Set initial status
      }]);
    
    if (error) {
      console.error('Supabase insert error:', error);
      return NextResponse.json(
        { success: false, error: 'Failed to save your message' },
        { status: 500 }
      );
    }
    
    // Set up nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
    
    // Send email with better error handling
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: 'kodipakachathuryagoud@gmail.com',
        subject: `Website Contact: ${name}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
              }
              .header {
                background-color: #4a86e8;
                color: white;
                padding: 15px 20px;
                border-radius: 5px 5px 0 0;
              }
              .content {
                padding: 20px;
                border: 1px solid #ddd;
                border-top: none;
                border-radius: 0 0 5px 5px;
              }
              .field {
                margin-bottom: 15px;
              }
              .label {
                font-weight: bold;
                display: inline-block;
                width: 80px;
              }
              .message-box {
                background-color: #f9f9f9;
                padding: 15px;
                border-left: 4px solid #4a86e8;
                margin-top: 20px;
              }
              .footer {
                margin-top: 20px;
                font-size: 0.9em;
                color: #777;
                border-top: 1px solid #eee;
                padding-top: 10px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h2>Profile Visitor Notification</h2>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Date:</span> ${new Date().toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'})}
              </div>
              <div class="field">
                <span class="label">Name:</span> ${name}
              </div>
              <div class="field">
                <span class="label">Email:</span> <a href="mailto:${email}">${email}</a>
              </div>
              
              <div class="message-box">
                <h3>Message Content</h3>
                <p>${message.replace(/\n/g, '<br>')}</p>
              </div>
              
              <div class="footer">
                <p>This is an automated notification from your portfolio website contact form.</p>
              </div>
            </div>
          </body>
          </html>
        `,
      });
      
      // Update status
      const { updateError } = await supabaseAdmin
        .from('contact_messages')
        .update({ status: 'sent' })
        .eq('name', name)
        .eq('email', email)
        .eq('message', message);
      
      if (updateError) {
        console.error('Status update error:', updateError);
      }
      
      return NextResponse.json(
        { success: true, message: 'Your message has been sent!' },
        { status: 200 }
      );
    } catch (emailError) {
      console.error('Email sending error:', emailError);
      
      // Update status to failed
      const { updateError } = await supabaseAdmin
        .from('contact_messages')
        .update({ status: 'failed' })
        .eq('name', name)
        .eq('email', email)
        .eq('message', message);
      
      if (updateError) {
        console.error('Status update error:', updateError);
      }
      
      return NextResponse.json(
        { success: false, error: 'Failed to send email notification' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, error: 'Something went wrong' },
      { status: 500 }
    );
  }
}