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
          Content: `<strong>Вітаю, ви успішно відправили заявку з послугою: ${service} </strong><br /> <hr /><br />
          Імя: ${name} <br /> 
          Телефон: ${phone} <br />
          E-mail: ${email} <br />
          Послуга: ${service} <br />
          ${comment && `Повідомлення: ${comment}`}`,
        }),
      ],
      Subject: `Заявка на послугу ${service} віл Ольги Поліщук`,
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
