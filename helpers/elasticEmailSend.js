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
          <div>
          <div style="background-color: rgb(6, 33, 54); border-radius: 16px; display: flex; padding: 20px; gap: 25px; align-items: center"> 
           <img style="border-radius: 12px; width: 45%" src='https://withinkael.github.io/healthy-management-project/assets/olga_picture1x-48yp0Cvc.webp' alt="Olga">
           <h2 style="color: white; font-size: 36px; font-weight: 400; line-height: 62px" >Olga <br />Polishchuk</h2>
          </div>
          <hr /> <h1 style="text-align: center; font-weight: 500">Healthy Management</h1><hr />
          <p style="text-align: center">Вітаємо ${name}! Ви звернулися до студії Healthy Management. Мене звати Ольга Поліщук, я власниця та засновниця студії, і я дякую вам за довіру та запит, ми раді допомогти вам стати кращими у галузі ${service}. </p>
         
          <div style="margin-top: 60px; margin-bottom: 60px; display: flex; justify-content: space-between">
          <a target="_blank" style="text-align: center; letter-spacing: 0.1em; font-size: 20px; font-weight: 500; line-height: 28px; padding: 10px; width: 30%; background-color: #d7d1a1; color: black; border-radius: 10px" href="https://withinkael.github.io/healthy-management-project/#aboutUs">Про нас</a>
          <a target="_blank" style="text-align: center; letter-spacing: 0.1em; font-size: 20px; font-weight: 500; line-height: 28px; padding: 10px; width: 30%; background-color: #ededed; color: black; border-radius: 10px" href="https://withinkael.github.io/healthy-management-project/#services">Послуги</a>
          <a target="_blank" style="text-align: center; letter-spacing: 0.1em; font-size: 20px; font-weight: 500; line-height: 28px; padding: 10px; width: 30%; background-color: #d4a6a6; color: black; border-radius: 10px" href="https://withinkael.github.io/healthy-management-project/#projects">Проєкти</a>
          </div>

          <p style="margin-top: 20px; font-weight: 500">Ось дані, які ви залишили у заявці: </p>
          <ul style="font-weight: 600; margin-bottom: 30px">
            <li >Імя: ${name}</li>
            <li >Телефон: ${phone}</li>
            <li >E-mail: ${email}</li>
            <li >Послуга: ${service}</li>
            ${comment && `<li >Повідомлення: ${comment}</li>`}
          </ul>
          
            <div style="border-radius: 12px; background-color: rgb(6, 33, 54); padding: 30px 20px; display: flex; flex-direction: column; gap: 10px">
              <h2 style="color: white; font-size: 24px">Дякуємо за інтерес! 😍 </h2>
              <p>Ми зв’яжемося з Вами протягом 24 годин </p>
              <p>А також наша студія надає послуги медичного менеджменту, медичного маркетингу, консалтингу бізнес-процесів та створення стратегій здоров’я для підприємств та бізнесу.</p>
              <div style="display: flex; gap: 10px; margin-top: 20px">
                <a  target="_blank" href="https://www.facebook.com/people/Healthy-management/61551346490841/"><img style="width: 30px; height: 30px; filter: invert(1)" src="https://www.edigitalagency.com.au/wp-content/uploads/facebook-icon-white-png.png" alt="social media" /></a>
                <a  target="_blank" href="https://www.instagram.com/healthymanagement_ua/"><img style="width: 30px; height: 30px; filter: invert(1)" src="https://www.edigitalagency.com.au/wp-content/uploads/new-Instagram-logo-white-glyph.png" alt="social media" /></a>
              </div>
              </div>
          
          </div>`,
        }),
      ],
      Subject: `Заявка у галузі "${service}" для Ольги Поліщук`,
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
