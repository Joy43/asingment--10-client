import { useState } from "react";
import { FaAngleDown } from 'react-icons/fa';


const Faq = () => {
  
        const [expandedIds, setExpandedIds] = useState([]);

    
        const faqData = [
            {
              "id": 1,
              "header": "Hotel Booking Service",
              "body": "Experience the best in hotel booking with our comprehensive service. Find the perfect accommodation for your next trip, whether it's a business stay, a family vacation, or a romantic getaway. We offer a wide range of hotels and lodging options to suit your needs and budget. Book with confidence and enjoy a comfortable and memorable stay with our hotel booking service."
            },
            {
              "id": 2,
              "header": "Booking Options",
              "body": "Choose from a variety of options, from luxury resorts to budget-friendly inns. Our hotel booking platform provides you with the flexibility to select the amenities and features that matter most to you. We make it easy for you to secure your reservation, so you can focus on planning your trip without any hassle."
            },
            {
              "id": 3,
              "header": "Where to Book",
              "body": "Our hotel booking service is accessible anytime, anywhere. You can book online through our website or use our mobile app to make reservations on the go. We provide a seamless booking experience, ensuring you find the right accommodation for your needs."
            },
            {
              "id": 4,
              "header": "Cancellation and Changes",
              "body": "We understand that plans can change. Our hotel booking platform offers flexible cancellation and modification options. If your travel plans evolve, you can easily adjust your reservation or cancel it without hassle. We're committed to providing you with a stress-free booking experience."
            },
            {
              "id": 5,
              "header": "Customer Support",
              "body": "Our dedicated customer support team is here to assist you around the clock. If you have any questions, concerns, or need assistance with your booking, feel free to reach out to us. We're dedicated to ensuring your hotel booking experience is smooth and enjoyable."
            }
          ]


      const toggleItem = (id) => {
        if (expandedIds.includes(id)) {
         
          setExpandedIds(expandedIds.filter((item) => item !== id));
        } else {
          
          setExpandedIds([...expandedIds, id]);
        }
      };
      
    return (
        <div className="max-w-screen-lg mx-auto p-4">
        <h1 className="text-2xl font-semibol mb-4">Frequently Asked Questions</h1>
        <div className="space-y-4">
          {faqData.map((faqItem) => (
            <div key={faqItem.id} className="bg-white shadow-md p-4 rounded-lg">
              <div
                className="cursor-pointer flex justify-between items-center"
                onClick={() => toggleItem(faqItem.id)}
              >
                <div className="text-lg font-medium text-gray-800">{faqItem.header}</div>
                <FaAngleDown
  size={24} 
  className={`transform ${expandedIds.includes(faqItem.id) ? "rotate-0" : "rotate-180"} transition-transform`}
  style={{
    fill: "#000000",
    transition: "color 0.3s ease-in-out", 
  }}
/>
              </div>
              <div
                className={`mt-4 text-gray-600 leading-relaxed ${
                  expandedIds.includes(faqItem.id) ? "" : "hidden"
                }`}
              >
                {faqItem.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Faq;