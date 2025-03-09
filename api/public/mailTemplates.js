export const welcomeMail = (username, token) => {
    return `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Welcome to VidVibe</title>
            </head>
            <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">
                <div style="max-width: 600px; margin: 20px auto; background-color: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                    <div style="text-align: center; margin-bottom: 20px; background: #ec3454; padding: 1rem; border-radius: 10px;">
                        <img src="https://ik.imagekit.io/onmwvwg7jy/VidVibe/images/VidVibe-splash-icon.PNG?updatedAt=1738481603417" alt="VidVibe Logo" style="max-width: 100px;">
                    </div>
                    <div style="text-align: left;">
                        <h1 style="color: #ec3454;">Welcome to VidVibe, @${username}!</h1>
                        <p>Thank you for signing up with VidVibe! We're thrilled to have you as part of our vibrant community. VidVibe is the perfect place to create, share, and discover amazing short videos.</p>
                        <p>To get started and access all the features, please verify your email address by clicking the button below:</p>
                        <a href="${process.env.CLIENT_ORIGIN}/verify/email/${token}" style="display: inline-block; padding: 10px 20px; color: #fff; background-color: #ec3454; border-radius: 5px; text-decoration: none; font-size: 16px; margin-top: 20px;">Verify Email</a>
                        <p><strong>Important:</strong> This link is only valid for 30 minutes</p>
                        <p>Once your email is verified, you can:</p>
                        <ul>
                            <li><strong>Create and Share:</strong> Upload your short videos and share them with the community.</li>
                            <li><strong>Discover Content:</strong> Explore trending videos and follow your favorite creators.</li>
                            <li><strong>Engage with Others:</strong> Like, comment, and share videos to connect with fellow enthusiasts.</li>
                        </ul>
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

export const loginMail = (username, details) => {
    return `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>New Login Activity from ${details.os}</title>
            </head>
            <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">
            <div style="max-width: 600px; margin: 20px auto; background-color: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                <div style="text-align: center; margin-bottom: 20px; background: #ec3454; padding: 1rem; border-radius: 10px;">
                    <img src="https://ik.imagekit.io/onmwvwg7jy/VidVibe/images/VidVibe-splash-icon.PNG?updatedAt=1738481603417" alt="VidVibe Logo" style="max-width: 100px;">
                </div>
                <div style="text-align: left;">
                    <h1 style="color: #ec3454;">New Login Activity Detected</h1>
                    <p>Hi ${username},</p>
                    <p>We noticed a new login to your VidVibe account from a device, Here are the details:</p>
                    <ul>
                        <li><strong>Date and Time:</strong>On ${details.dateTime.getDate()}/${details.dateTime.getMonth()}/${details.dateTime.getFullYear()} At ${details.dateTime.getHours()}:${details.dateTime.getMinutes()}</li>
                        <li><strong>Operating System:</strong> ${details.os}</li>
                        <li><strong>IP Address:</strong> ${details.ip}</li>
                    </ul>
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

export const verifyEmailMail = (username, token) => {
    return `<!DOCTYPE html>
            <html lang="en">
                <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Verify Your Email</title>
            </head>
            <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">
            <div style="max-width: 600px; margin: 20px auto; background-color: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                <div style="text-align: center; margin-bottom: 20px; background: #ec3454; padding: 1rem; border-radius: 10px;">
                    <img src="https://ik.imagekit.io/onmwvwg7jy/VidVibe/images/VidVibe-splash-icon.PNG?updatedAt=1738481603417" alt="VidVibe Logo" style="max-width: 100px;">
                </div>
                <div style="text-align: left;">
                    <h1 style="color: #ec3454;">Verify Your Email Address</h1>
                    <p>Hi @${username},</p>
                    <p>Welcome to VidVibe! We're excited to have you join our community of short video creators and enthusiasts. To get started, please verify your email address by clicking the button below:</p>
                    <a href="${process.env.CLIENT_ORIGIN}/verify/email/${token}" style="display: inline-block; padding: 10px 20px; color: #fff; background-color: #ec3454; border-radius: 5px; text-decoration: none; font-size: 16px; margin-top: 20px;">Verify Email</a>
                    <p><strong>Important:</strong> This link is only valid for 30 minutes</p>
                    <p>If you did not create an account with VidVibe, please ignore this email.</p>
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

export const emailVerifiedMail = (username) => {
    return `<!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Email Verified Successfully</title>
            </head>
            <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">
            <div style="max-width: 600px; margin: 20px auto; background-color: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
              <div style="text-align: center; margin-bottom: 20px; background: #ec3454; padding: 1rem; border-radius: 10px;">
                <img src="https://ik.imagekit.io/onmwvwg7jy/VidVibe/images/VidVibe-splash-icon.PNG?updatedAt=1738481603417" alt="VidVibe Logo" style="max-width: 100px;">
              </div>
              <div style="text-align: left;">
                <h1 style="color: #ec3454;">Email Verified Successfully!</h1>
                <p>Hi @${username},</p>
                <p>We are thrilled to inform you that your email address has been successfully verified. Welcome to the VidVibe community!</p>
                <p>Now that your email is verified, you can fully explore and enjoy all the features VidVibe has to offer:</p>
                <ul>
                  <li><strong>Create and Share:</strong> Upload your short videos and share them with the community.</li>
                  <li><strong>Discover Content:</strong> Explore trending videos and follow your favorite creators.</li>
                  <li><strong>Engage with Others:</strong> Like, comment, and share videos to connect with fellow enthusiasts.</li>
                </ul>
                <p>If you have any questions or need assistance, feel free to reach out to us at ${process.env.SUPPORT_EMAIL}.</p>
                <a href="${process.env.CLIENT_ORIGIN}" style="display: inline-block; padding: 10px 20px; color: #fff; background-color: #ec3454; border-radius: 5px; text-decoration: none; font-size: 16px; margin-top: 20px;">Explore VidVibe</a>
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

export const forgetPasswordMail = (username, token) => {
    return `<!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Reset Your Password</title>
            </head>
            <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">
            <div style="max-width: 600px; margin: 20px auto; background-color: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
              <div style="text-align: center; margin-bottom: 20px; background: #ec3454; padding: 1rem; border-radius: 10px;">
                <img src="https://ik.imagekit.io/onmwvwg7jy/VidVibe/images/VidVibe-splash-icon.PNG?updatedAt=1738481603417" alt="VidVibe Logo" style="max-width: 100px;">
              </div>
              <div style="text-align: left;">
                <h1 style="color: #ec3454;">Reset Your Password</h1>
                <p>Hello @${username},</p>
                <p>We received a request to reset your password for your VidVibe account. Click the button below to reset your password:</p>
                <a href="${process.env.CLIENT_ORIGIN}/forget/${token}" style="display: inline-block; padding: 10px 20px; color: #fff; background-color: #ec3454; border-radius: 5px; text-decoration: none; font-size: 16px; margin-top: 20px;">Reset Password</a>
                <p><strong>Important:</strong> This link is only valid for 30 minutes</p>
                <p>If you did not request a password reset, please ignore this email. Your password will remain unchanged.</p>
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

export const passwordChangedMail = (username, details) => {
    return `<!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Password Changed</title>
            </head>
            <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">
            <div style="max-width: 600px; margin: 20px auto; background-color: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
              <div style="text-align: center; margin-bottom: 20px; background: #ec3454; padding: 1rem; border-radius: 10px;">
                <img src="https://ik.imagekit.io/onmwvwg7jy/VidVibe/images/VidVibe-splash-icon.PNG?updatedAt=1738481603417" alt="VidVibe Logo" style="max-width: 100px;">
              </div>
              <div style="text-align: left;">
                <h1 style="color: #ec3454;">Your Password has been Changed</h1>
                <p>Hello @${username},</p>
                <p>Your password has been successfully changed. Here are the details:</p>
                <ul>
                  <li><strong>Date and Time:</strong>On ${details.dateTime.getDate()}/${details.dateTime.getMonth()}/${details.dateTime.getFullYear()} At ${details.dateTime.getHours()}:${details.dateTime.getMinutes()}</li>
                  <li><strong>Operating System:</strong> ${details.os}</li>
                  <li><strong>IP Address:</strong> ${details.ip}</li>
                </ul>
                <p>If you didn't change your password, please contact support immediately at <a href="mailto:${process.env.SUPPORT_EMAIL}" style="color: #ec3454;">[Support Email]</a></p>
                <p>Stay secure:</p>
                <ul>
                  <li>Use unique, strong passwords.</li>
                  <li>Enable two-factor authentication.</li>
                  <li>Regularly check your account for unusual activity.</li>
                </ul>
              </div>
                <p>If you have any questions or need assistance, feel free to reach out to us at ${process.env.SUPPORT_EMAIL}.</p>
              <div style="text-align: center; margin-top: 20px; font-size: 12px; color: #999;">
                <p>Best regards,<br>VidVibe Team</p>
                <p>Follow us on social media:</p>
                <p><a href="${process.env.FACEBOOK_PROFILE}" style="color: #ec3454;">[Facebook]</a> <a href="${process.env.INSTAGRAM_PROFILE}" style="color: #ec3454;">[Instagram]</a></p>
              </div>
              </div>
            </body>
            </html>`
}

export const profileUpdated = (username) => {
    return `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Profile Updated</title>
            </head>
            <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">
            <div style="max-width: 600px; margin: 20px auto; background-color: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                <div style="text-align: center; margin-bottom: 20px; background: #ec3454; padding: 1rem; border-radius: 10px;">
                    <img src="https://ik.imagekit.io/onmwvwg7jy/VidVibe/images/VidVibe-splash-icon.PNG?updatedAt=1738481603417" alt="VidVibe Logo" style="max-width: 100px;">
                </div>
                <div style="text-align: left;">
                    <h1 style="color: #ec3454;">Profile Updated</h1>
                    <p>Hello @${username},</p>
                    <p>Your profile has been successfully updated.</p>
                    <p>If you did not request this update, please contact support immediately at <a href="mailto:${process.env.SUPPORT_EMAIL}" style="color: #ec3454;">[Support Email]</a></p>
                </div>
                <p>If you have any questions or need assistance, feel free to reach out to us at ${process.env.SUPPORT_EMAIL}.</p>
                <div style="text-align: center; margin-top: 20px; font-size: 12px; color: #999;">
                    <p>Best regards,<br>VidVibe Team</p>
                    <p>Follow us on social media:</p>
                    <p><a href="${process.env.FACEBOOK_PROFILE}" style="color: #ec3454;">[Facebook]</a> <a href="${process.env.INSTAGRAM_PROFILE}" style="color: #ec3454;">[Instagram]</a></p>
                </div>
            </div>
            </body>
            </html>`
}