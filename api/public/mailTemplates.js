export const welcomeMail = (username) => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to VidVibe</title>
</head>
    <body style="font-family: Arial, sans-serif; margin: 0; padding: 0;">
    <div style="max-width: 600px; margin: 20px auto; background-color: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
        <div style="text-align: center; margin-bottom: 20px; background: #ec3454; padding: 1rem; border-radius: 10px;">
            <img src="https://ik.imagekit.io/onmwvwg7jy/VidVibe/images/VidVibe-splash-icon.PNG?updatedAt=1738481603417" alt="VidVibe Logo" style="max-width: 100px;">
        </div>
        <div style="text-align: left;">
            <h1 style="color: #ec3454;">Welcome to VidVibe, @${username}!</h1>
            <p style="color: #666;">Thank you for signing up with VidVibe! We're thrilled to have you as part of our vibrant community. VidVibe is the perfect place to create, share, and discover amazing short videos.</p>
            <p style="color: #666;">Here are a few tips to get you started:</p>
            <ul>
                <li><strong>Create Your First Video:</strong> Use our easy-to-use tools to create and edit your videos.</li>
                <li><strong>Explore Content:</strong> Discover trending videos and follow your favorite creators.</li>
                <li><strong>Engage with the Community:</strong> Like, comment, and share videos to connect with others.</li>
            </ul>
            <p style="color: #666;">If you have any questions or need assistance, feel free to reach out to us at ${process.env.SUPPORT_EMAIL}.</p>
            <a href="${process.env.CLIENT_ORIGIN}" style="display: inline-block; padding: 10px 20px; color: #fff; background-color: #ec3454; border-radius: 5px; text-decoration: none; font-size: 16px; margin-top: 20px;">Get Started</a>
        </div>
        <div style="text-align: center; margin-top: 20px; font-size: 12px; color: #999;">
            <p>Best regards,<br>VidVibe Team</p>
            <p>Follow us on social media:</p>
            <p><a href="${process.env.FACEBOOK_PROFILE}" style="color: #ec3454;">[Facebook]</a> <a href="${process.env.INSTAGRAM_PROFILE}" style="color: #ec3454;">[Instagram]</a></p>
        </div>
    </div>
    </body>
    </html>
        `
}

export const loginMail = (username, os) => {
    return `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>New Login Activity from ${os}</title>
            </head>
            <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">
            <div style="max-width: 600px; margin: 20px auto; background-color: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                <div style="text-align: center; margin-bottom: 20px; background: #ec3454; padding: 1rem; border-radius: 10px;">
                    <img src="https://ik.imagekit.io/onmwvwg7jy/VidVibe/images/VidVibe-splash-icon.PNG?updatedAt=1738481603417" alt="VidVibe Logo" style="max-width: 100px;">
                </div>
                <div style="text-align: left;">
                    <h1 style="color: #ec3454;">New Login Activity Detected</h1>
                    <p>Hi ${username},</p>
                    <p>We noticed a new login to your VidVibe account from a device running <strong>${os}</strong>.</p>
                    <div style="width: 100%; display: flex; align-items: center; justify-content: center;"><span style="font-size: 3rem; border: 5px solid #333; color: #333; letter-spacing: 2px; padding: 1.5rem; font-weight: bold; font-family: Impact;">${os}</span></div>
                    <p>If this was you, you can safely ignore this email. If you did not log in, please secure your account immediately by changing your password.</p>
                    <a href="${process.env.CLIENT_ORIGIN}/profile/security" style="display: inline-block; padding: 10px 20px; color: #fff; background-color: #ec3454; border-radius: 5px; text-decoration: none; font-size: 16px; margin-top: 20px;">Change Password</a>
                    <p>If you have any questions or need assistance, feel free to reach out to us at ${process.env.SUPPORT_EMAIL}.</p>
                </div>
                <div style="text-align: center; margin-top: 20px; font-size: 12px; color: #999;">
                    <p>Best regards,<br>VidVibe Team</p>
                    <p>Follow us on social media:</p>
                    <p><a href="${process.env.FACEBOOK_PROFILE}" style="color: #ec3454;">[Facebook]</a> <a href="${process.env.INSTAGRAM_PROFILE}" style="color: #ec3454;">[Instagram]</a></p>
                </div>
            </div>
            </body>
            </html>`
}