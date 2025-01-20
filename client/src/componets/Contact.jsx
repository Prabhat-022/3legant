
const Contact = () => {
    return (
        <>
            <div className="bg-gray-100 h-screen flex flex-col justify-center items-center">
                <h1 className="text-6xl font-bold">Contact Us</h1>
                <p className="text-xl mt-4">Have a question or just want to say hi? We'd love to hear from you.</p>
                <form className="mt-12 flex flex-col">
                    <input type="text" placeholder="Name" className="p-2 border-2 border-gray-300 rounded-md mb-4" />
                    <input type="email" placeholder="Email" className="p-2 border-2 border-gray-300 rounded-md mb-4" />
                    <textarea placeholder="Message" className="p-2 border-2 border-gray-300 rounded-md"></textarea>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-4">Send</button>
                </form>
            </div>

        </>
    )
}

export default Contact
