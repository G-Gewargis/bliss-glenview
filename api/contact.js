// filepath: /Users/gege/bliss-glenview/api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { name, email, phone, service, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name, email, and message are required fields.' 
      });
    }

    // Create nodemailer transporter for Outlook/Hotmail
    const transporter = nodemailer.createTransporter({
      service: 'hotmail', // Use 'hotmail' for Outlook.com
      auth: {
        user: process.env.OUTLOOK_EMAIL, // Your Outlook email
        pass: process.env.OUTLOOK_PASSWORD // Your Outlook password or app password
      }
    });

    // Email content
    const mailOptions = {
      from: process.env.OUTLOOK_EMAIL,
      to: process.env.BUSINESS_EMAIL || process.env.OUTLOOK_EMAIL, // Business email to receive contacts
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9f9f9; padding: 20px; border-radius: 10px;">
          <div style="background-color: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #e91e63; margin-bottom: 20px; text-align: center;">New Contact Form Submission</h2>
            
            <div style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid #eee;">
              <h3 style="color: #333; margin-bottom: 10px;">Contact Information</h3>
              <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
              ${phone ? `<p style="margin: 5px 0;"><strong>Phone:</strong> ${phone}</p>` : ''}
              ${service ? `<p style="margin: 5px 0;"><strong>Service of Interest:</strong> ${service}</p>` : ''}
            </div>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #333; margin-bottom: 10px;">Message</h3>
              <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #e91e63;">
                <p style="margin: 0; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="color: #666; font-size: 14px;">This message was sent from the Bliss Salon of Glenview contact form.</p>
              <p style="color: #666; font-size: 12px;">Please respond directly to: ${email}</p>
            </div>
          </div>
        </div>
      `,
      replyTo: email // Allow direct reply to the customer
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send confirmation email to customer
    const confirmationOptions = {
      from: process.env.OUTLOOK_EMAIL,
      to: email,
      subject: 'Thank you for contacting Bliss Salon of Glenview',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9f9f9; padding: 20px; border-radius: 10px;">
          <div style="background-color: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #e91e63; margin-bottom: 20px; text-align: center;">Thank You for Contacting Us!</h2>
            
            <p style="color: #333; line-height: 1.6;">Dear ${name},</p>
            
            <p style="color: #333; line-height: 1.6;">Thank you for reaching out to Bliss Salon of Glenview! We have received your message and will get back to you within 24 hours.</p>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
              <h3 style="color: #e91e63; margin-bottom: 15px;">Your Message Summary:</h3>
              <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
              ${phone ? `<p style="margin: 5px 0;"><strong>Phone:</strong> ${phone}</p>` : ''}
              ${service ? `<p style="margin: 5px 0;"><strong>Service of Interest:</strong> ${service}</p>` : ''}
              <p style="margin: 10px 0 5px 0;"><strong>Message:</strong></p>
              <p style="margin: 5px 0; padding: 10px; background-color: #fff; border-radius: 3px;">${message}</p>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <p style="color: #333; margin-bottom: 15px;">In the meantime, you can book an appointment online:</p>
              <a href="https://online.rosysalonsoftware.com/onlineBooking?id=52733" 
                 style="background-color: #e91e63; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; display: inline-block; font-weight: bold;">
                Book Appointment
              </a>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="color: #666; margin-bottom: 10px;"><strong>Bliss Salon of Glenview</strong></p>
              <p style="color: #666; font-size: 14px; margin: 5px 0;">1877 Waukegan Road, Glenview, IL 60025</p>
              <p style="color: #666; font-size: 14px; margin: 5px 0;">Phone: (773) 550-3730</p>
              <p style="color: #666; font-size: 14px; margin: 5px 0;">Hours: Tues-Sat 10am-5pm</p>
            </div>
          </div>
        </div>
      `
    };

    await transporter.sendMail(confirmationOptions);

    return res.status(200).json({ 
      success: true, 
      message: 'Thank you for your message! We will get back to you shortly.' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Something went wrong. Please try again or contact us directly.' 
    });
  }
}