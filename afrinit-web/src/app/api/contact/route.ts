import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations/contact";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Server-side validation with Zod
    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      const fieldErrors = validationResult.error.flatten().fieldErrors;
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed. Please check the entered fields.",
          errors: fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, message } = validationResult.data;

    // =========================================================================
    // TODO: Live Email Delivery Integration
    // When configuring email delivery in production, set the environment variable
    // process.env.CONTACT_EMAIL_PROVIDER (e.g., 'resend', 'sendgrid', 'ses') and
    // its associated credentials (e.g., CONTACT_EMAIL_API_KEY).
    //
    // Example:
    // if (process.env.CONTACT_EMAIL_PROVIDER === "resend" && process.env.CONTACT_EMAIL_API_KEY) {
    //   await sendResendEmail({ to: "hello@afrinit.com", from: email, name, message });
    // }
    // =========================================================================

    // Simulate successful processing without inventing external credentials
    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out. We will get back to you shortly.",
        data: {
          receivedAt: new Date().toISOString(),
          name,
          email,
          messageLength: message.length,
        },
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred while processing your request.",
      },
      { status: 500 }
    );
  }
}
