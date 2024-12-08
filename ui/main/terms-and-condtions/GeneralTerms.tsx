import React from 'react';

function TermsAndConditionsPage() {
  return (
    <div className="container md:ml-10 px-4 bg-cover border-[#3b3b3b] py-10 md:0 md:p-10 rounded-2xl bg-slate-200 md:w-5/6"
      style={{
        borderWidth: 1,
        backgroundImage: 'url("images/statics/delegate.jpg")',
      }}>
      {/* <h1 className="text-xl font-bold text-gray-800">General Terms & Conditions</h1> */}
      <h2 className="text-lg font-semibold mt-4">Introduction</h2>
      <p>
        The following terminology applies to these Terms and Conditions, Privacy Statement, and Disclaimer Notice, and all Agreements:
        "Client," "You," and "Your" refer to you, the person visiting this website and compliant with the Company's terms and conditions.
        "The Company," "Ourselves," "We," "Our," and "Us," refer to our Company. "Party," "Parties," or "Us," refer to both the Client
        and ourselves. All terms refer to the offer, acceptance, and consideration of payment necessary to undertake the process of
        our assistance to the Client in the most appropriate manner, for the express purpose of meeting the Client’s needs in respect
        of provision of the Company’s stated services, in accordance with and subject to, prevailing laws of India. Any use of the above
        terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and
        therefore as referring to the same.
      </p>
      <h3 className="text-lg font-semibold mt-4">Alteration of the Advertised Package</h3>
      <p>
        Capstone Business Intelligence shall use its best endeavours to adhere to the advertised package and agenda for the event disclosed
        to the Client prior to the date of this agreement, but such package and/or agenda may be altered, or parts thereof omitted or dates
        thereof changed, for any cause that Capstone Business Intelligence (after consultation with the Client), acting reasonably, shall
        consider necessary. Notwithstanding the above, Capstone Business Intelligence will use its best efforts to organize the event at a
        suitable venue or online platform (whichever is applicable) and on the proposed dates. Do not rely on any oral representations with
        respect to the dates. Any change in dates will be communicated by email to the client, failing which, the Client is entitled to a
        full refund of the amount paid. Capstone Business Intelligence is entitled, without penalty, to change the venue or online platform
        (whichever is applicable) or date of the event.
      </p>
      <h3 className="text-lg font-semibold mt-4">Cancellation by Client</h3>
      <ul className="list-disc ml-4">
        <li>Any cancellation request received within 48 hours of booking will be entitled to receive a credit note equivalent to the full booking amount—only if the booking date is not less than 30 days from the event date.</li>
        <li>Any cancellation request raised after 48 hours of booking will be entitled to receive a credit note equivalent to 50% of the total booking amount—only if the booking date is not less than 30 days from the event date.</li>
        <li>Any cancellation request received within 30 days of the event date will not be entitled to any credit note.</li>
        <li>If the client does not officially request a cancellation and does not participate in the event, there shall be no credit note issued to the client.</li>
      </ul>
      <p>In all the above scenarios, if the client has not yet made the payment, 100% of the invoiced amount shall remain due.</p>
      <h3 className="text-lg font-semibold mt-4">Limitation of Liability</h3>
      <p>
        Capstone Business Intelligence shall not be liable for any special, consequential, or incidental damages arising out of this agreement
        or the services provided hereunder, including but not limited to damages for lost profits, loss of use, or any damages or sums paid by
        the Client to third parties, even if Capstone Business Intelligence has been advised of the possibility of such damages.
      </p>
      <h3 className="text-lg font-semibold mt-4">Privacy and Data Protection</h3>
      <p>
        Capstone Business Intelligence is granted the right to use, for promotional purposes, any material recorded at the event, whether in photographic,
        audio, or audiovisual format, without time limitation and in any format. The Attendee hereby gives up any privacy right they might have due to their
        presence at the event and accepts not to enter into any legal proceedings against Capstone Business Intelligence arising from the Organizer’s use of such material.
      </p>
      <h3 className="text-lg font-semibold mt-4">Force Majeure</h3>
      <p>
        In the event of postponement or abandonment of the event due to war, threats, or acts of terrorism, or force majeure, Capstone Business Intelligence
        shall be under no liability in any way whatsoever in respect of any expenditure, liability, or loss incurred by Clients.
      </p>
      <h3 className="text-lg font-semibold mt-4">License</h3>
      <p>
        Unless otherwise stated, Capstone Business Intelligence and/or its licensors own the intellectual property rights for all material on Capstone Business Intelligence.
        All intellectual property rights are reserved.
      </p>
    </div>
  );
}

export default TermsAndConditionsPage;
