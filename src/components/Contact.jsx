import { useState } from 'react'

export default function Contact() {
    const [result, setResult] = useState("");
    const encode = (data) => {
        return Object.keys(data)
            .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");

        const form = event.target;
        const formData = new FormData(form);

        // Add Netlify form-name so Netlify can capture the submission
        formData.append("form-name", "contact");

        const data = {};
        formData.forEach((value, key) => (data[key] = value));

        try {
            const res = await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode(data),
            });

            if (res.ok) {
                setResult("Message sent successfully");
                form.reset();
            } else {
                setResult("There was an error sending the message. Please try again later.");
            }
        } catch (err) {
            console.error(err);
            setResult("There was an error sending the message. Please try again later.");
        }
    };

    return (
        <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('./assets/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none">

            <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
            <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">I&apos;d love to hear from you! If you have any questions, comments or feedback, please use the form below.</p>

            <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={onSubmit} className="max-w-2xl mx-auto">

                {/* Netlify hidden inputs */}
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="subject" value="Hariprasath Portfolio - New form Submission" />
                <input type="hidden" name="to" value="hariprasathns804@gmail.com" />
                <input type="hidden" name="bot-field" />

                <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
                    <input type="text" placeholder="Enter your name" className="flex-1 px-3 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-darkHover/30" required name="name" />

                    <input type="email" placeholder="Enter your email" className="flex-1 px-3 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-darkHover/30" required name="email" />
                </div>
                <textarea rows="6" placeholder="Enter your message" className="w-full px-4 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white mb-6 dark:bg-darkHover/30" required name="message"></textarea>
                <button type='submit' className="py-2 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border dark:border-white/30 dark:hover:bg-darkHover">
                    Submit now
                    <img src="./assets/right-arrow-white.png" alt="" className="w-4" />
                </button>
                <p className='mt-4'>{result}</p>
            </form>
        </div>
    )
}