
/*
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (!scriptUrl) {
      return NextResponse.json(
        {
          success: false,
          message: "Google Script URL is not configured.",
        },
        { status: 500 }
      );
    }

    const formData = await request.json();

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(formData),
      redirect: "follow",
      cache: "no-store",
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      return NextResponse.json(
        {
          success: false,
          message: result.message || "Unable to save enquiry.",
        },
        { status: 500 }
      ); 
    }

    return NextResponse.json({
      success: true,
      message: "Enquiry saved successfully.",
    });

  } catch (error) {
    console.error("Enquiry API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while submitting your enquiry.",
      },
      { status: 500 }
    );
  }
}
  */ 



/*
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (!scriptUrl) {
      return NextResponse.json(
        {
          success: false,
          message: "Google Script URL is not configured.",
        },
        { status: 500 }
      );
    }

    const formData = await request.json();

    // STEP 1: Save enquiry in Google Sheets
    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(formData),
      redirect: "follow",
      cache: "no-store",
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      return NextResponse.json(
        {
          success: false,
          message: result.message || "Unable to save enquiry.",
        },
        { status: 500 }
      );
    }

    // STEP 2: Configure Gmail transporter
    const emailUser = process.env.EMAIL_USER;
    const emailPassword = process.env.EMAIL_APP_PASSWORD;
    const emailTo = process.env.EMAIL_TO;

    if (!emailUser || !emailPassword || !emailTo) {
      console.error("Email configuration is missing.");

      return NextResponse.json({
        success: true,
        message:
          "Your enquiry was saved, but email notification is not configured.",
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
    });

    // STEP 3: Prepare email notification
    const mailOptions = {
      from: `"DreamNest Website" <${emailUser}>`,
      to: emailTo,
      subject: "New Customer Enquiry - DreamNest",

      text: `
New customer enquiry received through the DreamNest website.

CUSTOMER DETAILS

Name: ${formData.name || "Not provided"}
Phone: ${formData.phone || "Not provided"}
Email: ${formData.email || "Not provided"}

PROPERTY REQUIREMENTS

Requirement: ${formData.requirement || "Not provided"}
Property Type: ${formData.propertyType || "Not provided"}
Preferred Location: ${formData.location || "Not provided"}
Budget: ${formData.budget || "Not provided"}

ADDITIONAL MESSAGE

${formData.message || "No additional message"}

This enquiry has been saved in your Google Sheet.

Regards,
DreamNest Website
      `,
    };

    // STEP 4: Send notification email
    try {
      await transporter.sendMail(mailOptions);

      console.log("DreamNest enquiry notification email sent.");
    } catch (emailError) {
      console.error("Email notification failed:", emailError);

      return NextResponse.json({
        success: true,
        message:
          "Your enquiry was saved successfully, but email notification could not be sent.",
      });
    }

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully.",
    });

  } catch (error) {
    console.error("Enquiry API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while submitting your enquiry.",
      },
      { status: 500 }
    );
  }
}
  */



