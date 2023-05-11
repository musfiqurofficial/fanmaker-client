import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function Form() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState({});
  const [fileSelected, setFileSelected] = useState(false);

  // function to handle the submission of the form
  function handleSubmit(e) {
    e.preventDefault();

    // Check if all required fields are filled
    for (const question of questions) {
      if (question.required && !responses[question.id]) {
        alert(`Please fill out question ${question.id}`);
        return;
      }
    }

    const formData = new FormData();
    formData.append("old", responses[1]);
    formData.append("english", responses[2]);
    formData.append("OnlyFans", responses[3]);
    formData.append("face", responses[4]);
    formData.append("subsOnlyFans", responses[5]);
    formData.append("willingToInvest", responses[6]);
    formData.append("next6months", responses[7]);
    formData.append("createContent", responses[8]);
    formData.append("TikTokLink", responses[9]);
    formData.append("country", responses[10]);
    formData.append("language", responses[11]);
    formData.append("FullName", responses[12]);
    formData.append("email", responses[13]);
    formData.append("PhoneNumber", responses[14]);
    formData.append("expectations", responses[15]);

    formData.append("file", responses[16]);

    fetch("https://fanmaker-server.vercel.app/submit-form", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        toast.success("Successfully Submitted!");
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        toast.error("something is wrong!");
      });
  }

  const questions = [
    {
      id: 1,
      required: true,
      text: "Are you over +18 years old*",
      type: "radio",
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ],
    },
    {
      id: 2,
      required: true,
      text: "Do you speak english?*",
      type: "radio",
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ],
    },
    {
      id: 3,
      required: true,
      text: "Are you already active on OnlyFans?*",
      type: "radio",
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ],
    },
    {
      id: 4,
      required: true,
      text: "Are you comfortable showing everything including your face?*",
      type: "radio",
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ],
    },
    {
      id: 5,
      required: true,
      text: "How many subs do you already have on OnlyFans?*",
      type: "radio",
      options: [
        { value: "none", label: "none" },
        { value: "1-100", label: "1-100" },
        { value: "100-500", label: "100-500" },
        { value: "500-1000", label: "500-1000" },
        { value: "1000-5000", label: "1000-5000" },
      ],
    },
    {
      id: 6,
      required: true,
      text: "How much time are you willing to invest per day? (content creation)*",
      type: "radio",
      options: [
        { value: "max 1 - 2 hours", label: "max 1 - 2 hours" },
        { value: "max 3 - 6 hours", label: "max 3 - 6 hours" },
        { value: "max 4 - 8 hours", label: "max 4 - 8 hours" },
        { value: "max +10 hours", label: "max +10 hours" },
      ],
    },
    {
      id: 7,
      required: true,
      text: "What is your monthly income goal for the next 6 months?*",
      type: "radio",
      options: [
        { value: "$1000 - $5000", label: "$1000 - $5000" },
        { value: "$5000 - $10.000", label: "$5000 - $10.000" },
        { value: "$10.000 - $20.000", label: "$10.000 - $20.000" },
        { value: "$20.000 - $50.000", label: "$20.000 - $50.000" },
      ],
    },

    {
      id: 8,
      required: true,
      text: "Which cell phone do you use to create content?*",
      type: "text",
    },
    {
      id: 9,
      required: true,
      text: "Social Media Links (OnlyFans, Instagram, TikTok...)*",
      type: "text",
    },
    {
      id: 10,
      required: true,
      text: "Which country are you from?*",
      type: "text",
    },
    {
      id: 11,
      required: true,
      text: "What language do you speak?*",
      type: "text",
    },
    {
      id: 12,
      required: true,
      text: "Full Name*",
      type: "text",
    },
    {
      id: 13,
      required: true,
      text: "E-Mail*",
      type: "email",
    },
    {
      id: 14,
      required: true,
      text: "Phone number*",
      type: "text",
    },
    {
      id: 15,
      required: true,
      text: "What are your expectations from working with us?*",
      type: "text",
    },
    {
      id: 16,
      required: true,
      text: "Please upload high quality picture of your face & body*",
      type: "file",
    },
  ];

  const currentQuestionObj = questions[currentQuestion];
  const nextButtonDisabled = () => {
    if (currentQuestionObj.type === "radio") {
      return !responses[currentQuestionObj.id];
    } else if (currentQuestionObj.type === "file") {
      return !fileSelected;
    }
    return false;
  };

  return (
    <div className="max-w-xl my-5">
      <div className="bg-[#f7f7f7] p-5 rounded border border-dashed border-[#19a0e4]">
        <form onSubmit={handleSubmit}>
          <div className="">
            {/* question text*/}
            <h2 className="text-lg text-start font-semibold mb-4">
              {currentQuestionObj.text}
            </h2>

            {/* input field*/}
            {currentQuestionObj.type === "text" && (
              <input
                type="text"
                className="border rounded px-3 py-2 w-full"
                value={responses[currentQuestionObj.id] || ""}
                required
                onChange={(e) =>
                  setResponses({
                    ...responses,
                    [currentQuestionObj.id]: e.target.value,
                  })
                }
              />
            )}
            {currentQuestionObj.type === "email" && (
              <input
                type="email"
                className="border rounded px-3 py-2 w-full"
                value={responses[currentQuestionObj.id] || ""}
                required
                onChange={(e) =>
                  setResponses({
                    ...responses,
                    [currentQuestionObj.id]: e.target.value,
                  })
                }
              />
            )}

            {/* radio button*/}
            {currentQuestionObj.type === "radio" && (
              <div>
                {currentQuestionObj.options.map((option) => (
                  <label key={option.value} className="flex items-center mb-2">
                    <input
                      type="radio"
                      className="form-radio"
                      name={`question-${currentQuestionObj.id}`}
                      value={option.value}
                      required
                      checked={
                        responses[currentQuestionObj.id] === option.value
                      }
                      onChange={(e) =>
                        setResponses({
                          ...responses,
                          [currentQuestionObj.id]: e.target.value,
                        })
                      }
                    />
                    <span className="ml-2">{option.label}</span>
                  </label>
                ))}
              </div>
            )}

            {/* file upload*/}
            {currentQuestionObj.type === "file" && (
              <div>
                <input
                  type="file"
                  name="profileImage"
                  required
                  className="border rounded px-3 py-2 w-full"
                  onChange={(e) => {
                    setResponses({
                      ...responses,
                      [currentQuestionObj.id]: e.target.files[0],
                    });
                    setFileSelected(true);
                  }}
                />
                {fileSelected && (
                  <p>File selected: {responses[currentQuestionObj.id].name}</p>
                )}
              </div>
            )}

            {/* navigation buttons*/}
            <div className="mt-8 flex justify-end">
              {currentQuestion > 0 && (
                <button
                  className="bg-gray-300 hover:bg-gray-400 rounded px-4 py-2 mr-4"
                  onClick={() => setCurrentQuestion(currentQuestion - 1)}
                >
                  Previous
                </button>
              )}{" "}
              {currentQuestion < questions.length - 1 && (
                <button
                  className={`bg-[#19a0e4] hover:bg-blue-700 text-white rounded px-4 py-2 ${
                    nextButtonDisabled() && "opacity-50 cursor-not-allowed"
                  }`}
                  onClick={() => setCurrentQuestion(currentQuestion + 1)}
                  disabled={nextButtonDisabled()}
                >
                  Next
                </button>
              )}
              {currentQuestion === questions.length - 1 && (
                <button
                  type="submit"
                  className={`bg-[#19a0e4] hover:bg-blue-700 text-white rounded px-4 py-2 ${
                    nextButtonDisabled() && "opacity-50 cursor-not-allowed"
                  }`}
                  disabled={nextButtonDisabled()}
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </form>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </div>
  );
}

export default Form;
