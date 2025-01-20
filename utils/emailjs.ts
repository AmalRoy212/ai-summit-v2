import emailjs from "emailjs-com";

export default async function sendNotificationMail(
  emailParams: Record<string, string>
) {
  await emailjs.send(
    "service_rxw06em",
    "template_uy4djxw",
    emailParams,
    "g7A8AmcmomsOelWRo"
  );
}
