const ElasticEmail = require("@elasticemail/elasticemail-client");

require("dotenv").config();

const { ELASTIC_API_KEY, FROM_MAIL } = process.env;

const defaultClient = ElasticEmail.ApiClient.instance;

const { apikey } = defaultClient.authentications;
apikey.apiKey = ELASTIC_API_KEY;

const api = new ElasticEmail.EmailsApi();

const sendDataToEmail = ({ name, email, phone, comment, service }) => {
  const emailToSend = ElasticEmail.EmailMessageData.constructFromObject({
    Recipients: [new ElasticEmail.EmailRecipient(email)],
    Content: {
      Body: [
        ElasticEmail.BodyPart.constructFromObject({
          ContentType: "HTML",
          Content: `
          <div style="max-width: 688px; margin: 0 auto; color: black; font-family: 'Montserrat', sans-serif;">
            <img style="width: 227px; margin-bottom: 37px" src='https://healthy-management.onrender.com/newlogo.png' alt="Healthy Management logo">
            <p style="margin-bottom: 37px; margin-top: 0;">Доброго дня, ${name}! <br/><br/>Дякуємо, що звернулися до студії Health Management. Мене звати Ольга Поліщук, я власниця та засновниця студії, я дякую вам за довіру та запит. Ми раді допомогти вам стати кращими. Зв'яжемося з вами протягом 24 годин.<br/><br/>З повагою, </p>

            <div style="width: 360px;background-color: rgb(6, 33, 54); border-radius: 16px;  padding: 24px; display: flex; margin-bottom: 37px"> 
              <img style="display: inline-block; border-radius: 16px; width: 112px; height: 112px; margin-right: 24px" src='https://healthy-management.onrender.com/olga.png' alt="Olga Polichshyk">
              <div >
                <h2 style="margin-top: 0; color: white; font-size: 16px; font-weight: 600; line-height: 24px; margin-bottom: 8px" >Ольга Поліщук</h2>
                <p style="color: white; font-size: 12px; line-height: 16px; margin-top: 0; margin-bottom: 8px" >+380 673 160 556</p>
                <p style="color: white; text-decoration: none; font-size: 12px; line-height: 16px; margin-top: 0;  margin-bottom: 16px" >healthymanagement.com.ua</p>
                <div style="margin-top: 20px">
                  <a style="margin-right: 16px" target="_blank" href="https://www.instagram.com/healthymanagement_ua/"><img style="width: 16px; height: 16px" src="https://www.edigitalagency.com.au/wp-content/uploads/new-Instagram-logo-white-glyph.png" alt="Instagram link" /></a>
                  <a style="margin-right: 16px" target="_blank" href="https://www.facebook.com/people/Healthy-management/61551346490841/"><img style="width: 16px; height: 16px" src="https://www.edigitalagency.com.au/wp-content/uploads/facebook-icon-white-png.png" alt="Facebook link" /></a>
                  <a target="_blank" href="https://www.linkedin.com/in/olga-polishchuk-83362140/"><img style="width: 16px; height: 16px" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-white-icon.png" alt="Linkedin link" /></a>
              </div>
            </div>
          </div>

          <p style="color: rgb(22,23,23); font-size: 16px; font-weight: 500; line-height: 24px; margin-bottom: 8px">Дані, які ви залишили:</p>
          <ul style="color: rgb(22,23,23); font-size: 12px; line-height: 16px">
            <li >Ім’я:  ${name}</li>
            <li >Емейл:  ${email}</li>
            <li >Номер телефону: ${phone}</li>
            <li >Послуга: ${service}</li>
            ${comment ? `<li >Повідомлення: ${comment}</li> ` : ""}
          </ul>`,
        }),
      ],
      Subject: `Заявка послуги "${service}" для Ольги Поліщук`,
      From: FROM_MAIL,
    },
  });

  var callback = function (error, data, response) {
    if (error) {
      console.error(error);
    } else {
      console.log("API called successfully.");
    }
  };
  api.emailsPost(emailToSend, callback);
};

module.exports = { sendDataToEmail };