import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;


    /*
    if (!scriptUrl) {
      return NextResponse.json(
        {
          success: false,
          message: "Google Script URL is not configured.",
        },
        { status: 500 }
      );
    }
      

    const formData = await request.json();

    // STEP 1: Save enquiry in Google Sheets
    /*
    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(formData),
      redirect: "follow",
      cache: "no-store",
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      return NextResponse.json(
        {
          success: false,
          message: result.message || "Unable to save enquiry.",
        },
        { status: 500 }
      );
    }
      */

    // STEP 2: Email configuration
    const emailUser = process.env.EMAIL_USER;
    const emailPassword = process.env.EMAIL_APP_PASSWORD;
    const emailTo = process.env.EMAIL_TO;

    if (!emailUser || !emailPassword || !emailTo) {
      console.error("Email configuration is missing.");

      return NextResponse.json({
        success: true,
        message: "Enquiry saved, but email is not configured.",
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
    });

    // STEP 3: Prepare customer details
    const safe = (value: unknown) =>
      String(value ?? "Not provided")
        .replace(/[&<>"']/g, (char) => {
          const entities: Record<string, string> = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
          };
          return entities[char];
        });

    const name = safe(formData.name);
    const phone = safe(formData.phone);
    const email = safe(formData.email);
    const requirement = safe(formData.requirement);
    const propertyType = safe(formData.propertyType);
    const location = safe(formData.location);
    const budget = safe(formData.budget);
    const message = safe(formData.message || "No additional message");

    // STEP 4: Create professional HTML email
    const html = `
    <!DOCTYPE html>
    <html>
    <body style="margin:0;padding:0;background-color:#f3f6f8;font-family:Arial,sans-serif;">

      <table width="100%" cellpadding="0" cellspacing="0" style="padding:30px 10px;">
        <tr>
          <td align="center">

            <table width="600" cellpadding="0" cellspacing="0"
              style="max-width:600px;background:#ffffff;border-radius:12px;overflow:hidden;">

              <!-- Header -->
              <tr>
                <td style="background:#142d4e;padding:28px 30px;text-align:center;">

                  <h1 style="color:#ffffff;margin:0;font-size:28px;letter-spacing:1px;">
                    DREAMNEST
                  </h1>

                  <p style="color:#b8d9c4;margin:8px 0 0;font-size:12px;letter-spacing:2px;">
                    FIND YOUR PLACE
                  </p>

                </td>
              </tr>

              <!-- Green accent -->
              <tr>
                <td style="height:5px;background:#5a9b70;"></td>
              </tr>

              <!-- Main content -->
              <tr>
                <td style="padding:30px;">

                  <h2 style="color:#142d4e;margin:0 0 10px;font-size:22px;">
                    New Customer Enquiry!
                  </h2>

                  <p style="color:#64748b;font-size:14px;line-height:1.6;">
                    You have received a new property enquiry through the
                    DreamNest website. Here are the customer details.
                  </p>

                  <!-- Customer Details -->
                  <h3 style="color:#142d4e;font-size:16px;border-bottom:2px solid #e8eef2;padding-bottom:10px;margin-top:28px;">
                    Customer Details
                  </h3>

                  <table width="100%" cellpadding="9" cellspacing="0"
                    style="font-size:14px;color:#334155;">

                    <tr>
                      <td width="40%" style="color:#64748b;">Full Name</td>
                      <td><strong>${name}</strong></td>
                    </tr>

                    <tr>
                      <td style="color:#64748b;">Phone Number</td>
                      <td><strong>${phone}</strong></td>
                    </tr>

                    <tr>
                      <td style="color:#64748b;">Email Address</td>
                      <td>${email}</td>
                    </tr>

                  </table>

                  <!-- Property Requirements -->
                  <h3 style="color:#142d4e;font-size:16px;border-bottom:2px solid #e8eef2;padding-bottom:10px;margin-top:28px;">
                    Property Requirements
                  </h3>

                  <table width="100%" cellpadding="9" cellspacing="0"
                    style="font-size:14px;color:#334155;">

                    <tr>
                      <td width="40%" style="color:#64748b;">Requirement</td>
                      <td><strong>${requirement}</strong></td>
                    </tr>

                    <tr>
                      <td style="color:#64748b;">Property Type</td>
                      <td>${propertyType}</td>
                    </tr>

                    <tr>
                      <td style="color:#64748b;">Preferred Location</td>
                      <td>${location}</td>
                    </tr>

                    <tr>
                      <td style="color:#64748b;">Budget</td>
                      <td><strong>${budget}</strong></td>
                    </tr>

                  </table>

                  <!-- Additional Message -->
                  <h3 style="color:#142d4e;font-size:16px;margin-top:28px;">
                    Additional Requirements
                  </h3>

                  <div style="background:#f3f7f4;border-left:4px solid #5a9b70;padding:15px;border-radius:4px;color:#475569;font-size:14px;line-height:1.6;">
                    ${message}
                  </div>

                  <!-- Action -->
                  <div style="text-align:center;margin-top:30px;">

                    <a href="tel:${phone}"
                      style="display:inline-block;background:#5a9b70;color:#ffffff;text-decoration:none;padding:13px 25px;border-radius:6px;font-size:14px;font-weight:bold;">
                      Contact Customer
                    </a>

                  </div>

                  <p style="color:#64748b;font-size:13px;text-align:center;margin-top:25px;">
                    This enquiry has been saved in your Google Sheets.
                  </p>

                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background:#142d4e;padding:20px;text-align:center;">

                  <p style="color:#ffffff;font-size:13px;margin:0;">
                    DreamNest | Find Your Place
                  </p>

                  <p style="color:#b8c5d4;font-size:11px;margin:8px 0 0;">
                    This is an automated notification from the DreamNest website.
                  </p>

                </td>
              </tr>

            </table>

          </td>
        </tr>
      </table>

    </body>
    </html>
    `;

    // STEP 5: Send email
    try {
      await transporter.sendMail({
        from: `"DreamNest" <${emailUser}>`,
        to: emailTo,
        subject: "New Customer Enquiry | DreamNest",
        html,
        text: `
New DreamNest Enquiry

Name: ${name}
Phone: ${phone}
Email: ${email}

Requirement: ${requirement}
Property Type: ${propertyType}
Location: ${location}
Budget: ${budget}

Additional Message:
${message}
        `,
      });

      console.log("DreamNest HTML notification email sent.");

    } catch (emailError) {
      console.error("Email notification failed:", emailError);

      return NextResponse.json({
        success: true,
        message: "Enquiry saved, but email notification failed.",
      });
    }

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully.",
    });

  } catch (error) {
    console.error("Enquiry API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while submitting your enquiry.",
      },
      { status: 500 }
    );
  }
}

