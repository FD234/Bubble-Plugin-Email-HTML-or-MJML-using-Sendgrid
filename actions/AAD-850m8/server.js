function(properties, context) {
    
    context.async( async callback => {
        try {
            
            const sgMail = require('@sendgrid/mail');
    		sgMail.setApiKey(context.keys.api_key);

    var msg = {
      to: properties.to,
      from: properties.from,
      subject: properties.subject,
      text: properties.text,
      html: properties.html
    };
    
    const mjml2html = require("mjml");

    if(properties.mjml) {

        var htmlOutput = mjml2html(properties.mjml);

        msg['html'] = htmlOutput.html;
    }

    //ES6
    await sgMail
      .send(msg);
          	

          callback(null, {});
        }
        catch ( err ) {
            callback( err );
        }
    });

    
}