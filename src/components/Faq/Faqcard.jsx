import PropTypes from "prop-types";


const Faqcard = ({ faqItems}) => {
    return (
        <div className="max-w-screen-lg mx-auto p-4">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h1>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-white shadow-md p-4 rounded-lg">
              <div className="cursor-pointer flex justify-between items-center">
                <div className="text-lg font-medium text-gray-800">{item.question}</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-6 h-6 transform rotate-0 transition-transform"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 15a1 1 0 01-1-1V6a1 1 0 112 0v8a1 1 0 01-1 1zM5.293 9.293a1 1 0 111.414-1.414L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4z"
                  />
                </svg>
              </div>
              <div className="hidden mt-4 text-gray-600 leading-relaxed">
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    
    );
};
Faqcard.propTypes = {
    faqItems: PropTypes.arrayOf(
      PropTypes.shape({
        question: PropTypes.string.isRequired,
        answer: PropTypes.string.isRequired,
      })
    ).isRequired,
  };
export default Faqcard;