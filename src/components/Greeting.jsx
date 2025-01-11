import { useState } from "preact/hooks";

export default function Greeting({messages}) {
    const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))]
    console.log(randomMessage);
    const [greeting, setGreeting] = useState(messages[0])

    return (
        <div class="flex flex-col space-y-4 justify-center items-center mt-5">
            <h3 class="text-2xl text-gray-900 dark:text-gray-400">{greeting}! Thank you for visiting</h3>
            <button onClick={() => setGreeting(randomMessage())} class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                New Greeting
            </button>
        </div>
    )
}